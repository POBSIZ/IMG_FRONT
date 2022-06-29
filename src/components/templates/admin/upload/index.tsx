import React, { useEffect, useState, useRef, useCallback } from 'react';
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

const AdminUploadTemplate: React.FC<AdminUploadPropsType> = (props) => {
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  const [resList, setResList] = useState();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    e.persist();

    let formData = new FormData();
    formData.append('file', e.target.file.files[0]);

    const post = await Post('/quiz/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${authState.token}`,
        // credentials: 'include',
        mode: 'cors',
      },
      // withCredentials: true,
    });

    setResList(post.data);
  }, []);

  return (
    <>
      <AdminUploadComponent
        handleSubmit={handleSubmit}
        resList={resList}
        {...props}
      />
    </>
  );
};

export default AdminUploadTemplate;
