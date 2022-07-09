import React, { useEffect, useState, useRef, memo, useCallback } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { nanoid } from 'nanoid';

import StyledUserList, {
  UserListItem,
  UserListItemBox,
} from './userList.styled';

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

const UserList: React.FC<UserListPropsType> = (props) => {
  const [isAllCheck, setIsAllCheck] = useState<boolean>(false);

  const handleAll = useCallback((e) => {
    e.preventDefault();
    // e.stopPropagation();
    setIsAllCheck((state) => !state);
  }, []);

  return (
    <StyledUserList>
      <UserListItem onClick={handleAll}>
        <UserListItemBox checked={isAllCheck} />
        <span>이름</span>
        <span>학년</span>
        <span>학교</span>
      </UserListItem>
      <section>
        {props.list?.map((item, i) => {
          return (
            <UserListItem key={nanoid()} htmlFor={i + ''}>
              <Check
                value={item.user_id + ''}
                type="checkbox"
                scale="L"
                id={i + ''}
                name={props.name}
                checked={isAllCheck}
              />
              <span>{item.name}</span>
              <span>{item.grade}</span>
              <span>{item.school}</span>
            </UserListItem>
          );
        })}
      </section>
    </StyledUserList>
  );
};

export default React.memo(UserList);
