import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { AcademyManageClassTemplate } from 'Templates';
import { useMethod } from 'Hooks';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { pushToastAsync } from 'Actions/toastAction';

const AcademyManageClassPage: NextPage<any> = (props) => {
  const method = useMethod();
  const dispatch = useDispatch();
  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);

  const [classList, setClassList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userInfoList, setUserInfoList] = useState([]);

  const getUserList = useCallback(async () => {
    const res = await method.GET('/academy/student/all');
    const resInfo = await method.GET('/academy/student/info/all');

    const _list = res.data?.map((item) => ({
      title: item.name,
      subtitle: item.class_name,
      ...item,
    }));

    setUserList(_list);
    setUserInfoList(resInfo.data);
  }, []);

  const getClassList = useCallback(async () => {
    const res = await method.GET('/academy/class/all');
    const _list = res.data?.map((item) => ({
      title: item.name,
      subtitle: item.class_name,
      ...item,
    }));
    setClassList(_list);
  }, []);

  useEffect(() => {
    if (toastState.status === 'success' || classList.length === 0) {
      getUserList();
      getClassList();
    }
  }, [toastState]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 반 관리</title>
      </Head>
      <AcademyManageClassTemplate
        classList={classList}
        userList={userList}
        userInfoList={userInfoList}
      />
    </>
  );
};

export default AcademyManageClassPage;
