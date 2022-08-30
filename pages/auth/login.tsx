import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { LoginTemplate } from 'Templates';

const LoginPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 로그인</title>
      </Head>
      <LoginTemplate />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default LoginPage;
