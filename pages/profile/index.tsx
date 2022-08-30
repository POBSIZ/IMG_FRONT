import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { ProfileTemplate } from 'Templates';
import { ProfileTemplatePropsType } from 'Templates/profile';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Get } from 'Utils';
import { useMethod } from 'Hooks';
import { AuthReducerType } from 'Types/authTypes';

const ProfilePage: NextPage<any> = (props, {}) => {
  const method = useMethod();
  const authState: AuthReducerType = useSelector(
    (state: RootStateOrAny) => state.authReducer,
  );
  const [chainId, setChainId] = useState('');
  const [quizLog, setQuizLog] = useState([]);
  const [userListTable, setUserListTable] = useState([]);

  const getQuizLog = useCallback(async () => {
    try {
      const res = authState?.profile?.chain_id
        ? await method.GET(`/auth/quiz/log/chain/${authState.profile.chain_id}`)
        : await method.GET('/auth/quiz/log');
      setQuizLog(
        res.data.flat().sort((a, b) => {
          return Number(new Date(b.date)) - Number(new Date(a.date));
        }),
      );

      const resTable = await method.GET(
        `/academy/student/info/all/table/${authState.profile.user_id}`,
      );
      setUserListTable(resTable.data);

      if (authState.profile.chain_id) {
        const res = await method.GET(
          `/auth/user/${authState.profile.chain_id}`,
        );
        setChainId(res.data.nickname);
      }
    } catch (error) {}
  }, [authState]);

  useEffect(() => {
    getQuizLog();
  }, [authState]);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 프로필</title>
      </Head>
      <ProfileTemplate
        profile={authState.profile}
        quizLog={quizLog}
        chainId={chainId}
        dateUserList={userListTable}
        requestChain={useCallback(async () => {}, [])}
        responseChain={useCallback(async () => {}, [])}
      />
    </>
  );
};

// ProfilePage.getInitialProps = async () => {
//   return {};
// };

export default ProfilePage;
