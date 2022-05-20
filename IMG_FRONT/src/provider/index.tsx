import React, { useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';

import { Header, Footer } from 'Bases';
import { Toast } from 'Bases';

import StyledMain from './styledMain';

const ProviderLayout: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const handleRouteChange = useCallback(() => {
    console.log('Page Change');
  }, [router]);

  useEffect(() => {
    // router.events.on('routeChangeStart', handleRouteChange);
    return () => {};
  }, []);

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
      <Toast />
    </>
  );
};

export default ProviderLayout;
