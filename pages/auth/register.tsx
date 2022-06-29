import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

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

// LoginPage.getInitialProps = async () => {
//   return {};
// };

export default RegisterPage;
