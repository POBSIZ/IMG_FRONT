import React, { useState, useEffect, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled, { css } from 'styled-components';

import Layout from 'Layouts';

import { Address, Search, CustomList } from 'Molecules';
import { FilterBox } from 'Organisms';
import { useMethod } from 'Hooks';
import { FormatDate } from 'Utils';

const TEST: NextPage<any> = (props, {}) => {
  const method = useMethod();

  const [list, setList] = useState([]);
  // console.log(list);
  const [userInfoList, setUserInfoList] = useState([]);

  const getUserList = useCallback(async () => {
    const resInfo = await method.GET('/academy/student/info/all');

    const resInfoList = resInfo.data?.map((item, i) => ({
      idx: i,
      subtitle: FormatDate(item.data?.created_at),
      ...item,
    }));

    setUserInfoList(resInfoList);
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Layout.Container>
      <FilterBox list={userInfoList} getList={setList} depth={3} />
    </Layout.Container>
  );
};
export default TEST;
