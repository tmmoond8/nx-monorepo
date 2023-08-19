import axios from 'axios';

function createHttpClient() {
  const http = axios.create({
    baseURL: 'https://dev-auction-api.collexx.io/api',
  });

  http.interceptors.request.use(
    async (config) => {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  http.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return http;
}

export const http = createHttpClient();
