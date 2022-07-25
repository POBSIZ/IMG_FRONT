import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { BoardCreateTemplate } from 'Templates';
import { useMethod } from 'Hooks';
import { useRouter } from 'next/router';

const BoardCreatePage: NextPage<any> = (props) => {
  const method = useMethod();
  const router = useRouter();

  const [boardTab, setBoardTab] = useState([]);

  const getBoards = async () => {
    const resTab = await method.GET('/board/all');
    setBoardTab(resTab.data);
  };

  useEffect(() => {
    getBoards();
  }, [router]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <BoardCreateTemplate boardTab={boardTab} />
    </>
  );
};

// BoardCreatePage.getInitialProps = async () => {
//   return {};
// };

export default BoardCreatePage;
