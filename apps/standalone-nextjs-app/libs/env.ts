import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig() ?? {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
};
const {
  API_URL,
}: {
  API_URL: string;
} = publicRuntimeConfig;

export const env = {
  API_URL,
};
