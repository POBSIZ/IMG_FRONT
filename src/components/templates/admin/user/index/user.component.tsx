import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  FormEvent,
} from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledUser, { UserItem } from './user.styled';
import { UserPropsType } from './user.types';
import Link from 'next/link';

import Layout from 'Layouts';
import { Title, Input, Button, Badge } from 'Atoms';

const UserComponent: React.FC<UserPropsType> = (props) => {
  return (
    <Layout.Container>
      <Layout.Content>
        <StyledUser>
          <UserItem>
            <span>ID</span>
            <span>이름</span>
            <span>학교</span>
            <span>학년</span>
          </UserItem>
          {props.userList?.map((item) => {
            return (
              <Link href={`/admin/user/${item.user_id}`} key={nanoid()}>
                <UserItem>
                  <span>{item.user_id}</span>
                  <span>{item.name}</span>
                  <span>{item.school}</span>
                  <span>{item.grade}</span>
                </UserItem>
              </Link>
            );
          })}
        </StyledUser>
      </Layout.Content>
    </Layout.Container>
  );
};

export default UserComponent;
