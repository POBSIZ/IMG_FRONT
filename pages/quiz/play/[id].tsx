import React, { useEffect, useState, useCallback } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useSelector, RootStateOrAny } from 'react-redux';
import { Get } from 'Utils';

import {
  QuizPlayTemplatePropsType,
  QuizItemType,
  AnswerListItem,
} from 'Templates/quiz/play/quizPlay.types';
import { QuizPlayTemplate } from 'Templates';
import { Loader } from 'Bases';

const QuizPlayPage: NextPage<any> = ({}) => {
  const router = useRouter();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  /**
   * @param id quiz_id
   * @param title quiz title
   * @param uqid userQuiz_id
   */
  const { id, title, uqid } = router.query;

  const [isLoad, setIsLoad] = useState<boolean>(true);

  const [probList, setProbList] = useState<{
    limitTime: number;
    probList: QuizItemType[];
  }>({ limitTime: NaN, probList: [] });

  // 문제 목록 가져오기
  const getProbs = useCallback(async () => {
    const probs = await Get(`/quiz/prob/${id}`, {
      timeout: 10000,
      headers: { Authorization: `Bearer ${authState.token}` },
    });
    setProbList(probs.data);
    setIsLoad(false);
  }, []);

  useEffect(() => {
    getProbs();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 퀴즈 진행</title>
      </Head>
      {isLoad ? (
        <Loader />
      ) : (
        <QuizPlayTemplate
          userQuizId={Number(uqid)}
          quizId={Number(id)}
          quizTitle={`${title}`}
          limitTime={probList.limitTime}
          quizList={probList.probList}
        />
      )}
    </>
  );
};

export default QuizPlayPage;
