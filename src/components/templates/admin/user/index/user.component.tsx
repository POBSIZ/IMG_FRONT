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
import { Title, Input, Button, Badge, Back } from 'Atoms';

const UserComponent: React.FC<UserPropsType> = (props) => {
  return (
    <>
      {/* <Layout.Container> */}
      {/* <Back style={{ margin: '20px 0' }} /> */}
      <Layout.Content>
        <StyledUser>
          <UserItem hasRole={props.hasRole}>
            <span>ID</span>
            {props.hasRole ? <span>권한</span> : null}
            <span>이름</span>
            <span>학원</span>
            <span>반</span>
          </UserItem>
          {props.userList?.map((item) => {
            return (
              <Link href={`/admins/user/${item.user_id}`} key={nanoid()}>
                <UserItem hasRole={props.hasRole}>
                  <span>{item.user_id}</span>
                  {props.hasRole ? <span>{item.role}</span> : null}
                  <span>{item.name}</span>
                  <span>{item.academy_id?.name}</span>
                  <span>{item.class_id?.name}</span>
                </UserItem>
              </Link>
            );
          })}
        </StyledUser>
      </Layout.Content>
      {/* </Layout.Container> */}
    </>
  );
};

UserComponent.defaultProps = {
  hasRole: true,
};

export default UserComponent;
