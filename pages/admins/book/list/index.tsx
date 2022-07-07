import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { AdminBookListTemplate } from 'Templates';

import { Get } from 'Utils';
import { useSelector, RootStateOrAny } from 'react-redux';
import { CheckRole, RedirectLogin } from 'Hoc';

const AdminBookListPage: NextPage<any> = (props, {}) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [list, setList] = useState([]);

  const getBookList = useCallback(async () => {
    const res = await Get('/quiz/book', {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    setList(res.data);
  }, []);

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 책 목록</title>
      </Head>
      <RedirectLogin>
        <CheckRole role="admin" isRedirect={false}>
          <AdminBookListTemplate bookList={list} />
        </CheckRole>
      </RedirectLogin>
    </>
  );
};

// AdminBookListPage.getInitialProps = async () => {
//   return {};
// };

export default AdminBookListPage;
