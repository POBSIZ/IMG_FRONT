import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { BoardTemplate } from 'Templates';
import { useMethod } from 'Hooks';
import { useRouter } from 'next/router';

const BoardPage: NextPage<any> = (props) => {
  const method = useMethod();
  const router = useRouter();

  const [boardTab, setBoardTab] = useState([]);
  const [boardList, setBoardList] = useState([]);

  const getBoards = async () => {
    const id = router.asPath.replace(/\/board\?id=/g, '');
    const resTab = await method.GET('/board/all');
    const resList =
      id === '/board'
        ? await method.GET(`/board/list/${resTab.data[0].board_id}`)
        : await method.GET(`/board/list/${id}`);
    setBoardTab(resTab.data);
    setBoardList(
      resList.data.sort(
        (a, b) =>
          Number(new Date(b.created_at)) - Number(new Date(a.created_at)),
      ),
    );
  };

  useEffect(() => {
    getBoards();
  }, [router]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 게시판</title>
      </Head>
      <BoardTemplate boardTab={boardTab} boardList={boardList} />
    </>
  );
};

// BoardPage.getInitialProps = async () => {
//   return {};
// };

export default BoardPage;
