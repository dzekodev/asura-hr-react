import actions from 'modules/auth/authActions';

const initialData = {
  authenticationUser: null,
  currentUser: null,
  loadingInit: true,
  showModalActivateAccount: false,

  loadingEmailConfirmation: false,
  loadingPasswordReset: false,
  loadingUpdateProfile: false,
  loading: false,
  errorMessage: null,
  actor: null,
  refresh_token: null,
  jwt_token: null,
  jwt_expired: null,
  socket: null,
  showInputCode: false,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.ERROR_MESSAGE_CLEARED) {
    return {
      ...state,
      errorMessage: null,
    };
  }

  if (type === actions.CURRENT_USER_REFRESH_SUCCESS) {
    return {
      ...state,
      currentUser: payload.currentUser || null,
    };
  }

  if (type === actions.AUTH_START) {
    return {
      ...state,
      errorMessage: null,
      loading: true,
    };
  }

  if (type === actions.SAVE_TOKEN) {
    return {
      ...state,
      refresh_token: payload.refresh_token,
      jwt_token: payload.jwt_token,
      jwt_expired: payload.jwt_expired,
    };
  }

  if (type === actions.AUTH_SUCCESS) {
    return {
      ...state,
      authenticationUser:
        payload.authenticationUser || null,
      currentUser: payload.currentUser || null,
      errorMessage: null,
      loading: false,
    };
  }

  if (type === actions.AUTH_ERROR) {
    return {
      ...state,
      authenticationUser: null,
      currentUser: null,
      errorMessage: payload || null,
      loading: false,
    };
  }

  if (type === actions.EMAIL_CONFIRMATION_START) {
    return {
      ...state,
      loadingEmailConfirmation: true,
    };
  }

  if (type === actions.EMAIL_CONFIRMATION_SUCCESS) {
    return {
      ...state,
      loadingEmailConfirmation: false,
    };
  }

  if (type === actions.EMAIL_CONFIRMATION_ERROR) {
    return {
      ...state,
      loadingEmailConfirmation: false,
    };
  }

  if (type === actions.VALIDATE_UPDATE_EMAIL_START) {
    return {
      ...state,
      loadingEmailConfirmation: true,
    };
  }

  if (type === actions.VALIDATE_UPDATE_EMAIL_SUCCESS) {
    return {
      ...state,
      loadingEmailConfirmation: false,
    };
  }

  if (type === actions.VALIDATE_UPDATE_EMAIL_ERROR) {
    return {
      ...state,
      loadingEmailConfirmation: false,
    };
  }

  if (type === actions.INIT_UPDATE_EMAIL_START) {
    return {
      ...state,
      loadingEmailConfirmation: true,
      showInputCode: false,
    };
  }

  if (type === actions.INIT_UPDATE_EMAIL_SUCCESS) {
    return {
      ...state,
      loadingEmailConfirmation: false,
      showInputCode: true,
    };
  }

  if (type === actions.INIT_UPDATE_EMAIL_ERROR) {
    return {
      ...state,
      loadingEmailConfirmation: false,
      showInputCode: false,
    };
  }

  if (type === actions.PASSWORD_RESET_START) {
    return {
      ...state,
      loadingPasswordReset: true,
    };
  }

  if (type === actions.PASSWORD_RESET_SUCCESS) {
    return {
      ...state,
      loadingPasswordReset: false,
    };
  }

  if (type === actions.PASSWORD_RESET_ERROR) {
    return {
      ...state,
      loadingPasswordReset: false,
    };
  }

  if (type === actions.UPDATE_PROFILE_START) {
    return {
      ...state,
      loadingUpdateProfile: true,
    };
  }

  if (type === actions.UPDATE_PROFILE_SUCCESS) {
    return {
      ...state,
      loadingUpdateProfile: false,
    };
  }

  if (type === actions.UPDATE_PROFILE_ERROR) {
    return {
      ...state,
      loadingUpdateProfile: false,
      errorMessage: payload || null,
    };
  }

  if (type === actions.AUTH_INIT_SUCCESS) {
    return {
      ...state,
      authenticationUser:
        payload.authenticationUser || null,
      currentUser: payload.currentUser || null,
      loadingInit: false,
    };
  }

  if (type === actions.AUTH_INIT_ERROR) {
    return {
      ...state,
      authenticationUser: null,
      currentUser: null,
      loadingInit: false,
    };
  }

  return state;
};
