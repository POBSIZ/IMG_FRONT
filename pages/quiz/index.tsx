import React, { useCallback, useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { QuizTemplate } from 'Templates';
import { QuizItemType } from 'Templates/quiz/index/quiz.types';

import { RedirectLogin } from 'Hoc';
import { Get } from 'Utils';

const QuizPage: NextPage<any> = (props, {}) => {
  const [isLoad, setIsLoad] = useState<boolean>(true);

  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [quizList, setQuizList] = useState<QuizItemType[]>([]);

  // 내 유저 퀴즈 목록 가져오기
  const getMyQuizs = useCallback(async () => {
    const quizs = await Get('/quiz/my', {
      headers: { Authorization: `Bearer ${authState.token}` },
    });
    setQuizList(quizs.data);
    setIsLoad(false);
  }, []);

  useEffect(() => {
    getMyQuizs();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 퀴즈</title>
      </Head>
      <RedirectLogin>
        <QuizTemplate isLoading={isLoad} quizList={quizList} />
      </RedirectLogin>
    </>
  );
};

export default QuizPage;
