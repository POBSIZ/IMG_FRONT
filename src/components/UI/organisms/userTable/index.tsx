import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import UserTableComponent from './userTable.component';

interface UserTablePropsType {
  dateUserList: any[];
}

const UserTable: React.FC<UserTablePropsType> = (props) => {
  return (
    <>
      <UserTableComponent {...props} />
    </>
  );
};

export default UserTable;
