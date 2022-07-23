import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { AdminBoardCreateTemplate } from 'Templates';
import { CheckRole } from 'Hoc';

const AdminBoardCreatePage: NextPage<any> = (props) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 관리자 게시판 생성</title>
      </Head>
      <CheckRole role="admin">
        <AdminBoardCreateTemplate />
      </CheckRole>
    </>
  );
};

// AdminBoardCreatePage.getInitialProps = async () => {
//   return {};
// };

export default AdminBoardCreatePage;
