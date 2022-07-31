import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

interface RedirectLoginPropsType {
  children: React.ReactElement;
}

const RedirectLogin: React.FC<RedirectLoginPropsType> = (props) => {
  const router = useRouter();
  const authReducer = useSelector((state: RootStateOrAny) => state.authReducer);

  useEffect(() => {
    if (!authReducer.token) {
      router.push('/auth/login', undefined, { shallow: true });
    }
    return () => {};
  }, []);

  return props.children;
};

export default RedirectLogin;
