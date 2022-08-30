import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { BoardContentTemplate } from 'Templates';
import { useMethod } from 'Hooks';

import { Get } from 'Utils';

const BoardContentPage: NextPage<any> = ({ contentData }) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <BoardContentTemplate content={contentData} />
    </>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const {
    req,
    query: { id },
  } = ctx;

  const res = await Get(`/board/post/${id}`);

  const contentData = res.data;

  return { props: { contentData } };
}

export default BoardContentPage;
