import React from 'react';
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

const Name: NextPage<any> = (props) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 단어 합치기</title>
      </Head>
    </>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const {
    req,
    query: { id },
  } = ctx;
  return { props: {} };
}

export default Name;
