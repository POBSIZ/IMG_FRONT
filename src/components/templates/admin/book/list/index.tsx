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

import AdminBookListComponent from './adminBookList.component';
import { AdminBookListPropsType } from './adminBookList.types';

import axios from 'axios';
import { Post } from 'Utils';
import { InputFiles } from 'typescript';
import { pushToastAsync } from 'Actions/toastAction';

const AdminBookListTemplate: React.FC<AdminBookListPropsType> = (props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  const [bookId, setBookId] = useState(NaN);

  const deleteBook = useCallback(async () => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER}/quiz/book/delete/${bookId}`,
      {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      },
    );

    dispatch(
      pushToastAsync.request({
        status: 'error',
        message: '책을 삭제 했습니다.',
      }),
    );
  }, [bookId]);

  const handleBook = useCallback((_idx, _title, _subtitle) => {
    setBookId(_idx);
  }, []);

  return (
    <>
      <AdminBookListComponent
        handleBook={handleBook}
        deleteBook={deleteBook}
        {...props}
      />
    </>
  );
};

export default AdminBookListTemplate;
