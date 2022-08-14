import React, { useState, useCallback, useEffect } from 'react';
import { Logo } from 'Atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';

import Link from 'next/link';
import { CheckRole } from 'Hoc';
import Image from 'next/image';

import {
  HeaderPropsType,
  NavListType,
  NavListItemType,
  HeaderComponentPropsType,
} from '.';
import StyledHeader, { NavList } from './header.styled';
import { useRouter } from 'next/router';

const HeaderComponent: React.FC<HeaderComponentPropsType> = (props) => {
  const router = useRouter();

  const [navState, setNavState] = useState(false);

  const handleNavState = useCallback(() => {
    setNavState((state) => !state);
  }, [navState]);

  return (
    <StyledHeader className="header">
      <Logo href="/">
        <Image src="/logo.gif" layout="responsive" width={0} height={0} />
      </Logo>

      <NavList isOpen={navState}>
        <ul>
          <li>
            <span>
              {props.authState?.profile?.nickname
                ? `안녕하세요 ${props.authState?.profile?.nickname}님`
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

            <CheckRole role="student" isRedirect={false}>
              <>
                {props.navList?.student?.map((item: NavListItemType) => {
                  if (
                    item.text === '내 학원' &&
                    props.authState?.profile?.academy_info === null
                  ) {
                    return <></>;
                  }
                  return (
                    <Link key={nanoid()} href={item.url}>
                      {item.text}
                    </Link>
                  );
                })}
              </>
            </CheckRole>

            <CheckRole role="parents" isRedirect={false}>
              <>
                {props.navList?.parents?.map((item: NavListItemType) => {
                  return (
                    <Link key={nanoid()} href={item.url}>
                      {item.text}
                    </Link>
                  );
                })}
              </>
            </CheckRole>

            {props.authState?.token ? (
              <>
                <Link href="/profile">학습 기록</Link>
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
              props.navList?.auth?.map((item: NavListItemType) => {
                return (
                  <Link key={nanoid()} href={item.url}>
                    {item.text}
                  </Link>
                );
              })
            )}

            <CheckRole role="insider" isRedirect={false}>
              <>
                {props.navList?.insider?.map((item: NavListItemType) => {
                  return (
                    <Link key={nanoid()} href={item.url}>
                      <a>
                        <span className="divider">{item.text}</span>
                      </a>
                    </Link>
                  );
                })}
              </>
            </CheckRole>

            <CheckRole role="admin" isRedirect={false}>
              <>
                {props.navList?.admin?.map((item: NavListItemType) => {
                  return (
                    <Link key={nanoid()} href={item.url}>
                      <a>
                        <span className="divider">{item.text}</span>
                      </a>
                    </Link>
                  );
                })}
              </>
            </CheckRole>
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
