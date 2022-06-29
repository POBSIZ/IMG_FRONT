import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { UserInfoTemplate } from 'Templates';
import { useRouter } from 'next/router';
import { Get } from 'Utils';
import { RootStateOrAny, useSelector } from 'react-redux';

const UserInfoPage: NextPage<any> = (props, {}) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const router = useRouter();
  const { id } = router.query;

  const [userInfo, setUserInfo] = useState({
    user_id: Number(id),
    name: '',
    school: '',
    grade: '',
    phone: '',
  });

  const getUserInfo = useCallback(async () => {
    const res = await Get(`/auth/user/${id}`, {
      headers: { Authorization: `Bearer ${authState.token}` },
    });
    console.log(res);
    setUserInfo(res.data);
  }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 회원 정보</title>
      </Head>
      <UserInfoTemplate profile={userInfo} />
    </>
  );
};

export default UserInfoPage;
