import React, { useEffect, useState } from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { BoardIdTemplate } from 'Templates';
import { useMethod } from 'Hooks';

import { Get } from 'Utils';

const BoardContentPage: NextPage<any> = ({ list }) => {
  const method = useMethod();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_TITLE} | {list[0]?.board_id?.title}
        </title>
      </Head>
      <BoardIdTemplate boardList={list} />
    </>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const {
    req,
    query: { id },
  } = ctx;

  const res = await Get(`/board/list/${id}`);

  const list = res.data.sort(
    (a, b) => Number(new Date(b.created_at)) - Number(new Date(a.created_at)),
  );

  return { props: { list } };
}

export default BoardContentPage;
