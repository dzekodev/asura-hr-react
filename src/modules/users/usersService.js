import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class usersService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation($data:users_set_input!) {
        update_users(where: {id: {_eq: ${id}}}, _set: $data) {
          affected_rows
        }
      }
      
      
      `,
      variables: {
        data: {
          name: data.name,
          email: data.email,
          phone_number: data.phone_number,
        },
      },
    });

    return response.data.update_users;
  }
  static async destroyAll(ids) {
    var IDS = Array.isArray(ids)
      ? ids.map((e) => `"${e}"`).join(',')
      : `"${ids}"`;
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_users(where: {id: {_in: [${IDS}]}}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.delete_users;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation($data: [users_insert_input!]!) {
          insert_users(objects: $data) {
            affected_rows
            returning {
              id
            }
          }
        }
      `,
      variables: {
        data: {
          display_name: data.display_name,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          avatar_profile: data.avatar_profile,
          phone: data.phone,
          gender: data.gender,
        },
      },
    });

    return response.data.insert_users;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation users_IMPORT(
          $data: usersInput!
          $importHash: String!
        ) {
          usersImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.MatterImport;
  }

  static async find(id) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          users(where: { id: { _eq: ${id} } }) {
            id
            display_name
            first_name
            last_name
            gender
            email
            phone
            last_seen
            avatar_profile
          }
        }
      `,
    });

    return response.data.users[0];
  }

  static async list(filter, orderBy, limit, offset) {
    var ObjectFilter = `{display_name: ${
      filter.display_name ? `{_like: "%${filter.display_name}%"}` : `{}`
    }, first_name: ${
      filter.first_name
        ? `{_like: "%${filter.first_name}%"}`
        : `{}`
    }}`;

    console.log(`
      users(offset: ${offset}, limit: ${limit}, order_by: ${
        orderBy ? `{${orderBy}}` : 'null'
      }, where: ${ObjectFilter}) {
          
          id
          display_name
          first_name
          gender
          last_name
          last_seen
          phone
          email
          avatar_profile
        }

        users_aggregate {
            aggregate {
              count
            }
          }
      }
    `)
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        {
          users(offset: ${offset}, limit: ${limit}, order_by: ${
          orderBy ? `{${orderBy}}` : 'null'
        }, where: ${ObjectFilter}) {
            id
            display_name
            first_name
            gender
            last_name
            last_seen
            phone
            email
            avatar_profile
          }

          users_aggregate {
              aggregate {
                count
              }
            }
        }
        `,
      });
      

    var data = {};
    data.rows = response.data.users;
    data.count =
      response.data.users_aggregate.aggregate.count;
    return data;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          users(where: {name: {_ilike: "%${query}%"}}) {   
            id
            display_name
            first_name
            gender
            last_name
            last_seen
            phone
            email
            avatar_profile
          }
        }
      `,
    });

    return response.data.users;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          users(where: {}) {
            id
            display_name
            first_name
            gender
            last_name
            last_seen
            phone
            email
            avatar_profile
          }
        }
      `,
    });

    return response.data.users;
  }
}
