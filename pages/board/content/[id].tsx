import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { BoardContentTemplate } from 'Templates';
import { useMethod } from 'Hooks';

const BoardContentPage: NextPage<any> = (props) => {
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

  const getPost = async () => {
    const id = router.asPath.replace(/\/board\/content\//g, '');
    // console.log(id);
    const res = await method.GET(`/board/post/${id}`);
    setContentData(res.data);
  };

  useEffect(() => {
    if (!router.isReady) return;
    getPost();
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <BoardContentTemplate content={contentData} />
    </>
  );
};

// BoardContentPage.getInitialProps = async () => {
//   return {};
// };

export default BoardContentPage;
