import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { QuizCreateTemplate, AcademyQuizListTemplate } from 'Templates';
import {
  QuizCreatePropsType,
  QuizCreateResDataType,
} from 'Templates/admin/quiz/create/quizCreate.types';
import { Get } from 'Utils';
import { useSelector, RootStateOrAny } from 'react-redux';
import { CheckRole, RedirectLogin } from 'Hoc';
import { useMethod } from 'Hooks';

const QuizCreatePage: NextPage<any> = (props, {}) => {
  const method = useMethod();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);

  const [quizProps, setQuizProps] = useState<QuizCreatePropsType>({
    bookList: [],
    titleName: 'title',
    timeName: 'time',
    handleSubmit: () => {},
  });

  const [quizList, setQuizList] = useState([]);

  const getQuizList = useCallback(async () => {
    const res = await method.GET('/quiz/all');
    setQuizList(res.data);
    // console.log(res.data);
  }, []);

  const getBookList = useCallback(async () => {
    const res = await method.GET('/quiz/book');
    setQuizProps((_state) => {
      _state.bookList = res.data;
      return { ..._state };
    });
  }, []);

  useEffect(() => {
    getBookList();
    getQuizList();
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 퀴즈 관리</title>
      </Head>
      <RedirectLogin>
        <CheckRole role="insider" isRedirect={false}>
          <>
            <QuizCreateTemplate {...quizProps} />
            <AcademyQuizListTemplate quizList={quizList} />
          </>
        </CheckRole>
      </RedirectLogin>
    </>
  );
};

export default QuizCreatePage;
