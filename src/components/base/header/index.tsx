import { authLogout } from 'Actions/authAction';
import Router from 'next/router';
import React, { useCallback } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import { pushToastAsync } from 'Actions/toastAction';

import HeaderComponent from './header.component';

export interface NavListItemType {
  url: string;
  text: string;
}

export interface NavListType {
  top: NavListItemType[];
  default: NavListItemType[];
  admin: NavListItemType[];
}

export interface HeaderPropsType {
  navList: NavListType;
}

export interface HeaderComponentPropsType extends HeaderPropsType {
  authState: RootStateOrAny;
  logout: Function;
}

const Header: React.FC<HeaderPropsType> = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  const logout = useCallback(() => {
    dispatch(authLogout());
    dispatch(
      pushToastAsync.request({
        status: 'error',
        message: '로그아웃하였습니다.',
      }),
    );
    Router.push('/');
  }, []);

  return <HeaderComponent authState={authState} logout={logout} {...props} />;
};

export default Header;
