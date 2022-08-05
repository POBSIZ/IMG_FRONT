import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { AdminManageAcademyTemplate } from 'Templates';
import { useRouter } from 'next/router';
import { Get } from 'Utils';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useMethod } from 'Hooks';

const UserInfoPage: NextPage<any> = (props, { ssrId }) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const method = useMethod();
  const router = useRouter();
  const { id } = router.query;

  const [academyInfo, setAcademyInfo] = useState(null);
  const [classList, setClassList] = useState([]);
  const [userList, setUserList] = useState([]);

  const getUserInfo = useCallback(async () => {
    const academyRes = await method.GET(`/academy/info/${ssrId ?? id}`);
    const classRes = await method.GET(`/academy/class/all/${ssrId ?? id}`);
    const userRes = await method.GET(`/academy/student/all/${ssrId ?? id}`);
    setAcademyInfo(academyRes.data);
    setClassList(classRes.data);
    setUserList(userRes.data);
  }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 회원 정보</title>
      </Head>
      <AdminManageAcademyTemplate
        academyInfo={academyInfo}
        classList={classList}
        userList={userList}
      />
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
