import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import UserTableComponent from './userTable.component';

const UserTable: React.FC<any> = (props) => {
  return (
    <>
      <UserTableComponent {...props} />
    </>
  );
};

export default UserTable;
