import { pushToastAsync } from 'Actions/toastAction';
import { useMethod } from 'Hooks';
import { useRouter } from 'next/router';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import AuthResetComponent from './authReset.component';

const AuthResetTemplate: React.FC<any> = (props) => {
  const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();

  const [isValidate, setIsValidate] = useState<boolean>(false);

  const getIsValidate = async (username, phone) => {
    const res = await method.POST('/auth/validate/password', {
      username,
      phone,
    });

    if (res.data) {
      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '인증에 성공하였습니다.',
        }),
      );
      setIsValidate(true);
    } else {
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '인증에 실패하였습니다.',
        }),
      );
    }
  };

  const changePassword = async (username, phone, password) => {
    const res = await method.PATCH('/auth/change/password', {
      username,
      phone,
      password,
    });

    if (res.data) {
      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '변경에 성공하였습니다.',
        }),
      );
      setIsValidate(true);
    } else {
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '변경에 실패하였습니다.',
        }),
      );
    }

    router.push('/auth/login', undefined, { shallow: true });
  };

  return (
    <>
      <AuthResetComponent
        {...props}
        getIsValidate={getIsValidate}
        changePassword={changePassword}
        isValidate={isValidate}
      />
    </>
  );
};

export default AuthResetTemplate;
