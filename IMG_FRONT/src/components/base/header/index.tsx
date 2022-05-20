import React from 'react';

import HeaderComponent from './header_component';

export interface NavListType {
  url: string;
  text: string;
}

export interface HeaderPropsType {
  navList: NavListType[];
}

const Header: React.FC = (props) => {
  const navList: NavListType[] = [
    { url: '/', text: 'TEST' },
    { url: '/', text: 'TEST' },
    { url: '/', text: 'TEST' },
  ];

  return <HeaderComponent navList={navList} {...props} />;
};

export default Header;
