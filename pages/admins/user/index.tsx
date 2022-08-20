import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { UserTemplate } from 'Templates';
import { Get } from 'Utils';
import { RootStateOrAny, useSelector } from 'react-redux';

import Layout from 'Layouts';
import { Back } from 'Atoms';

const UserPage: NextPage<any> = (props, {}) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [userList, setUserList] = useState([]);

  const getUserList = useCallback(async () => {
    const res = await Get('/auth/user/all/null', {
      headers: { Authorization: `Bearer ${authState.token}` },
    });
    setUserList(res.data);
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 회원 정보 목록</title>
      </Head>
      <Layout.Container>
        <Back style={{ margin: '20px 0' }} />
        <UserTemplate userList={userList} />
      </Layout.Container>
    </>
  );
};

export default UserPage;
