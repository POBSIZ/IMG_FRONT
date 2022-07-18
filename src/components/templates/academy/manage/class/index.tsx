import { useMethod } from 'Hooks';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import AcademyManageClassComponent from './academyManageClass.component';
import { pushToastAsync } from 'Actions/toastAction';

const AcademyManageClassTemplate: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const method = useMethod();

  const handleCreateClass = useCallback(async (_name) => {
    const res = await method.POST('/academy/class/create', { name: _name });
    dispatch(
      pushToastAsync.request({
        status: 'success',
        message: '반 생성에 성공하였습니다.',
      }),
    );
  }, []);

  const handleRemoveClass = useCallback(async (_clssId) => {
    const res = await method.DELETE(`/academy/class/delete/${_clssId}`);
    dispatch(
      pushToastAsync.request({
        status: 'success',
        message: '반 삭제에 성공하였습니다.',
      }),
    );
  }, []);

  const handleSetClass = useCallback(async (_classId, _userId) => {
    const res = await method.PATCH(`/auth/user/set/class`, {
      class_id: _classId,
      user_id: _userId,
    });
    dispatch(
      pushToastAsync.request({
        status: 'success',
        message: '반 배정에 성공하였습니다.',
      }),
    );
  }, []);

  return (
    <AcademyManageClassComponent
      handleCreateClass={handleCreateClass}
      handleRemoveClass={handleRemoveClass}
      handleSetClass={handleSetClass}
      classList={props.classList}
      userList={props.userList}
    />
  );
};

export default AcademyManageClassTemplate;
