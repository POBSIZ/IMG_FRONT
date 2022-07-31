import React, { useEffect, useState, useRef, memo, useCallback } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { nanoid } from 'nanoid';

import StyledUserList, { UserListItem } from './userList.styled';

import { Input, Check, Button } from 'Atoms';

export interface UserListType {
  user_id: number | bigint;
  name: string;
  grade: string;
  school: string;
  class_id: number | bigint;
}

export interface UserListPropsType {
  list: UserListType[];
  name: string;
}

const UserListItemComponent: React.FC<{
  i: number;
  item: any;
  name: string;
  isAllCheck: boolean;
}> = (props) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  useEffect(() => {
    setIsCheck(props.isAllCheck);
  }, [props.isAllCheck]);

  return (
    <UserListItem key={nanoid()} htmlFor={props.i + ''}>
      <Check
        value={props.item.user_id + ''}
        type="checkbox"
        scale="L"
        id={props.i + ''}
        name={props.name}
        checked={isCheck}
        onChange={() => {
          setIsCheck((state) => !state);
        }}
      />
      <span>{props.item.name}</span>
      <span>{props.item.grade}</span>
      <span>{props.item.school}</span>
    </UserListItem>
  );
};

const UserList: React.FC<UserListPropsType> = (props) => {
  const [isAllCheck, setIsAllCheck] = useState<boolean>(false);

  const handleAll = useCallback((e) => {
    setIsAllCheck((state) => !state);
  }, []);

  return (
    <StyledUserList>
      <UserListItem>
        <Check scale="L" checked={isAllCheck} onClick={handleAll} />
        <span>이름</span>
        <span>학년</span>
        <span>학교</span>
      </UserListItem>
      <section>
        {props.list?.map((item, i) => {
          return (
            <UserListItemComponent
              key={nanoid()}
              i={i}
              item={item}
              name={props.name}
              isAllCheck={isAllCheck}
            />
          );
        })}
      </section>
    </StyledUserList>
  );
};

export default React.memo(UserList);
