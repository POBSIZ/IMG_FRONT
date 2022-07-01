import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Address } from 'Molecules';

import Layout from 'Layouts';

const KakaoPage: NextPage<any> = (props, {}) => {
  const [zipCode, setZipCode] = useState(''); // 우편번호
  const [address, setAddress] = useState(''); // 주소

  return (
    <Layout.Container>
      <h1>Address: {address}</h1>
      <h2>Zip Code: {zipCode}</h2>
      <Address setAddress={setAddress} setZipCode={setZipCode} />
    </Layout.Container>
  );
};
export default KakaoPage;
