import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  FormEvent,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { Post } from 'Utils';

import { UserPropsType } from './user.types';
import UserComponent from './user.component';

const UserTemplate: React.FC<UserPropsType> = (props, {}) => {
  return (
    <>
      <UserComponent {...props} />
    </>
  );
};

export default UserTemplate;
