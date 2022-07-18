import { authLogout } from 'Actions/authAction';
import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import { pushToastAsync } from 'Actions/toastAction';

import HeaderComponent from './header.component';
import { useMethod } from 'Hooks';

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
  const method = useMethod();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [academy, setAcademy] = useState<any>(false);

  const logout = useCallback(() => {
    Router.push('/');
    dispatch(authLogout());
    dispatch(
      pushToastAsync.request({
        status: 'error',
        message: '로그아웃하였습니다.',
      }),
    );
  }, [authState]);

  const getAcademy = useCallback(async () => {
    const res = await method.GET('/academy/info');
    setAcademy(res.data);
    // console.log(res);
  }, [academy]);

  useEffect(() => {
    // if (academy === false) {
    // }
    // getAcademy();
    // if (authState.profile.academy_id) {
    // }
  }, [authState.profile.academy_id !== NaN]);

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
