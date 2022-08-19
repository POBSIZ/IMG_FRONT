import React, { useState, useEffect, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled, { css } from 'styled-components';

import Layout from 'Layouts';

import { Address, Search, CustomList, CheckPrivacy } from 'Molecules';
import { FilterBox, UserTable } from 'Organisms';
import { useMethod } from 'Hooks';
import { FormatDate } from 'Utils';

const TEST: NextPage<any> = (props, {}) => {
  const method = useMethod();

  const [dateUserList, setDateUserList] = useState([]);

  const getUserList = useCallback(async () => {
    const res = await method.GET('/academy/student/info/all/table');
    setDateUserList(res.data);
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Layout.Container>
      <UserTable dateUserList={dateUserList} />
    </Layout.Container>
  );
};
export default TEST;
