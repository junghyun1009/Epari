import {QueryClient} from '@tanstack/react-query';
import {request, RequestDocument} from 'graphql-request';

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    }
    return client;
  };
})();

const BASE_URL = '/';

export const graphqlFetcher = (query: RequestDocument, variables = {}) =>
  request(BASE_URL, query, variables);

export const QueryKeys = {
  HERBLIST: 'HERBLIST',
};
