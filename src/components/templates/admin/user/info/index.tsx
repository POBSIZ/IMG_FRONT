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
import { useMethod } from 'Hooks';
import { useRouter } from 'next/router';
import { pushToastAsync } from 'Actions/toastAction';
import Apis from 'api';

const UserInfoTemplate: React.FC<UserInfoPropsType> = (props, {}) => {
  const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();
  const userApi = Apis.UserApi();

  const handlePatch = useCallback(async (e) => {
    try {
      const _data = {
        user_id: e.target.user_id.value,
        name: e.target.name.value,
        nickname: e.target.nickname.value,
        academy_id: e.target.academy_id.value,
        school: e.target.school.value,
        grade: e.target.grade.value,
        phone: e.target.phone.value,
      };

      const res = await method.PATCH('/auth/user/patch', _data);

      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '저장하였습니다.',
        }),
      );
    } catch (error) {
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '실패하였습니다.',
        }),
      );
    }
  }, []);

  const handleDelete = async (_uid) => {
    try {
      await userApi.remove.user(_uid);
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '삭제하였습니다.',
        }),
      );
      router.back();
    } catch (error: any) {
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '실패하였습니다.',
        }),
      );
      throw new Error(error);
    }
  };

  return (
    <>
      <UserInfoComponent
        {...props}
        handlePatch={handlePatch}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default UserInfoTemplate;
