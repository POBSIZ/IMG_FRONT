import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { AcademyTemplate } from 'Templates';

const AcademyPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 학원</title>
      </Head>
      <AcademyTemplate />
    </>
  );
};

// AcademyPage.getInitialProps = async () => {
//   return {};
// };

export default AcademyPage;
