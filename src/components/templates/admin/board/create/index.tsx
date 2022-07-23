import { pushToastAsync } from 'Actions/toastAction';
import { useMethod } from 'Hooks';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  FormEventHandler,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import AdminBoardCreateComponent from './adminBoardCreate.component';

export interface AdminBoardCreatePropsType {
  handleSubmit: (_title: string, _desc: string) => void;
}

const AdminBoardCreateTemplate: React.FC<any> = (props) => {
  const method = useMethod();
  const dispatch = useDispatch();

  const handleSubmit = async (_title, _desc) => {
    try {
      const res = await method.POST('/board/create', {
        title: _title,
        desc: _desc,
      });

      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '게시판 생성에 성공했습니다.',
        }),
      );
    } catch (error) {}
  };

  return (
    <>
      <AdminBoardCreateComponent handleSubmit={handleSubmit} {...props} />
    </>
  );
};

export default AdminBoardCreateTemplate;
