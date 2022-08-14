import React, { useState, useEffect, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled, { css } from 'styled-components';

import Layout from 'Layouts';

import { Address, Search, CustomList, CheckPrivacy } from 'Molecules';
import { FilterBox } from 'Organisms';
import { useMethod } from 'Hooks';
import { FormatDate } from 'Utils';

const TEST: NextPage<any> = (props, {}) => {
  const method = useMethod();

  return (
    <Layout.Container>
      <CheckPrivacy setCheckPrivacy={() => {}} />
    </Layout.Container>
  );
};
export default TEST;
