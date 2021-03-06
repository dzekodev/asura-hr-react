import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import config from 'config';
import { getLanguageCode } from 'i18n';
import { RetryLink } from 'apollo-link-retry';
import { getStore } from 'modules/store';
import authService from 'modules/auth/authService';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import actions from 'modules/auth/authActions';

export default class graphqlClientConfig {
  static getToken = async () => {
    var token = getStore().getState().auth.jwt_token;
    var refresh_token =
      getStore().getState().auth.refresh_token;
    var jwt_expired =
      getStore().getState().auth.jwt_expired;
    if (
      jwt_expired != null &&
      jwt_expired < new Date().getTime() / 1000 - 10
    ) {
      let credentials = await authService.refreshToken(
        refresh_token,
      );

      token = credentials.jwt_token;
      refresh_token = credentials.refresh_token;

      await localStorage.setItem(
        '@RefreshToken:key',
        refresh_token,
      );

      getStore().dispatch({
        type: actions.SAVE_TOKEN,
        payload: {
          refresh_token: credentials.refresh_token,
          jwt_token: credentials.jwt_token,
          jwt_expired: credentials.jwt_token_expires,
        },
      });
    }
    return token;
  };
  static config({ disableRole = false } = {}) {
    const retryLink = new RetryLink({
      attempts: {
        max: 2,
      },
    });

    const authLink = setContext(async (_, { headers }) => {
      var token = await this.getToken();
      var userrole = null;

      try {
        userrole =
          getStore().getState().auth.currentUser
            .user_roles[0];
      } catch (er) {}

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
          'X-Hasura-Role':
            userrole && !disableRole
              ? userrole.role
              : 'user',
        },
      };
    });

    const httpLink = createHttpLink({
      uri: `${config.backendUrl}`,
    });
    const wsLink = new WebSocketLink({
      uri: `${config.webSocketLink}`,
      options: {
        lazy: true,
        reconnect: true,
        connectionParams: async () => {
          try {
            var userrole =
              getStore().getState().auth.currentUser
                .user_roles[0];
          } catch (er) {}
          const token = await this.getToken();
          return {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
              'X-Hasura-Role': userrole
                ? userrole.role
                : 'user',
            },
          };
        },
      },
    });

    const defaultOptions = {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    };

    const link = split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      retryLink.concat(authLink.concat(httpLink, wsLink)),
    );
    const graphqlClient = new ApolloClient({
      link: link,
      cache: new InMemoryCache({
        addTypename: false,
      }),
      defaultOptions: defaultOptions,
    });
    return graphqlClient;
  }
}
