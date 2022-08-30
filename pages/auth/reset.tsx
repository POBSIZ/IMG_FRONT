import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { AuthResetTemplate } from 'Templates';

const AuthResetPage: NextPage<any> = (props) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 비밀번호 초기화</title>
      </Head>
      <AuthResetTemplate />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default AuthResetPage;
