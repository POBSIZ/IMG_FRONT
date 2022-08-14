import { authLogout, authHeader } from 'Actions/authAction';
import Router, { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import { pushToastAsync } from 'Actions/toastAction';

import HeaderComponent from './header.component';
import { useMethod } from 'Hooks';
import { getDefaultCompilerOptions } from 'typescript';

export interface NavListItemType {
  url: string;
  text: string;
}

export interface NavListType {
  default: NavListItemType[];
  student: NavListItemType[];
  parents: NavListItemType[];
  insider: NavListItemType[];
  admin: NavListItemType[];
  auth: NavListItemType[];
}

export interface HeaderPropsType {
  navList: NavListType;
  // academyName: string;
}

export interface HeaderComponentPropsType extends HeaderPropsType {
  authState: RootStateOrAny;
  logout: Function;
  academy: any;
}

const Header: React.FC<HeaderPropsType> = (props) => {
  const router = useRouter();
  const method = useMethod();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [academy, setAcademy] = useState<any>(false);

  const logout = useCallback(() => {
    router.push(
      authState?.profile?.academy_info?.name
        ? `/academy/page/${authState?.profile?.academy_info?.name}`
        : '/',
      undefined,
      { shallow: true },
    );
    dispatch(authLogout());
    dispatch(
      pushToastAsync.request({
        status: 'error',
        message: '로그아웃하였습니다.',
      }),
    );
  }, [authState]);

  useEffect(() => {
    if (
      router.pathname === '/academy/page/[id]' &&
      authState?.profile?.academy_info === null
    ) {
      dispatch(authHeader(String(router.query.id)));
    }
  }, [router.pathname]);

  return (
    <HeaderComponent
      authState={authState}
      logout={logout}
      academy={academy}
      {...props}
    />
  );
};

export default Header;
