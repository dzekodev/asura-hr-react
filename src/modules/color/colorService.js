import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';

export default class colorService {
  static async update(id, data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation($data: color_set_input!) {
        update_color(where: {id: {_eq: ${id}}}, _set: $data) {
          affected_rows
        }
      }
      
      `,
      variables: {
        data: {
          name: data.name,
          code: data.code,

        },
      },
    });

    return response.data.update_color;
  }
  static async destroyAll(ids) {
    var IDS = Array.isArray(ids)
      ? ids.map((e) => `"${e}"`).join(',')
      : `"${ids}"`;
    const response = await graphqlClient.config().mutate({
      mutation: gql`
      mutation MyMutation {
        delete_color(where: {id: {_in: [${IDS}]}}) {
          affected_rows
        }
      }
      
      `,
    });

    return response.data.delete_user;
  }

  static async create(data) {
    const response = await graphqlClient.config().mutate({
      mutation: gql`
        mutation MyMutation(
          $data: [color_insert_input!]!
        ) {
          insert_color(objects: $data) {
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
          code: data.code,
          
        },
      },
    });


    return response.data.insert_color;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation color_IMPORT(
          $data: colorInput!
          $importHash: String!
        ) {
          colorImport(
            data: $data
            importHash: $importHash
          )
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
          color(where: { id: { _eq: ${id} } }) {
            id
            name
            code
                       
          }
        }
      `,
    });

    return response.data.color[0];
  }

  static async list(filter, orderBy, limit, offset) {
    var ObjectFilter = `{name: {_ilike: "%${
      filter.name ? filter.name : ''
      }%"}
    }`;
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        query MyQuery {
          color(offset: ${offset}, limit: ${limit}, order_by: {${
          orderBy || 'id:desc'
        }}, where:${ObjectFilter} ) {
            id
            name
            code
            
          }
          color_aggregate(where:${ObjectFilter}) {
            aggregate {
              count
            }
          }
        }
        
        `,
      });

    var data = {};
    data.rows = response.data.color;
    data.count =
      response.data.color_aggregate.aggregate.count;
    return data;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          color(where: {name: {_ilike: "%${query}%"}}) {
            name
            code            
            id
          }
        }
      `,
    });

    return response.data.color;
  }

  static async listSelect(limit) {
    const response = await graphqlClient.config().query({
      query: gql`
        query MyQuery {
          color(where: {}) {
            name
            code
            
            id
          }
        }
      `,
    });

    return response.data.color;
  }
}
