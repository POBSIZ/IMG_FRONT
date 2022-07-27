import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { QuizWrongResultTemplate } from 'Templates';
import { QuizResultType } from 'Types/quizTypes';

import { useMethod } from 'Hooks';
import { LoadWrapper } from 'Hoc';
import { useRouter } from 'next/router';

const QuizWrongResultPage: NextPage<any> = (props, {}) => {
  const method = useMethod();
  const router = useRouter();

  const [result, setResult] = useState<QuizResultType>({
    id: NaN,
    title: '',
    list: [],
    corrCount: 0,
  });
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const getResult = async () => {
    const id = router.asPath.replace(/\/\quiz\/wrongResult\?id=/g, '');
    const res = await method.GET(`/auth/quiz/wrongList/${id}`);

    // console.log(res.data);
    setResult((state) => res.data);
    setIsLoad(true);
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 퀴즈 결과</title>
      </Head>
      <LoadWrapper isLoad={isLoad}>
        <QuizWrongResultTemplate result={result} />
      </LoadWrapper>
    </>
  );
};

// QuizResultPage.getInitialProps = async () => {
//   return {};
// };

export default QuizWrongResultPage;
