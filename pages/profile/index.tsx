import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { ProfileTemplate } from 'Templates';
import { ProfileTemplatePropsType } from 'Templates/profile';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Get } from 'Utils';

const ProfilePage: NextPage<any> = (props, {}) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [quizLog, setQuizLog] = useState([]);

  const profileData: ProfileTemplatePropsType = useMemo(
    () => ({
      profile: {
        name: authState.profile.name,
        school: authState.profile.school,
        grade: authState.profile.grade,
        phone: authState.profile.phone,
      },
      quizLog: quizLog.reverse(),
    }),
    [quizLog],
  );

  const getQuizLog = useCallback(async () => {
    const res = await Get('/auth/quiz/log', {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    setQuizLog(res.data);
  }, []);

  useEffect(() => {
    getQuizLog();
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 프로필</title>
      </Head>
      <ProfileTemplate {...profileData} />
    </>
  );
};

// ProfilePage.getInitialProps = async () => {
//   return {};
// };

export default ProfilePage;
