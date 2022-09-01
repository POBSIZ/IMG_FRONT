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

const VocaContentPage: NextPage<any> = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 단어장</title>
      </Head>
      <VocaContentTemplate />
    </>
  );
};

// export async function getServerSideProps(ctx: NextPageContext) {
//   const {
//     req,
//     query: { id },
//   } = ctx;
//   return { props: {} };
// }

export default VocaContentPage;
