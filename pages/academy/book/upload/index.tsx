import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { useSelector, RootStateOrAny } from 'react-redux';
import { useMethod } from 'Hooks';

import { AdminUploadTemplate, AdminBookListTemplate } from 'Templates';
import { CheckRole, RedirectLogin } from 'Hoc';
import { Loader } from 'Bases';

const AdminUploadPage: NextPage<any> = (props, {}) => {
  const method = useMethod();
  const toastState = useSelector((state: RootStateOrAny) => state.toastReducer);
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [list, setList] = useState([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const getBookList = useCallback(async () => {
    // const res = await method.GET('/academy/book/all');
    const res = await method.GET('/quiz/book');
    setList(res.data);
  }, []);

  useEffect(() => {
    getBookList();
  }, [toastState]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 책 업로드</title>
      </Head>
      <RedirectLogin>
        <CheckRole role="insider" isRedirect={false}>
          <>
            <AdminUploadTemplate />
            <AdminBookListTemplate bookList={list} />
          </>
        </CheckRole>
      </RedirectLogin>
    </>
  );
};

// AdminUploadPage.getInitialProps = async () => {
//   return {};
// };

export default AdminUploadPage;
