import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { QuizAssignTemplate } from 'Templates';
import { useMethod } from 'Hooks';
import { FormatDate } from 'Utils';

const AssignPage: NextPage<any> = (props, {}) => {
  const method = useMethod();

  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);

  const [userList, setUserList] = useState([]);
  const [userInfoList, setUserInfoList] = useState([]);
  const [quizList, setQuizList] = useState([]);

  const getLists = useCallback(async () => {
    const userRes = await method.GET('/academy/student/all');
    const userInfoRes = await method.GET('/academy/student/info/all');
    const quizRes = await method.GET('/quiz/all');

    setUserList(userRes.data);
    setUserInfoList(userInfoRes.data);
    setQuizList(quizRes.data);
  }, []);

  const userListMemo = useMemo(() => {
    return userList;
  }, [userList]);

  const userInfoListMemo = useMemo(() => {
    return userInfoList.map((item: any, i) => ({
      idx: i,
      subtitle: FormatDate(item.data?.created_at) || '',
      ...item,
    }));
  }, [userInfoList]);

  const quizListMemo = useMemo(() => {
    return quizList;
  }, [quizList]);

  useEffect(() => {
    if (toastState.isPop || userList.length === 0) {
      getLists();
    }
  }, [toastState]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 퀴즈 할당</title>
      </Head>
      <QuizAssignTemplate
        userList={userListMemo}
        userInfoList={userInfoListMemo}
        quizList={quizListMemo}
      />
    </>
  );
};

// AssignPage.getInitialProps = async () => {
//   return {};
// };

export default AssignPage;
