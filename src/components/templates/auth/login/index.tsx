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
              user_id: profileData.user_id,
              name: profileData.name,
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

        dispatch(
          pushToastAsync.request({
            status: 'success',
            message: '로그인에 성공하였습니다.',
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
