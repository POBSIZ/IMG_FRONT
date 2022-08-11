import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { BoardIdTemplate } from 'Templates';
import { useMethod } from 'Hooks';

const BoardContentPage: NextPage<any> = (props) => {
  const method = useMethod();
  const router = useRouter();

  const [boardList, setBoardList] = useState<any>([]);

  const getBoards = async () => {
    const id = router.asPath.replace(/\/board\//g, '');
    const resList = await method.GET(`/board/list/${id}`);
    setBoardList(
      resList.data.sort(
        (a, b) =>
          Number(new Date(b.created_at)) - Number(new Date(a.created_at)),
      ),
    );

    // console.log(resList.data);
  };

  useEffect(() => {
    getBoards();
  }, [router]);

  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_TITLE} | {boardList[0]?.board_id?.title}
        </title>
      </Head>
      <BoardIdTemplate boardList={boardList} />
    </>
  );
};

// BoardContentPage.getInitialProps = async () => {
//   return {};
// };

export default BoardContentPage;
