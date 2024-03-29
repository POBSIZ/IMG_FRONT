import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import window from 'global/window';

import { RegisterTemplate } from 'Templates';

const RegisterPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 회원가입</title>
      </Head>
      <RegisterTemplate />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default RegisterPage;
