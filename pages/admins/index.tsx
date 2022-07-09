import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'Layouts';

import { CheckRole, RedirectLogin } from 'Hoc';

const AdminPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 관리자</title>
      </Head>
      <RedirectLogin>
        <CheckRole role="admin" isRedirect={true}>
          <Layout.Container>
            <h2>
              <Link href="/admins/book/upload">책 업로드</Link>
            </h2>
            <h2>
              <Link href="/admins/book/list">책 관리</Link>
            </h2>
            <h2>
              <Link href="/admins/quiz/create">퀴즈 생성</Link>
            </h2>
            <h2>
              <Link href="/admins/quiz/assign">퀴즈 할당</Link>
            </h2>
            <h2>
              <Link href="/admins/user">회원 관리</Link>
            </h2>
          </Layout.Container>
        </CheckRole>
      </RedirectLogin>
    </>
  );
};

export default AdminPage;
