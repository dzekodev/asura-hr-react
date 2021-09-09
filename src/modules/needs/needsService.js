import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class needsService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation($data:needs_set_input!) {
        update_needs(where: {id: {_eq: ${id}}}, _set: $data) {
          affected_rows
        }
      }
      
      
      `,
      variables: {
        data: {
          descriptiion: data.descriptiion,
          type: data.type,
          monthly_rate: data.monthly_rate,
          status: data.status,
          ended_at: data.ended_at,
        },
      },
    });

    return response.data.update_needs;
  }
  static async destroyAll(ids) {
    var IDS = Array.isArray(ids)
      ? ids.map((e) => `"${e}"`).join(',')
      : `"${ids}"`;
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_needs(where: {id: {_in: [${IDS}]}}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.delete_needs;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation($data: [needs_insert_input!]!) {
          insert_needs(objects: $data) {
            affected_rows
            returning {
              id
            }
          }
        }
      `,
      variables: {
        data: {
          descriptiion: data.descriptiion,
          type: data.type,
          monthly_rate: data.monthly_rate,
          status: data.status,
          ended_at: data.ended_at,
        },
      },
    });

    return response.data.insert_needs;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation NEEDS_IMPORT(
          $data: needsInput!
          $importHash: String!
        ) {
          needsImport(data: $data, importHash: $importHash)
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
          needs(where: { id: { _eq: ${id} } }) {
            id
            descriptiion
            type
            monthly_rate
            status
            created_at
            updated_at  
            ended_at 
          }
        }
      `,
    });

    return response.data.needs[0];
  }

  static async list(filter, orderBy, limit, offset) {
    var ObjectFilter = `{type: ${
      filter.type ? `{_like: "%${filter.type}%"}` : `{}`
    }, status: ${
      filter.status
        ? `{_like: "%${filter.status}%"}`
        : `{}`
    }}`;

    console.log(`
      needs(offset: ${offset},
            limit: ${limit},
            order_by: ${orderBy ?`{${orderBy}}` :'null'}, 
            where: ${ObjectFilter}){
              id
              descriptiion
              monthly_rate
              dictionary {
                name_fr
              }
              need_status {
                status {
                  label
                }
              }
              updated_at
              ended_at
              created_at
            }
            need_aggregate {
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
          needs(offset: ${offset}, limit: ${limit}, order_by: ${
          orderBy ? `{${orderBy}}` : 'null'}, where: ${ObjectFilter})  {
            id
            descriptiion
            monthly_rate
            dictionary {
              name_fr
            }
            need_status {
              status {
                label
              }
            }
            updated_at
            ended_at
            created_at
          }
          need_aggregate {
            aggregate {
              count
            }
          }
        }
        `,
      });
      

    var data = {};
    data.rows = response.data.needs;
    data.count =
      response.data.needs_aggregate.aggregate.count;
    return data;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          needs(where: {name: {_ilike: "%${query}%"}}) {
            id
            descriptiion
            monthly_rate
            dictionary {
              name_fr
            }
            need_status {
              status {
                label
              }
            }
            updated_at
            ended_at
            created_at
          }
          need_aggregate {
            aggregate {
              count
            }
          }
        }
      `,
    });

    return response.data.needs;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          needs(where: {}) {{
            id
            descriptiion
            monthly_rate
            dictionary {
              name_fr
            }
            need_status {
              status {
                label
              }
            }
            updated_at
            ended_at
            created_at
          }
          need_aggregate {
            aggregate {
              count
            }
          }
        }
      `,
    });

    return response.data.needs;
  }
}
