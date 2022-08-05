import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  FormEvent,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { Post } from 'Utils';

import AdminManageAcademyComponent from './adminManageAcademy.component';

import { useMethod } from 'Hooks';
import { useRouter } from 'next/router';
import { pushToastAsync } from 'Actions/toastAction';

const AdminManageAcademyTemplate: React.FC<any> = (props, {}) => {
  const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();

  const handlePatch = useCallback(async (e) => {
    try {
      const _data = {
        academy_id: e.target.academy_id.value,
        name: e.target.name.value,
        address: e.target.address.value,
        address_detail: e.target.address_detail.value,
        zip: e.target.zip.value,
        phone: e.target.phone.value,
      };

      const res = await method.PATCH('/academy/patch', _data);

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

  return (
    <>
      <AdminManageAcademyComponent {...props} handlePatch={handlePatch} />
    </>
  );
};

export default AdminManageAcademyTemplate;
