import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Welcome to nx-react-code-sharing!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
