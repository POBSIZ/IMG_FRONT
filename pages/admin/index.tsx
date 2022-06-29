import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'Layouts';

import { CheckAdmin, RedirectLogin } from 'Hoc';

const AdminPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 관리자</title>
      </Head>
      <RedirectLogin>
        <CheckAdmin>
          <Layout.Container>
            <h2>
              <Link href="/admin/upload">책 업로드</Link>
            </h2>
            <h2>
              <Link href="/admin/quiz/create">퀴즈 생성</Link>
            </h2>
            <h2>
              <Link href="/admin/user">회원 관리</Link>
            </h2>
          </Layout.Container>
        </CheckAdmin>
      </RedirectLogin>
    </>
  );
};

export default AdminPage;
