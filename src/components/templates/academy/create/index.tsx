import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  FormEvent,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import { AcademyCreatePropsType } from './academyCreate.types';
import AcademyCreateComponent from './academyCreate.component';

import { Post } from 'Utils';
import { pushToastAsync } from 'Actions/toastAction';

import { useMethod } from 'Hooks';
import { useRouter } from 'next/router';

const AcademyCreateTemplate: React.FC<Partial<AcademyCreatePropsType>> = (
  props,
) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const method = useMethod();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  const myAcademyInfo = useMemo(() => {
    return {
      president_name: authState.profile.name,
      phone: authState.profile.phone,
      address: authState.profile.address,
      zip: authState.profile.zip,
      address_detail: authState.profile.address_detail,
    };
  }, []);

  const handleSubmit = useCallback(
    async (
      _name: string,
      _president_name: string,
      _phone: string,
      _address: string,
      _zip: string,
      _address_detail: string,
    ) => {
      try {
        const res = await method.POST('/academy/create', {
          name: _name,
          president_name: _president_name,
          phone: _phone,
          address: _address,
          zip: _zip,
          address_detail: _address_detail,
        });

        dispatch(
          pushToastAsync.request({
            status: 'success',
            message: '학원을 생성하였습니다.',
          }),
        );

        router.push('/academy');
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
    <AcademyCreateComponent
      handleSubmit={handleSubmit}
      myAcademyInfo={myAcademyInfo}
    />
  );
};

export default AcademyCreateTemplate;
