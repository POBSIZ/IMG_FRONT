import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { VocaListTemplate } from 'Templates';

import { RedirectLogin } from 'Hoc';
import { useMethod } from 'Hooks';

import { VocaApi } from 'api';
import { GetVocaListRes } from 'api/voca/types/get';

const VocaPage: NextPage<any> = (props) => {
  const vocaApi = VocaApi();

  const [vocaList, setVocaList] = useState<GetVocaListRes[]>([]);

  const getVocaList = useCallback(async () => {
    setVocaList((await vocaApi.get.vocaList()).data);
  }, []);

  useEffect(() => {
    getVocaList();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 단어장</title>
      </Head>
      <RedirectLogin>
        <VocaListTemplate vocaList={vocaList} />
      </RedirectLogin>
    </>
  );
};

export default VocaPage;
