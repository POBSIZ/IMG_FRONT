import React, { useState, useCallback, useEffect } from 'react';
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import { HomeTemplate } from 'Templates';

import { useMethod } from 'Hooks';
import { Get } from 'Utils';

const HomePage: NextPage<any> = ({ noticeList, storyList }) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta property="og:image" content="/banner.png" />
        <meta property="og:description" content="이미지 어학원" />
      </Head>
      <HomeTemplate
        imgSrc="/img/main_bg.svg"
        noticeList={noticeList}
        storyList={storyList}
      />
    </>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const {
    req,
    query: { id },
  } = ctx;

  const nl = await Get(`/board/list/${4}`);
  const sl = await Get(`/board/list/${3}`);

  const noticeList = nl.data.sort((a, b) => {
    return Number(new Date(b.created_at)) - Number(new Date(a.created_at));
  });

  const storyList = sl.data.sort((a, b) => {
    return Number(new Date(b.created_at)) - Number(new Date(a.created_at));
  });

  return { props: { noticeList, storyList } };
}

export default HomePage;
