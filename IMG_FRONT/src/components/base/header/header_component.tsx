import React, { useState, useCallback } from 'react';
import { Logo } from 'Atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';

import Link from 'next/link';

import { HeaderPropsType, NavListType } from '.';
import StyledHeader, { NavList } from './header_styled';

const HeaderComponent: React.FC<HeaderPropsType> = (props) => {
  const [navState, setNavState] = useState(false);

  const handleNavOpen = useCallback(() => {
    setNavState((state) => !state);
  }, [navState]);

  return (
    <StyledHeader className="header">
      <Logo href="/">{process.env.NEXT_PUBLIC_TITLE}</Logo>
      <NavList isOpen={navState}>
        <ul>
          <li>
            <span>Welcome!</span>
            <FontAwesomeIcon
              icon={faXmark as IconProp}
              className="Icon"
              onClick={handleNavOpen}
            />
          </li>
          <div onClick={handleNavOpen}>
            {props.navList?.map((item: NavListType) => {
              return <Link href={item.url}>{item.text}</Link>;
            })}
          </div>
        </ul>
      </NavList>
      <FontAwesomeIcon
        icon={faBars as IconProp}
        className="Icon"
        onClick={handleNavOpen}
      />
    </StyledHeader>
  );
};

export default HeaderComponent;
