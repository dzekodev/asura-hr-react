const serverAddress = '104.131.177.205:8003';
const backendUrl = `http://${serverAddress}/v1/graphql`;
const authApi = 'http://localhost:4000/auth/';
const backendApi = '';
const webSocketLink = `wss://${serverAddress}/v1/graphql`;
const storageApi = 'http://;localhost:4000/storage/';
export default {
  backendUrl,
  backendApi,
  authApi,
  storageApi,
  webSocketLink,
};
