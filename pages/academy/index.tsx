import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const AcademyPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 학원</title>
      </Head>
    </>
  );
};

// AcademyPage.getInitialProps = async () => {
//   return {};
// };

export default AcademyPage;
