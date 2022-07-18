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
              user_id: profileData.user_id,
              chain_id: profileData.chain_id,
              name: profileData.name,
              nickname: profileData.nickname,
              phone: profileData.phone,
              role: profileData.role,
              created_at: profileData.created_at,
              school: profileData.school,
              grade: profileData.grade,
              class_id: profileData.class_id,
              address: profileData.address,
              zip: profileData.zip,
              address_detail: profileData.address_detail,
              academy_id: profileData.academy_id,
            },
            token: res.data,
          }),
        );
      }
    } catch (error) {
      dispatch(authLogout());
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
            default: [{ url: '/quiz', text: '퀴즈풀기' }],
            student: [],
            parents: [],
            insider: [{ url: '/academy', text: '학원 & 퀴즈 관리' }],
            admin: [{ url: '/admins', text: '관리자' }],
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
