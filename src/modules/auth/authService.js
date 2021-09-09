import gql from 'graphql-tag';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import axios from 'axios';
import { getStore } from 'modules/store';
import config from 'config';

export default class AuthService {
  static async createUser(payload) {
    var data = await axios.post(
      `${config.authApi}local/register`,
      {
        ...payload,
      },
    );

    return data.data.user_id;
  }

  static async send_init_update_email(email, new_email) {
    var data = await axios.post(
      `${config.authApi}init_update_email`,
      {
        email: email,
        new_email: new_email,
      },
    );

    return data;
  }

  static async send_update_email(email, code_token) {
    var data = await axios.post(
      `${config.authApi}update_email`,
      {
        email: email,
        code_token: code_token,
      },
    );

    return data;
  }

  static onAuthStateChanged(
    callbackSuccess,
    callbackError,
  ) {
    try {
      var user = null;
      let refresh_token = localStorage.getItem(
        '@RefreshToken:key',
      );
      if (refresh_token != null) {
        this.refreshToken(refresh_token)
          .then((token) => callbackSuccess(token))
          .catch(() => callbackSuccess(null));
      } else {
        callbackSuccess(user);
      }
    } catch (error) {
      callbackError(error);
    }
  }

  static async valideToken(token) {
    var data = await axios.post(
      `${config.authApi}test_token`,
      {
        token: token,
      },
    );

    return data.data.status;
  }

  static async refreshToken(refreshtoken) {
    var data = await axios.post(
      `${config.authApi}refresh-token`,
      {
        refresh_token: refreshtoken,
      },
    );
    return data.data;
  }

  static async sendEmailVerification(authenticationUser) {
    let user = authenticationUser.currentUser;

    var data = await axios.post(
      `${config.authApi}init-activate-account`,
      {
        email: user.email,
      },
    );
    return data.data.status;
  }

  static async SendEmailCode(code, authenticationUser) {
    let user = authenticationUser.currentUser;

    var data = await axios.post(
      `${config.authApi}validateAccount`,
      {
        email: user.email,
        token: code,
      },
    );
    return data.data.status;
  }

  static async sendEmailVerificationFromBackend(
    authenticationUser,
  ) {
    return null;
  }

  static async sendEmailVerificationFromClient(
    authenticationUser,
  ) {
    return [];
  }

  static async sendPasswordResetEmail(email) {
    var data = await axios.post(
      `${config.authApi}forgot-password`,
      {
        email: email,
      },
    );

    return data.data.status;
  }

  static async sendCodeResetEmail(email, code) {
    var data = await axios.post(
      `${config.authApi}reset-password`,
      {
        email: email,
        token: code,
      },
    );
    return data.data;
  }
  static async sendPasswordResetEmailFromBackend(email) {
    const response = await graphqlClientConfig
      .config()
      .mutate({
        mutation: gql`
          mutation AUTH_SEND_PASSWORD_RESET_EMAIL(
            $email: String!
          ) {
            authSendPasswordResetEmail(email: $email)
          }
        `,
        variables: {
          email,
        },
      });

    return response.data.authSendPasswordResetEmail;
  }

  static async registerWithEmailAndPassword(
    email,
    password,
    firstName,
    lastName,
  ) {
    var data = await axios.post(
      `${config.authApi}local/register`,
      {
        email: email,
        password: password,
        lastName,
        firstName,
      },
    );
    return data;
  }

  static async signinWithEmailAndPassword(
    email,
    password,
    rememberMe = false,
  ) {
    var data = await axios.post(
      `${config.authApi}local/login`,
      {
        email: email,
        password: password,
      },
    );

    return data.data;
  }

  static async resetPassword(password, secret_token) {
    var data = await axios.post(
      `${config.authApi}local/new-password`,
      {
        secret_token: secret_token,
        password: password,
      },
    );
    return data.data;
  }

  static async fetchMe() {
    const response = await graphqlClientConfig
      .config({ disableRole: true })
      .query({
        query: gql`
          query SELECTUSER {
            users {
              user_roles {
                role
              }
              id
              avatar_profile
              default_role
              email
              active
              first_name
              last_name
              phone
              account_setting {
                id
              }
            }
          }
        `,
      });

    let data = response.data.users[0];

    return data;
  }

  static async isEmailConfigured() {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          {
            authIsEmailConfigured
          }
        `,
      });

    return response.data.authIsEmailConfigured;
  }

  static async signout(refresh_token) {
    var data = await axios.post(`${config.authApi}logout`, {
      refresh_token: refresh_token,
    });
    return data;
  }

  static staticgetcurrentdate(i = 0) {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() +
      ':' +
      (today.getMinutes() + i) +
      ':' +
      today.getSeconds();
    var dateTime = date + ' ' + time;

    return dateTime;
  }

  static async updateProfile(
    first_name,
    last_name,
    phone,
    avatars,
  ) {
    var dateTime = this.staticgetcurrentdate(2);
    const response = await graphqlClientConfig
      .config({ disableRole: true })
      .mutate({
        mutation: gql`
          mutation UPDATE_PROFILE(
            $path: jsonb
            $phone: String
            $first_name: String
            $last_name: String
          ) {
            update_users(
              _set: {
                avatar_profile: $path
                first_name: $first_name
                last_name: $last_name
                phone: $phone
              }
              where: {}
            ) {
              affected_rows
            }
          }
        `,

        variables: {
          first_name: first_name,
          last_name: last_name,
          phone: phone,
          path: avatars,
        },
      });

    return response.data;
  }

  static async updateSettingProfile(language, timezone) {
    const response = await graphqlClientConfig
      .config({ disableRole: true })
      .mutate({
        mutation: gql`
        mutation MyMutation {
          __typename
          update_account_setting(_set: {${
            typeof language === 'string' ||
            language instanceof String
              ? ''
              : 'language_code:' + language + ','
          }timezone_code: ${timezone.id}}, where: {}) {
            affected_rows
          }
        }
        `,
      })
      .catch((erreor) => {
        return 0;
      });
    return 1;
  }

  static async listDictionaryI18n() {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query MyQuery {
            dictionary_i18n {
              id
              label
              language
              dictionary_id
            }
          }
        `,
      });

    let responsejson = response.data.dictionary_i18n;
    let data = await responsejson.map((item, index) => {
      return {
        id: item.id,
        label: item.language,
      };
    });
    return data;
  }

  static async updatePassword(
    email,
    password,
    oldpassword,
  ) {
    let verify = await this.signinWithEmailAndPassword(
      email,
      oldpassword,
    );
    var dateTime = this.staticgetcurrentdate(2);
    const response = await graphqlClientConfig
      .config({ disableRole: true })
      .mutate({
        mutation: gql`
          mutation UPDATE_PASSWORD($date: timestamptz) {
            update_users(
              _set: { secret_token_expires_at: $date }
              where: {}
            ) {
              affected_rows
              returning {
                secret_token
              }
            }
          }
        `,

        variables: {
          date: this.staticgetcurrentdate(2),
        },
      });

    let secret_token =
      response.data.update_users.returning[0].secret_token;

    let data = await this.resetPassword(
      password,
      secret_token,
    );

    return data;
  }

  static async listAutocompleteTimeZone(value) {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query GetDictionaryAutocomplete($value: String) {
            dictionary(
              where: {
                type: { _eq: "TIMEZONE" }
                name: { _like: $value }
              }
            ) {
              name
              code
              id
            }
          }
        `,
        variables: {
          value: '%' + value + '%',
        },
      });

    let responsejson = response.data.dictionary;
    let data = responsejson.map((item, index) => {
      return { id: item.id, label: item.name };
    });
    return data;
  }
}
