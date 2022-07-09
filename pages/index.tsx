import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { HomeTemplate } from 'Templates';

const HomePage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta property="og:image" content="/banner.png" />
        <meta property="og:title" content="이미지 어학원" />
        <meta property="og:description" content="이미지 어학원" />
      </Head>
      <HomeTemplate titleBannerImgSrc="/img/main_bg.svg" />
    </>
  );
};

export default HomePage;
