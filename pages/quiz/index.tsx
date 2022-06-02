import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { QuizTemplate } from 'Templates';

import { QuizItemType } from 'Templates/quiz/index/quiz.types';

const QuizPage: NextPage<any> = (props, {}) => {
  let quizList: QuizItemType[] = [];
  const year = new Date(Date.now()).getFullYear();
  const month = new Date(Date.now()).getMonth();
  const day = new Date(Date.now()).getDate();
  const date = `${year}-${month}-${day}`;
  console.log(date);
  [...Array(10)].forEach((item, i) => {
    quizList.push({
      title: `${i + 1} TEST`,
      id: i + 1,
      date: date,
      tryCount: i,
      solvedCount: i,
      maxCount: i * i,
      disabled: i % 2 == 0 && i !== 0 ? true : false,
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
