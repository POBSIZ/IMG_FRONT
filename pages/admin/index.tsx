import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const AdminPage: NextPage<any> = (props, {}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | ADMIN</title>
      </Head>
    </>
  );
};

export default AdminPage;
