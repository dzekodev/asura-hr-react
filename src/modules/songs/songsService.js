import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class songsService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation($data:songs_set_input!) {
        update_songs(where: {id: {_eq: ${id}}}, _set: $data) {
          affected_rows
        }
      }
      
      
      `,
      variables: {
        data: {
          name: data.name,
          composedBy: data.composedBy,
        },
      },
    });

    return response.data.update_songs;
  }
  static async destroyAll(ids) {
    var IDS = Array.isArray(ids)
      ? ids.map((e) => `"${e}"`).join(',')
      : `"${ids}"`;
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_songs(where: {id: {_in: [${IDS}]}}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.delete_songs;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation($data: [songs_insert_input!]!) {
          insert_songs(objects: $data) {
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
          composedBy: data.composedBy,
        },
      },
    });

    return response.data.insert_songs;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation songs_IMPORT(
          $data: songsInput!
          $importHash: String!
        ) {
          songsImport(data: $data, importHash: $importHash)
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
          songs(where: { id: { _eq: ${id} } }) {
            id
            name
            composedBy
                       
          }
        }
      `,
    });

    return response.data.songs[0];
  }

  static async list(filter, orderBy, limit, offset) {
    var ObjectFilter = `{name: ${
      filter.name ? `{_like: "%${filter.name}%"}` : `{}`
    }, composedBy: ${
      filter.composedBy
        ? `{_like: "%${filter.composedBy}%"}`
        : `{}`
    }}`;

    console.log(` {
      songs(offset: ${offset}, limit: ${limit}, order_by: {${orderBy}}, where: ${ObjectFilter}) {
        composedBy
        id
        name
      }
      


        songs_aggregate(where:${ObjectFilter}) {
          aggregate {
            count
          }
        }
      
      
    }`);

    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        
        {
          songs(offset: ${offset}, limit: ${limit}, order_by: ${
          orderBy ? `{${orderBy}}` : 'null'
        }, where: ${ObjectFilter}) {
            composedBy
            id
            name
          }
          

    
            songs_aggregate {
              aggregate {
                count
              }
            }
          
          
        }
        `,
      });

    var data = {};
    data.rows = response.data.songs;
    data.count =
      response.data.songs_aggregate.aggregate.count;
    return data;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          songs(where: {name: {_ilike: "%${query}%"}}) {
            name
            code            
            id
          }
        }
      `,
    });

    return response.data.songs;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          songs(where: {}) {
            name
            code

            id
          }
        }
      `,
    });

    return response.data.songs;
  }
}
