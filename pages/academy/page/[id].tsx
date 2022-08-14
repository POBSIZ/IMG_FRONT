import React, { useEffect, useState, useCallback, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import { AcademyPageTemplate } from 'Templates';
import { Loader } from 'Bases';
import { useMethod } from 'Hooks';
import { getPageFiles } from 'next/dist/server/get-page-files';
import { Get } from 'Utils';

const AcademyPagePage: NextPage<any> = ({ ssrID }) => {
  const method = useMethod();
  const dispatch = useDispatch();
  const router = useRouter();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  /**
   * @param id
   */
  const { id } = router.query;

  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [pageInfo, setPageInfo] = useState<any>(null);
  const [boardContents, setBoardContents] = useState<any>(null);

  const getPage = useCallback(async () => {
    try {
      const page = await method.GET(`/academy/page/${ssrID ?? id}`);

      const brdcts = await Promise.all(
        page.data.boards.map(async (board) => {
          const contents = await method.GET(
            `/board/list/${board.board_id.board_id}`,
          );

          const sortContents = contents.data.sort((a, b) => {
            return (
              Number(new Date(b.created_at)) - Number(new Date(a.created_at))
            );
          });

          return sortContents;
        }),
      );

      setPageInfo({ ...page.data, board_contents: brdcts });
      setIsLoad(false);
    } catch (error) {
      const page = await method.POST(`/academy/page/${ssrID ?? id}`, {});
      router.reload();
    }
  }, []);

  useEffect(() => {
    getPage();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 내 학원</title>
      </Head>
      <AcademyPageTemplate pageInfo={pageInfo} />
    </>
  );
};

AcademyPagePage.getInitialProps = async (ctx) => {
  const {
    query: { id },
  } = ctx;

  return { ssrID: id };
};

export default AcademyPagePage;
