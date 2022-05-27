import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { QuizTemplate } from 'Templates';

const QuizPage: NextPage<any> = (props, {}) => {
  let quizList: any[] = [];
  [...Array(5)].forEach((item, i) => {
    quizList.push({
      title: `${i} TEST`,
      tryCount: i,
    });
  });

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | QUIZ</title>
      </Head>
      <QuizTemplate quizList={quizList} />
    </>
  );
};

export default QuizPage;
