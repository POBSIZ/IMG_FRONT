import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'Layouts';

import { Address } from 'Molecules';
import { Search } from 'Organisms';

const KakaoPage: NextPage<any> = (props, {}) => {
  const [sr, setSR] = useState({});

  return (
    <Layout.Container>
      <Search getBaseUrl="/quiz/book/search" setSearchResult={setSR} />
    </Layout.Container>
  );
};
export default KakaoPage;
