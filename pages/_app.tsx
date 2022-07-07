import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

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
          <meta property="og:title" content="이미지 어학원" />
          <meta property="og:description" content="이미지 어학원" />

          {/* Font */}
          <Link rel="stylesheet" href="/assets/pretendard-dynamic-subset.css" />

          {/* <!-- jQuery --> */}
          <Script type="text/javascript" src="/assets/jquery-1.12.4.min.js" />

          {/* <!-- iamport.payment.js --> */}
          <Script
            type="text/javascript"
            src="/assets/iamport.payment-1.1.8.js"
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
