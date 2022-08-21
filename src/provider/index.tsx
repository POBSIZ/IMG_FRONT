import React, { useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';

import { Header, Footer } from 'Bases';
import { Toast } from 'Bases';

import StyledMain from './styledMain';
import { Get } from 'Utils';
import { authLogout, authLogin } from 'Actions/authAction';
import jwt from 'jwt-decode';
import { AuthProfileType } from 'Types/authTypes';
import { useMethod } from 'Hooks';
import { pushToastAsync } from 'Actions/toastAction';

const ProviderLayout: React.FC<any> = ({ children }) => {
  const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  const getTokenValidate = useCallback(async () => {
    try {
      if (authState.token) {
        const res = await method.GET('/auth/validate');

        const profileData: AuthProfileType = await jwt(res.data);

        dispatch(
          authLogin({
            profile: {
              ...profileData,
            },
            token: res.data,
          }),
        );
      }
    } catch (error) {
      dispatch(authLogout());
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '토큰이 만료 되었습니다.',
        }),
      );
      router.push('/', undefined, { shallow: true });
    }
  }, [authState]);

  const handleRouteChange = useCallback(() => {
    // console.log('Page Change');
  }, [router]);

  useEffect(() => {
    getTokenValidate();
    // console.log(router.pathname);
    // router.events.on('routeChangeStart', handleRouteChange);
    return () => {};
  }, []);

  return (
    <>
      {router.pathname === '/quiz/play/[id]' ? null : (
        <Header
          navList={{
            default: [
              // { url: '/board', text: '게시판' },
              { url: '/quiz', text: '퀴즈풀기' },
            ],
            student: [
              // {
              //   url: `/academy/page/${authState?.profile?.academy_info?.name}`,
              //   text: '내 학원',
              // },
            ],
            parents: [],
            insider: [{ url: '/academy', text: '학원 & 퀴즈 관리' }],
            admin: [
              { url: '/admins', text: '관리자' },
              { url: '/board', text: '게시판' },
            ],
            auth: [{ url: '/auth/login', text: '로그인' }],
          }}
        />
      )}
      <StyledMain>{children}</StyledMain>
      {/* <Footer /> */}
      <Toast />
    </>
  );
};

export default ProviderLayout;
