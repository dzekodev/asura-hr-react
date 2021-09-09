import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class customersService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation($data:customers_set_input!) {
        update_customers(where: {id: {_eq: ${id}}}, _set: $data) {
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

    return response.data.update_customers;
  }
  static async destroyAll(ids) {
    var IDS = Array.isArray(ids)
      ? ids.map((e) => `"${e}"`).join(',')
      : `"${ids}"`;
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_customers(where: {id: {_in: [${IDS}]}}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.delete_customers;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation($data: [customers_insert_input!]!) {
          insert_customers(objects: $data) {
            affected_rows
            returning {
              id
            }
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

    return response.data.insert_customers;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation customers_IMPORT(
          $data: customersInput!
          $importHash: String!
        ) {
          customersImport(data: $data, importHash: $importHash)
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
          customers(where: { id: { _eq: ${id} } }) {
            id
            name
            email
            phone_number
            created_at
            updated_at   
          }
        }
      `,
    });

    return response.data.customers[0];
  }

  static async list(filter, orderBy, limit, offset) {
    var ObjectFilter = `{name: ${
      filter.name ? `{_like: "%${filter.name}%"}` : `{}`
    }, email: ${
      filter.email
        ? `{_like: "%${filter.email}%"}`
        : `{}`
    }}`;

    console.log(`
      customers(offset: ${offset}, limit: ${limit}, order_by: ${
        orderBy ? `{${orderBy}}` : 'null'
      }, where: ${ObjectFilter}) {
          id
          name
          email
          phone_number
          created_at
          updated_at
        }

        customers_aggregate {
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
          customers(offset: ${offset}, limit: ${limit}, order_by: ${
          orderBy ? `{${orderBy}}` : 'null'
        }, where: ${ObjectFilter}) {
            id
            name
            email
            phone_number
            created_at
            updated_at
          }

          customers_aggregate {
              aggregate {
                count
              }
            }
        }
        `,
      });
      

    var data = {};
    data.rows = response.data.customers;
    data.count =
      response.data.customers_aggregate.aggregate.count;
    return data;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          customers(where: {name: {_ilike: "%${query}%"}}) {      
            id
            name
            email
            phone_number
            created_at
            updated_at 
          }
        }
      `,
    });

    return response.data.customers;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          customers(where: {}) {
            id
            name
            email
            phone_number
            created_at
            updated_at 
          }
        }
      `,
    });

    return response.data.customers;
  }
}
