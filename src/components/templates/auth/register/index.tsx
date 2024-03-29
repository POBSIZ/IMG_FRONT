import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import RegisterComponent from './register.component';
import { RegisterPropsType } from './register.types';
import { Post } from 'Utils';
import { pushToastAsync } from 'Actions/toastAction';
import { AxiosError, AxiosResponse } from 'axios';
import { Router, useRouter } from 'next/router';
import window from 'global/window';
import { useAuth } from 'Hooks';

const RegisterTemplate: React.FC<RegisterPropsType> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useAuth();

  const handleSubmit = useCallback(
    async (
      _name: string,
      _nickname: string,
      _username: string,
      _password: string,
      _phone: string,
      _role: string,
      _school: string,
      _grade: string,
      _address: string,
      _zipCode: string,
      _addressDetail: string,
      _academy: string,
      _academy_id: string,
    ) => {
      try {
        const res = await Post('/auth/register', {
          name: _name.trim(),
          nickname: _nickname.trim(),
          username: _username.trim(),
          password: _password.trim(),
          phone: _phone,
          role: _role,
          school: _school.trim(),
          grade: _grade,
          address: _address,
          zip: _zipCode,
          address_detail: _addressDetail.trim(),
          academy: _academy,
          academy_id: _academy_id,
        });
        // console.log(res);
        dispatch(
          pushToastAsync.request({
            status: 'success',
            message: '회원가입에 성공하였습니다.',
          }),
        );
        router.push('/auth/login', undefined, { shallow: true });
      } catch (error: any) {
        // console.log(error);
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
      <RegisterComponent
        {...props}
        authState={auth}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default RegisterTemplate;
