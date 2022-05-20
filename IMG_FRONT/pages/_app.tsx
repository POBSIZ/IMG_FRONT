import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import ProviderLayout from 'src/provider';
import GlobalProvider from 'src/provider/globalProvider';

import '../styles/init.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:image" content="/banner.png" />
          <meta property="og:title" content="REWORK" />
          <meta property="og:description" content="REWORK 시스템" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
          />
        </Head>
        <ProviderLayout>
          <Component {...pageProps} />
        </ProviderLayout>
      </GlobalProvider>
    </>
  );
};

export default App;
