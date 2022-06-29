import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  FormEvent,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { Post } from 'Utils';

import { UserInfoPropsType } from './userInfo.types';
import UserInfoComponent from './userInfo.component';

const UserInfoTemplate: React.FC<UserInfoPropsType> = (props, {}) => {
  return (
    <>
      <UserInfoComponent {...props} />
    </>
  );
};

export default UserInfoTemplate;
