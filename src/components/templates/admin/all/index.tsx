import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import AdminManageAllComponent from './adminManageAll.component';

const AdminManageAllTemplate: React.FC<any> = (props) => {
  return (
    <>
      <AdminManageAllComponent {...props} />
    </>
  );
};

export default AdminManageAllTemplate;
