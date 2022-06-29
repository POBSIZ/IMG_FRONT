import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import RegisterComponent from './register.component';
import { RegisterPropsType } from './register.types';
import { Post } from 'Utils';
import { pushToastAsync } from 'Actions/toastAction';
import { AxiosError, AxiosResponse } from 'axios';
import { Router, useRouter } from 'next/router';

const RegisterTemplate: React.FC<RegisterPropsType> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (
      _name: string,
      _username: string,
      _school: string,
      _grade: string,
      _phone: string,
      _password: string,
    ) => {
      try {
        const res = await Post('/auth/register', {
          name: _name,
          username: _username,
          school: _school,
          grade: _grade,
          phone: _phone,
          password: _password,
        });
        console.log(res);
        dispatch(
          pushToastAsync.request({
            status: 'success',
            message: '회원가입에 성공하였습니다!',
          }),
        );
        router.push('/auth/login');
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
      <RegisterComponent {...props} handleSubmit={handleSubmit} />
    </>
  );
};

export default RegisterTemplate;
