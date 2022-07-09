import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { CheckRole, RedirectLogin } from 'Hoc';
import { useMethod } from 'Hooks';
import { AcademyQuizListTemplate } from 'Templates';
import { RootStateOrAny, useSelector } from 'react-redux';

const QuizListPage: NextPage<any> = (props, {}) => {
  const method = useMethod();
  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);
  const [quizList, setQuizList] = useState([]);

  const getQuizList = useCallback(async () => {
    const res = await method.GET('/quiz/all');
    setQuizList(res.data);
    // console.log(res.data);
  }, []);

  useEffect(() => {
    getQuizList();
    return () => {};
  }, [toastState]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 퀴즈 생성</title>
      </Head>
      <RedirectLogin>
        <CheckRole role="insider" isRedirect={false}>
          <AcademyQuizListTemplate quizList={quizList} />
        </CheckRole>
      </RedirectLogin>
    </>
  );
};

export default QuizListPage;
