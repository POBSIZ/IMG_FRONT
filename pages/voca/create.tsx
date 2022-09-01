import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { VocaTemplate } from 'Templates';

import { RedirectLogin } from 'Hoc';

const VocaPage: NextPage<any> = (props) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 단어장 생성</title>
      </Head>
      <RedirectLogin>
        <VocaTemplate />
      </RedirectLogin>
    </>
  );
};

// VocaPage .getInitialProps = async () => {
//   return {};
// };

export default VocaPage;
