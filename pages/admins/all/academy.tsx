import React, { useState, useCallback, useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';
import { useMethod } from 'Hooks';

import { AdminManageAllTemplate } from 'Templates';

const AdminManageAllAcademy: NextPage<any> = (props) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const method = useMethod();
  const [academyList, setAcademyList] = useState([]);

  const getUserList = useCallback(async () => {
    const res = await method.GET('/academy/all');
    setAcademyList(res.data);
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <Head>{process.env.NEXT_PUBLIC_TITLE} | 전체 회원 관리</Head>
      <AdminManageAllTemplate academyList={academyList} />
    </>
  );
};

// AdminManageAllAcademy .getInitialProps = async () => {
//   return {};
// };

export default AdminManageAllAcademy;
