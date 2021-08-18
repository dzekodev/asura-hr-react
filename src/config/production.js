const serverAddress = '104.131.177.205:8003';
const backendUrl = `http://${serverAddress}/v1/graphql`;
const authApi = 'http://104.131.177.205:4003/auth/';
const backendApi = '';
const webSocketLink = `wss://${serverAddress}/v1/graphql`;
const storageApi = 'http://104.131.177.205:4003/storage/';
export default {
  backendUrl,
  backendApi,
  authApi,
  storageApi,
  webSocketLink,
};
