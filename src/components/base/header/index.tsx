import React from 'react';

import HeaderComponent from './header.component';

export interface NavListType {
  url: string;
  text: string;
}

export interface HeaderPropsType {
  navList: NavListType[];
}

const Header: React.FC = (props) => {
  const navList: NavListType[] = [
    { url: '/auth/login', text: 'LOGIN' },
    { url: '/quiz', text: 'QUIZ' },
    { url: '/admin', text: 'ADMIN' },
    { url: '/', text: 'TEST' },
  ];

  return <HeaderComponent navList={navList} {...props} />;
};

export default Header;
