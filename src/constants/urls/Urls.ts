const ENV_URL = () => {
  switch ('staging') {
    case 'staging':
      return '';
    default:
      return '';
  }
};
const URLS = {
  BASE_URL: ENV_URL(),
  GRAPHQL_PATH: '/graphql',
  DESCRIPTION: 'Description',
};

export default URLS;

// const URLS = {
//   BASE_URL: () => 'http://172.16.9.177:3000',
//   GRAPHQL_PATH: '/graphql',
//   DESCRIPTION: 'Description',
// };

// export default URLS;
