import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { VocaListTemplate } from 'Templates';

import { RedirectLogin } from 'Hoc';
import { useMethod } from 'Hooks';

const VocaPage: NextPage<any> = (props) => {
  const method = useMethod();

  const [vocaList, setVocaList] = useState([]);

  const getVocaList = useCallback(async () => {
    const res = await method.GET('/voca/get/all');
    setVocaList(res.data);
  }, []);

  useEffect(() => {
    getVocaList();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <RedirectLogin>
        <VocaListTemplate vocaList={vocaList} />
      </RedirectLogin>
    </>
  );
};

export default VocaPage;
