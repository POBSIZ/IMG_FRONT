import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { AcademyManageStudentTemplate } from 'Templates';
import { useMethod } from 'Hooks';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { pushToastAsync } from 'Actions/toastAction';

import AcademyManageClassPage from '../class';

const AcademyManageStudentPage: NextPage<any> = (props) => {
  const method = useMethod();
  const dispatch = useDispatch();
  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);

  const [userList, setUserList] = useState([]);

  const getUserList = useCallback(async () => {
    const res = await method.GET('/academy/student/info/all');
    // console.log(res);
    setUserList(res.data);
  }, []);

  useEffect(() => {
    getUserList();
  }, [toastState]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 학생 관리</title>
      </Head>
      <AcademyManageStudentTemplate userList={userList} />
      <AcademyManageClassPage />
    </>
  );
};

{
  /* AcademyManageStudentPage.getInitialProps = async () => {
  return {};
}; */
}

export default AcademyManageStudentPage;
