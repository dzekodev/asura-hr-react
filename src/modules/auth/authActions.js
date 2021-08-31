import selectors from 'modules/auth/authSelectors';
import service from 'modules/auth/authService';
import Errors from 'modules/shared/error/errors';
import Message from 'view/shared/message';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
import { getStore } from 'modules/store';
import * as I18nAction from 'modules/layout/layoutActions';
import { getLanguageCode } from 'i18n';

const prefix = 'AUTH';

const actions = {
  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

  AUTH_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  AUTH_INIT_ERROR: `${prefix}_INIT_ERROR`,
  INVALIDE_MAIL: `${prefix}_INVALIDE_MAIL`,

  AUTH_START: `${prefix}_START`,
  SAVE_TOKEN: `${prefix}_SAVE_TOKEN`,

  AUTH_SUCCESS: `${prefix}_SUCCESS`,
  AUTH_ERROR: `${prefix}_ERROR`,

  UPDATE_PROFILE_START: `${prefix}_UPDATE_PROFILE_START`,
  UPDATE_PROFILE_SUCCESS: `${prefix}_UPDATE_PROFILE_SUCCESS`,
  UPDATE_PROFILE_ERROR: `${prefix}_UPDATE_PROFILE_ERROR`,

  CURRENT_USER_REFRESH_START: `${prefix}_CURRENT_USER_REFRESH_START`,
  CURRENT_USER_REFRESH_SUCCESS: `${prefix}_CURRENT_USER_REFRESH_SUCCESS`,
  CURRENT_USER_REFRESH_ERROR: `${prefix}_CURRENT_USER_REFRESH_ERROR`,

  PASSWORD_RESET_START: `${prefix}_PASSWORD_RESET_START`,
  PASSWORD_RESET_SUCCESS: `${prefix}_PASSWORD_RESET_SUCCESS`,
  PASSWORD_RESET_ERROR: `${prefix}_PASSWORD_RESET_ERROR`,

  EMAIL_CONFIRMATION_START: `${prefix}_EMAIL_CONFIRMATION_START`,
  EMAIL_CONFIRMATION_SUCCESS: `${prefix}_EMAIL_CONFIRMATION_SUCCESS`,
  EMAIL_CONFIRMATION_ERROR: `${prefix}_EMAIL_CONFIRMATION_ERROR`,

  INIT_UPDATE_EMAIL_START: `${prefix}_INIT_UPDATE_EMAIL_START`,
  INIT_UPDATE_EMAIL_SUCCESS: `${prefix}_INIT_UPDATE_EMAIL_SUCCESS`,
  INIT_UPDATE_EMAIL_ERROR: `${prefix}_INIT_UPDATE_EMAIL_ERROR`,

  VALIDATE_UPDATE_EMAIL_START: `${prefix}_VALIDATE_UPDATE_EMAIL_START`,
  VALIDATE_UPDATE_EMAIL_SUCCESS: `${prefix}_VALIDATE_UPDATE_EMAIL_SUCCESS`,
  VALIDATE_UPDATE_EMAIL_ERROR: `${prefix}_VALIDATE_UPDATE_EMAIL_ERROR`,
  doClearErrorMessage() {
    return {
      type: actions.ERROR_MESSAGE_CLEARED,
    };
  },

  doSendEmailConfirmation:
    () => async (dispatch, getState) => {
      try {
        dispatch({
          type: actions.EMAIL_CONFIRMATION_START,
        });
        var user = getStore().getState().auth;

        let res = await service.sendEmailVerification(user);
        if (res == 0) {
          Message.success(
            i18n('auth.verificationEmailSuccess'),
          );
          dispatch({
            type: actions.EMAIL_CONFIRMATION_SUCCESS,
          });
        } else {
          if (res == 1) {
            Message.success(i18n('auth.alreadyActive'));
            dispatch({
              type: actions.EMAIL_CONFIRMATION_SUCCESS,
            });
          }
          window.location.reload();
        }
      } catch (error) {
        Errors.handle(error);
        dispatch({
          type: actions.EMAIL_CONFIRMATION_ERROR,
        });
      }
    },

  doSendEmailCodeVerification:
    (code) => async (dispatch, getState) => {
      try {
        dispatch({
          type: actions.EMAIL_CONFIRMATION_START,
        });
        var user = getStore().getState().auth;

        let res = await service.SendEmailCode(code, user);
        if (res == 1) {
          Message.success(
            i18n('auth.verificationEmailSuccess'),
          );
          dispatch({
            type: actions.EMAIL_CONFIRMATION_SUCCESS,
          });

          getHistory().push({
            pathname: '/',
          });
        } else {
          Message.success(i18n('auth.alreadyActive'));
          dispatch({
            type: actions.EMAIL_CONFIRMATION_SUCCESS,
          });
        }
      } catch (error) {
        Errors.handle(error);
        dispatch({
          type: actions.EMAIL_CONFIRMATION_ERROR,
        });
      }
    },

  doSendPasswordResetEmail: (email) => async (dispatch) => {
    try {
      dispatch({ type: actions.PASSWORD_RESET_START });
      let result = await service.sendPasswordResetEmail(
        email,
      );
      if (result == 1) {
        Message.success(i18n('auth.passwordResetSuccess'));
        getHistory().push({
          pathname: '/auth/forgot-password/code',
          state: { email: email },
        });

        dispatch({ type: actions.PASSWORD_RESET_SUCCESS });
      } else {
        Message.error(
          i18n('auth.emailAddressVerificationEmail.error'),
        );
        dispatch({ type: actions.PASSWORD_RESET_SUCCESS });
      }
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: actions.PASSWORD_RESET_ERROR });
    }
  },
  doSendCodeResetEmail:
    (email, code) => async (dispatch) => {
      try {
        dispatch({ type: actions.PASSWORD_RESET_START });
        let result = await service.sendCodeResetEmail(
          email,
          code,
        );
        if (result.status == 1) {
          getHistory().push({
            pathname: '/auth/forgot-password/new-password',
            state: { secret_token: result.secret_token },
          });

          dispatch({
            type: actions.PASSWORD_RESET_SUCCESS,
          });
        } else {
          Message.error(
            i18n(
              'auth.emailAddressVerificationEmail.error',
            ),
          );
          dispatch({
            type: actions.PASSWORD_RESET_SUCCESS,
          });
        }
      } catch (error) {
        Errors.handle(error);
        dispatch({ type: actions.PASSWORD_RESET_ERROR });
      }
    },

  resetEmailUpdatePassword:
    (password, secret_token) => async (dispatch) => {
      try {
        dispatch({ type: actions.PASSWORD_RESET_START });
        await service.resetPassword(password, secret_token);

        getHistory().push('/');
        Message.success(
          i18n('auth.passwordResetDoneSuccess'),
        );

        dispatch({ type: actions.PASSWORD_RESET_SUCCESS });
      } catch (error) {
        Message.error(i18n('auth.passwordReset.error'));
        Errors.handle(error);
        dispatch({ type: actions.PASSWORD_RESET_ERROR });
      }
    },

  doSigninSocial:
    (provider, rememberMe) => async (dispatch) => {
      try {
        dispatch({ type: actions.AUTH_START });

        let authenticationUser = null;
        let currentUser = null;

        const credentials = await service.signinWithSocial(
          provider,
          rememberMe,
        );

        if (credentials && credentials.user) {
          authenticationUser = credentials.user;
          currentUser = await service.fetchMe();
          currentUser.emailVerified =
            authenticationUser.emailVerified;
        }

        // in background
        // service.reauthenticateWithStorageToken();

        dispatch({
          type: actions.AUTH_SUCCESS,
          payload: {
            currentUser,
            authenticationUser,
          },
        });
      } catch (error) {
        await service.signout();
        Errors.handle(error);

        dispatch({
          type: actions.AUTH_ERROR,
        });
      }
    },

  doRegisterEmailAndPassword:
    (email, password, firstName, lastName) =>
    async (dispatch) => {
      try {
        dispatch({ type: actions.AUTH_START });
        const SignupauthenticationUser =
          await service.registerWithEmailAndPassword(
            email,
            password,
            firstName,
            lastName,
          );
        let authenticationUser = null;
        let currentUser = null;
        const credentials =
          await service.signinWithEmailAndPassword(
            email,
            password,
            null,
          );
        dispatch({
          type: actions.SAVE_TOKEN,
          payload: {
            refresh_token: credentials.refresh_token,
            jwt_token: credentials.jwt_token,
            jwt_expired: credentials.jwt_token_expires,
          },
        });
        localStorage.setItem(
          '@RefreshToken:key',
          credentials.refresh_token,
        );

        currentUser = await service.fetchMe();

        authenticationUser = currentUser;

        dispatch({
          type: actions.AUTH_SUCCESS,
          payload: {
            currentUser,
            authenticationUser,
          },
        });
      } catch (error) {
        if (
          error.response.data.message.includes(
            'User not activated',
          )
        ) {
          let currentUser = {};
          currentUser.active = false;
          currentUser.id = '1';
          currentUser.firstName = firstName;
          currentUser.lastName = lastName;
          currentUser.email = email;

          dispatch({
            type: actions.AUTH_SUCCESS,
            payload: {
              currentUser,
            },
          });
        } else {
          if (Errors.errorCode(error) == 500) {
            Errors.handle(error);
            dispatch({
              type: actions.AUTH_ERROR,
              payload: i18n('auth.alreadyUsed'),
            });
          } else {
            Errors.handle(error);
            dispatch({
              type: actions.AUTH_ERROR,
              payload: Errors.selectMessage(error),
            });
          }
        }
      }
    },

  doSigninWithEmailAndPassword:
    (email, password, rememberMe) => async (dispatch) => {
      let authenticationUser = null;
      let currentUser = null;
      try {
        dispatch({ type: actions.AUTH_START });

        const credentials =
          await service.signinWithEmailAndPassword(
            email,
            password,
            rememberMe,
          );
        dispatch({
          type: actions.SAVE_TOKEN,
          payload: {
            refresh_token: credentials.refresh_token,
            jwt_token: credentials.jwt_token,
            jwt_expired: credentials.jwt_token_expires,
          },
        });
        if (rememberMe) {
          localStorage.setItem(
            '@RefreshToken:key',
            credentials.refresh_token,
          );
        }
        currentUser = await service.fetchMe();
        authenticationUser = currentUser;

        dispatch({
          type: actions.AUTH_SUCCESS,
          payload: {
            currentUser,
            authenticationUser,
          },
        });
      } catch (error) {
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.message &&
          error.response.data.message.includes(
            'User not activated',
          )
        ) {
          let currentUser = {};
          currentUser.active = false;
          currentUser.id = '1';
          currentUser.firstName = null;
          currentUser.lastName = null;
          currentUser.email = email;
          currentUser.password = password;

          dispatch({
            type: actions.AUTH_SUCCESS,
            payload: {
              currentUser,
            },
          });
        } else {
          if (Errors.errorCode(error) !== 400) {
            Errors.handle(error);
          }
          dispatch({
            type: actions.AUTH_ERROR,
            payload: Errors.selectMessage(error),
          });
        }
      }
    },

  doSignout: () => async (dispatch) => {
    try {
      dispatch({ type: actions.AUTH_START });

      var refresh_token =
        getStore().getState().auth.refresh_token;
      await service.signout(refresh_token);
      localStorage.clear();

      dispatch({
        type: actions.SAVE_TOKEN,
        payload: {
          refresh_token: null,
          jwt_token: null,
          jwt_expired: null,
        },
      });
      dispatch({
        type: actions.AUTH_SUCCESS,
        payload: {
          authenticationUser: null,
          currentUser: null,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.AUTH_ERROR,
      });
    }
  },

  doSendInitUpdateEmail:
    (new_email) => async (dispatch) => {
      try {
        dispatch({ type: actions.INIT_UPDATE_EMAIL_START });
        var email =
          getStore().getState().auth.currentUser.email;

        await service.send_init_update_email(
          email,
          new_email,
        );
        dispatch({
          type: actions.INIT_UPDATE_EMAIL_SUCCESS,
        });

        Message.success(
          i18n('auth.verificationEmailSuccess'),
        );
      } catch (error) {
        Message.error(i18n('auth.alreadyUsed'));

        dispatch({
          type: actions.INIT_UPDATE_EMAIL_ERROR,
        });
      }
    },

  doSendUpdateEmail: (code) => async (dispatch) => {
    try {
      dispatch({
        type: actions.VALIDATE_UPDATE_EMAIL_START,
      });
      var email =
        getStore().getState().auth.currentUser.email;

      await service.send_update_email(email, code);
      dispatch({
        type: actions.VALIDATE_UPDATE_EMAIL_SUCCESS,
      });
      await dispatch(actions.doRefreshCurrentUser());

      Message.success(i18n('auth.profile.success'));

      window.location.reload();
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.VALIDATE_UPDATE_EMAIL_ERROR,
      });
    }
  },

  doSigninFromAuthChange:
    (authenticationUser) => async (dispatch) => {
      try {
        let currentUser = null;
        if (authenticationUser != null) {
          localStorage.setItem(
            '@RefreshToken:key',
            authenticationUser.refresh_token,
          );

          getStore().dispatch({
            type: actions.SAVE_TOKEN,
            payload: {
              refresh_token:
                authenticationUser.refresh_token,
              jwt_token: authenticationUser.jwt_token,
              jwt_expired:
                authenticationUser.jwt_token_expires,
            },
          });

          currentUser = await service.fetchMe();
          authenticationUser = currentUser;
        }

        dispatch({
          type: actions.AUTH_INIT_SUCCESS,
          payload: {
            currentUser,
            authenticationUser: authenticationUser,
          },
        });
      } catch (error) {
        service.signout();
        localStorage.clear();

        Errors.handle(error);

        dispatch({
          type: actions.AUTH_INIT_ERROR,
          payload: error,
        });
      }
    },

  doRefreshCurrentUser:
    () => async (dispatch, getState) => {
      try {
        dispatch({
          type: actions.CURRENT_USER_REFRESH_START,
        });

        //const authenticationUser = selectors.selectAuthenticationUser( getState(),  );

        var currentUser = await service.fetchMe();

        // in background
        //service.reauthenticateWithStorageToken();

        dispatch({
          type: actions.CURRENT_USER_REFRESH_SUCCESS,
          payload: {
            currentUser,
          },
        });
      } catch (error) {
        service.signout();
        Errors.handle(error);

        dispatch({
          type: actions.CURRENT_USER_REFRESH_ERROR,
          payload: error,
        });
      }
    },

  doUpdateProfile:
    (firstName, lastName, phoneNumber, avatars) =>
    async (dispatch) => {
      try {
        dispatch({
          type: actions.UPDATE_PROFILE_START,
        });

        await service.updateProfile(
          firstName,
          lastName,
          phoneNumber,
          avatars,
        );

        dispatch({
          type: actions.UPDATE_PROFILE_SUCCESS,
        });
        dispatch(actions.doRefreshCurrentUser());
        Message.success(i18n('auth.profile.success'));
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: actions.UPDATE_PROFILE_ERROR,
        });
      }
    },

  doUpdateAccountSetting:
    (language, timezone) => async (dispatch) => {
      try {
        dispatch({
          type: actions.UPDATE_PROFILE_START,
        });

        await service.updateSettingProfile(
          language,
          timezone,
        );

        dispatch({
          type: actions.UPDATE_PROFILE_SUCCESS,
        });
        dispatch(actions.doRefreshCurrentUser());

        Message.success(i18n('auth.profile.success'));
        window.location.reload();
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: actions.UPDATE_PROFILE_ERROR,
        });
      }
    },

  doUpdatePassword:
    (email, password, oldpassword) => async (dispatch) => {
      try {
        dispatch({
          type: actions.UPDATE_PROFILE_START,
        });

        await service.updatePassword(
          email,
          password,
          oldpassword,
        );

        dispatch({
          type: actions.UPDATE_PROFILE_SUCCESS,
        });
        dispatch(actions.doRefreshCurrentUser());
        Message.success(i18n('auth.editpassword.success'));
      } catch (error) {
        let msg = null;
        if (
          error.response.data.message.includes(
            "Invalid 'username' or 'password'",
          )
        ) {
          msg = i18n('auth.editpassword.error');
          Message.error(i18n('auth.editpassword.error'));
        } else {
          Errors.handle(error);
        }

        dispatch({
          type: actions.UPDATE_PROFILE_ERROR,
          payload: msg,
        });
      }
    },
};

export default actions;
