import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

interface CheckRolePropsType {
  role: 'student' | 'parent' | 'insider' | 'admin' | 'all';
  isRedirect?: boolean;
  redirectUrl?: string;
  children: React.ReactElement;
}

const CheckRole: React.FC<CheckRolePropsType> = (props) => {
  const router = useRouter();
  const authReducer = useSelector((state: RootStateOrAny) => state.authReducer);

  useEffect(() => {
    if (props.isRedirect) {
      if (authReducer?.profile?.role !== 'admin') {
        if (authReducer?.profile?.role !== props.role) {
          router.push(props.redirectUrl || '/');
        }
      }
    }
    return () => {};
  }, []);

  return authReducer?.profile?.role === props.role ? (
    props.children
  ) : authReducer?.profile?.role === 'admin' || props.role === 'all' ? (
    props.children
  ) : (
    <></>
  );
};

export default CheckRole;
