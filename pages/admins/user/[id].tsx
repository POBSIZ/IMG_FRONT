import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { UserInfoTemplate } from 'Templates';
import { useRouter } from 'next/router';
import { Get } from 'Utils';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useMethod } from 'Hooks';

const UserInfoPage: NextPage<any> = (props, { ssrId }) => {
  const method = useMethod();
  const router = useRouter();
  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);
  const { id } = router.query;

  const [userInfo, setUserInfo] = useState({
    user_id: Number(id),
    name: '',
    school: '',
    grade: '',
    phone: '',
  });

  const getUserInfo = useCallback(async () => {
    const res = await method.GET(`/auth/user/${ssrId ?? id}`);
    setUserInfo(res.data);
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
      <UserInfoTemplate profile={userInfo} />
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
