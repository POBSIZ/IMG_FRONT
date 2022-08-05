import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'Layouts';

import { CheckRole, RedirectLogin } from 'Hoc';
import { Move } from 'Atoms';

const AdminPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 관리자</title>
      </Head>
      <RedirectLogin>
        <CheckRole role="admin" isRedirect={true}>
          <Layout.Container>
            <Layout.Content
              style={{ display: 'flex', flexFlow: 'Column', gap: '10px' }}
            >
              <h2>관리</h2>
              <Move href="/admins/user" backColor="primary">
                🙍‍♀️ 회원 관리
              </Move>
              <Move href="/admins/all/academy" backColor="primary">
                🏫 학원 관리
              </Move>
              <Move href="/admins/board/create" backColor="primary">
                📫 게시판 생성
              </Move>
            </Layout.Content>
          </Layout.Container>
        </CheckRole>
      </RedirectLogin>
    </>
  );
};

export default AdminPage;
