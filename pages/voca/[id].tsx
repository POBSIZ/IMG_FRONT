import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';

import { VocaContentTemplate } from 'Templates';
import { VocaApi } from 'api';
import { GetWordsByIdRes } from 'api/voca/types/get';

const VocaContentPage: NextPage<any> = ({ ssrId }) => {
  const router = useRouter();
  const { id } = router.query;
  const voca = VocaApi();

  const [content, setContent] = useState<GetWordsByIdRes>({
    name: '',
    origin: '',
    created_at: new Date(),
    voca_id: 0,
    word_list: [],
  });

  const getWords = async () => {
    setContent((await voca.get.wordsById(Number(id ?? ssrId))).data);
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 단어장</title>
      </Head>
      <VocaContentTemplate content={content} />
    </>
  );
};

VocaContentPage.getInitialProps = (ctx: NextPageContext) => {
  const {
    req,
    query: { id },
  } = ctx;

  return { props: { ssrId: id } };
};

export default VocaContentPage;
