import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  QuizPlayTemplatePropsType,
  QuizItemType,
  AnswerListItem,
} from 'Templates/quiz/play/quizPlay.types';
import { QuizPlayTemplate } from 'Templates';

const QuizPlayPage: NextPage<any> = ({}) => {
  const router = useRouter();
  const { id, title } = router.query;

  let quizList: QuizItemType[] = [];

  [...Array(10)].forEach((item, i) => {
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
      <QuizPlayTemplate
        quizId={Number(id)}
        quizTitle={`${title}`}
        limitTime={5}
        quizList={quizList}
      />
    </>
  );
};

export default QuizPlayPage;
