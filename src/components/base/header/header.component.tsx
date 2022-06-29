import React, { useState, useCallback } from 'react';
import { Logo } from 'Atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';

import Link from 'next/link';
import { CheckAdmin } from 'Hoc';

import {
  HeaderPropsType,
  NavListType,
  NavListItemType,
  HeaderComponentPropsType,
} from '.';
import StyledHeader, { NavList } from './header.styled';

const HeaderComponent: React.FC<HeaderComponentPropsType> = (props) => {
  const [navState, setNavState] = useState(false);

  const handleNavState = useCallback(() => {
    setNavState((state) => !state);
  }, [navState]);

  return (
    <StyledHeader className="header">
      <Logo href="/">{process.env.NEXT_PUBLIC_TITLE}</Logo>
      <NavList isOpen={navState}>
        <ul>
          <li>
            <span>
              {props.authState?.profile?.name
                ? `안녕하세요 ${props.authState?.profile?.name}님`
                : '안녕하세요.'}
            </span>
            <FontAwesomeIcon
              icon={faXmark as IconProp}
              className="Icon"
              onClick={handleNavState}
            />
          </li>
          <div onClick={handleNavState}>
            {props.navList?.default?.map((item: NavListItemType) => {
              return (
                <Link key={nanoid()} href={item.url}>
                  {item.text}
                </Link>
              );
            })}

            <CheckAdmin>
              <>
                {props.navList?.admin?.map((item: NavListItemType) => {
                  return (
                    <Link key={nanoid()} href={item.url}>
                      {item.text}
                    </Link>
                  );
                })}
              </>
            </CheckAdmin>

            {props.authState?.token ? (
              <>
                <Link href="/profile">프로필</Link>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    props.logout();
                  }}
                >
                  로그아웃
                </a>
              </>
            ) : (
              props.navList?.top?.map((item: NavListItemType) => {
                return (
                  <Link key={nanoid()} href={item.url}>
                    {item.text}
                  </Link>
                );
              })
            )}
          </div>
        </ul>
      </NavList>
      <FontAwesomeIcon
        icon={faBars as IconProp}
        className="Icon"
        onClick={handleNavState}
      />
    </StyledHeader>
  );
};

export default HeaderComponent;
