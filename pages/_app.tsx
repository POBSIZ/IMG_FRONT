import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Router from 'next/router';

import { useRouter } from 'next/router';

import ProviderLayout from 'src/provider';
import GlobalProvider from 'src/provider/globalProvider';

import initGA from '../lib/ga';
import { initGA4 } from '../lib/ga4';

import { GoogleAnalyticsHOC } from 'Hoc';

import window from 'global/window';

import '../styles/init.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // useEffect(() => {
  //   initGA('G-KZRZ73DV33', Router);
  // }, []);

  useEffect(() => {
    if (process.env.NODE_ENV == 'production') {
      initGA4('G-KZRZ73DV33');
    }
  }, []);

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
        </Head>

        <ProviderLayout>
          <Component {...pageProps} />
        </ProviderLayout>
      </GlobalProvider>
    </>
  );
};

export default App;
