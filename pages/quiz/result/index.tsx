import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { QuizResultTemplate } from 'Templates';

const QuizResultPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 퀴즈 결과</title>
      </Head>
      <QuizResultTemplate />
    </>
  );
};

// QuizResultPage.getInitialProps = async () => {
//   return {};
// };

export default QuizResultPage;
