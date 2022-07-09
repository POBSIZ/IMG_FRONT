import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  FormEventHandler,
  FormEvent,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import AdminUploadComponent from './adminUpload.component';
import { AdminUploadPropsType } from './adminUpload.types';

import axios from 'axios';
import { Post } from 'Utils';
import { InputFiles } from 'typescript';
import { pushToastAsync } from 'Actions/toastAction';

import { useMethod } from 'Hooks';

const AdminUploadTemplate: React.FC<AdminUploadPropsType> = (props) => {
  const method = useMethod();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  const [resList, setResList] = useState([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    e.persist();

    setIsLoad(true);

    let formData = new FormData();
    formData.append('file', e.target.file.files[0]);
    formData.append('name', encodeURIComponent(e.target.file.files[0].name));

    try {
      const post = await Post('/quiz/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authState.token}`,
          // credentials: 'include',
          mode: 'cors',
        },
        // withCredentials: true,
      });
      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '책 생성에 성공하였습니다.',
        }),
      );
      // console.log(post);
      setIsLoad(false);
    } catch (error) {
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '책 생성에 실패하였습니다.',
        }),
      );
    }

    // setResList(post.data);
  }, []);

  return (
    <>
      <AdminUploadComponent
        handleSubmit={handleSubmit}
        resList={resList}
        isLoad={isLoad}
        {...props}
      />
    </>
  );
};

export default AdminUploadTemplate;
