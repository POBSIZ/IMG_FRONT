import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { UserInfoTemplate } from 'Templates';
import { useRouter } from 'next/router';
import { Get } from 'Utils';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useMethod } from 'Hooks';

import { LoadWrapper } from 'Hoc';

const UserInfoPage: NextPage<any> = (props, { ssrId }) => {
  const method = useMethod();
  const router = useRouter();
  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);
  const { id } = router.query;

  const [isLoad, setIsLoad] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState({
    user_id: Number(id),
    name: '',
    role: '',
    class_id: null,
    academy_id: null,
  });

  const [quizLog, setQuizLog] = useState<any[]>([]);

  const getUserInfo = useCallback(async () => {
    const res = await method.GET(`/auth/user/${ssrId ?? id}`);

    const log = await method.GET(`/auth/quiz/log/chain/${ssrId ?? id}`);
    const sortedLog = log.data
      .flat()
      .sort((a, b) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      })
      .reverse();

    setQuizLog(sortedLog);
    setUserInfo(res.data);
    setIsLoad(true);
  }, []);

  useEffect(() => {
    if (toastState.status === 'success' || userInfo.name === '') {
      getUserInfo();
    }
  }, [toastState]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 회원 정보</title>
      </Head>
      <LoadWrapper isLoad={isLoad}>
        <UserInfoTemplate profile={userInfo} quizLog={quizLog} />
      </LoadWrapper>
    </>
  );
};

UserInfoPage.getInitialProps = async (context) => {
  const {
    req,
    query: { id },
  } = context;

  return {
    ssrId: id,
  };
};

export default UserInfoPage;
