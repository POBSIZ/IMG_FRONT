import React, { useState, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import { BoardTemplate } from 'Templates';
import { useMethod } from 'Hooks';
import { useRouter } from 'next/router';

import { Get } from 'Utils';

const BoardPage: NextPage<any> = ({ boardTab, boardList }) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 게시판</title>
      </Head>
      <BoardTemplate boardTab={boardTab} boardList={boardList} />
    </>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const {
    req,
    query: { id },
  } = ctx;

  const resTab = await Get('/board/all');
  const resList = id
    ? await Get(`/board/list/${id}`)
    : await Get(`/board/list/${resTab.data[0].board_id}`);

  const boardTab = resTab.data;
  const boardList = resList.data.sort(
    (a, b) => Number(new Date(b.created_at)) - Number(new Date(a.created_at)),
  );

  return { props: { boardTab, boardList } };
}

export default BoardPage;
