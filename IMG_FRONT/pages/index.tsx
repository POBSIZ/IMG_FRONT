import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { HomeTemplate } from 'Templates';

const HomePage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <HomeTemplate />
    </>
  );
};

export default HomePage;
