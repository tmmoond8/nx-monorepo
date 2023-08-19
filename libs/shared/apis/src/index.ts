import * as bid from './lib/bid';
import * as bidHooks from './api-hook/bid';

export * from './lib/request-api';
export * from './lib/custom-api';
export * from './lib/healthz';

export default {
  bid: {
    ...bid,
    ...bidHooks,
  },
};
