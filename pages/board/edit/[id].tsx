import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { BoardEditTemplate } from 'Templates';
import { useMethod } from 'Hooks';

const BoardContentPage: NextPage<any> = ({ ssrID }) => {
  const method = useMethod();
  const router = useRouter();

  const [contentData, setContentData] = useState({
    post_id: NaN,
    board_id: NaN,
    user_id: { name: '' },
    content: '',
    desc: '',
    is_notice: false,
    like: 0,
    status: 'PUBLIC',
    title: '',
    updated_at: '',
    created_at: new Date(),
  });

  const [boardTab, setBoardTab] = useState([]);

  const getPost = async () => {
    const id = router.asPath.replace(/\/board\/content\//g, '');
    // console.log(id);
    const res = await method.GET(`/board/post/${ssrID ?? id}`);
    setContentData(res.data);
  };

  const getBoards = async () => {
    const resTab = await method.GET('/board/all');
    setBoardTab(resTab.data);
  };

  useEffect(() => {
    if (!router.isReady) return;
    getBoards();
    getPost();
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <BoardEditTemplate content={contentData} boardTab={boardTab} />
    </>
  );
};

BoardContentPage.getInitialProps = async (ctx) => {
  const {
    query: { id },
  } = ctx;
  return { ssrID: id };
};

export default BoardContentPage;
