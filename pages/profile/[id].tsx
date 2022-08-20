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
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);
  const { id } = router.query;

  const [userInfo, setUserInfo] = useState({
    user_id: Number(id),
    name: '',
    role: '',
    class_id: null,
    academy_id: null,
  });

  const getUserInfo = useCallback(async () => {
    const res = await method.GET(`/auth/user/${ssrId ?? id}`);
    setUserInfo(res.data);
  }, []);

  useEffect(() => {
    if (authState.profile.user_id !== id) {
      router.push('/');
    }

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
