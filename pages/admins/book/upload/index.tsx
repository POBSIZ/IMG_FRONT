import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { AdminUploadTemplate } from 'Templates';
import { CheckAdmin, RedirectLogin } from 'Hoc';

const AdminUploadPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 책 업로드</title>
      </Head>
      <RedirectLogin>
        <CheckAdmin>
          <AdminUploadTemplate />
        </CheckAdmin>
      </RedirectLogin>
    </>
  );
};

// AdminUploadPage.getInitialProps = async () => {
//   return {};
// };

export default AdminUploadPage;
