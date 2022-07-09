import React, { useCallback, useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { CheckRole } from 'Hoc';
import { AcademyCreateTemplate } from 'Templates';
import { useMethod } from 'Hooks';

const AcademyCreatePage: NextPage<any> = (props, {}) => {
  const method = useMethod();

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 학원 생성</title>
      </Head>
      <CheckRole role="insider" isRedirect={true}>
        <AcademyCreateTemplate />
      </CheckRole>
    </>
  );
};

export default AcademyCreatePage;
