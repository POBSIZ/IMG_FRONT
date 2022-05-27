import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import {
  QuizPlayTemplatePropsType,
  QuizItemType,
  AnswerListItem,
} from 'Templates/quiz/play/quizPlay_types';
import { QuizPlayTemplate } from 'Templates';

const QuizPlayPage: NextPage<any> = ({}) => {
  let quizList: QuizItemType[] = [];

  [...Array(200)].forEach((item, i) => {
    quizList[i] = {
      word: `${i + 1}. Apple`,
      diacritic: 'ǽpl',
      options: ['사과', '배', '포도', '참외'],
      answer: 0,
    };
  });

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | QUIZ PLAY</title>
      </Head>
      <QuizPlayTemplate limitTime={5} quizList={quizList} />
    </>
  );
};

export default QuizPlayPage;
