import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  useSelector,
  useDispatch,
  RootStateOrAny,
  AnyIfEmpty,
} from 'react-redux';
import LoginComponent from './login.component';
import { LoginPropsType } from './login.types';
import { authLoginAsync, authLogin } from 'Actions/authAction';
import { Post } from 'Utils';
import { pushToastAsync } from 'Actions/toastAction';
import Router from 'next/router';
import jwt from 'jwt-decode';
import { AuthProfileType, AuthReducerType } from 'Types/authTypes';

const LoginTemplate: React.FC<LoginPropsType> = (props) => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    async (_username: string, _password: string) => {
      try {
        const res = await Post('/auth/login', {
          username: _username,
          password: _password,
        });

        const profileData: AuthProfileType = await jwt(res.data);

        dispatch(
          authLogin({
            profile: {
              name: profileData.name,
              school: profileData.school,
              grade: profileData.grade,
              phone: profileData.phone,
              role: profileData.role,
            },
            token: res.data,
          }),
        );
        
        dispatch(
          pushToastAsync.request({
            status: 'success',
            message: '로그인에 성공하였습니다!',
          }),
        );
        Router.push('/');
      } catch (error: any) {
        console.log(error);
        dispatch(
          pushToastAsync.request({
            status: 'error',
            message: error.response.data.message,
          }),
        );
      }
    },
    [],
  );

  return (
    <>
      <LoginComponent {...props} handleSubmit={handleSubmit} />
    </>
  );
};

export default LoginTemplate;
