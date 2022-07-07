import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { QuizCreateTemplate } from 'Templates';
import {
  QuizCreatePropsType,
  QuizCreateResDataType,
} from 'Templates/admin/quiz/create/quizCreate.types';
import { Get } from 'Utils';
import { useSelector, RootStateOrAny } from 'react-redux';
import { CheckRole, RedirectLogin } from 'Hoc';

const QuizCreatePage: NextPage<any> = (props, {}) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  const [quizProps, setQuizProps] = useState<QuizCreatePropsType>({
    bookList: [],
    titleName: 'title',
    timeName: 'time',
    handleSubmit: () => {},
  });

  const getBookList = useCallback(async () => {
    const res = await Get('/quiz/book', {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    setQuizProps((_state) => {
      _state.bookList = res.data;
      return { ..._state };
    });
  }, []);

  useEffect(() => {
    getBookList();
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 퀴즈 생성</title>
      </Head>
      <RedirectLogin>
        <CheckRole role="admin" isRedirect={false}>
          <QuizCreateTemplate {...quizProps} />
        </CheckRole>
      </RedirectLogin>
    </>
  );
};

export default QuizCreatePage;
