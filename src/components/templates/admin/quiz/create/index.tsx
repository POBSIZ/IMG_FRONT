import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  FormEvent,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import QuizCreateComponent from './quizCreate.component';
import {
  QuizCreatePropsType,
  BookWordListType,
  QuizCreateResDataType,
} from './quizCreate.types';
import { Post } from 'Utils';
import { pushToastAsync } from 'Actions/toastAction';

import { useMethod } from 'Hooks';

// type QuizCreateTemplatesPropsType = Partial<QuizCreatePropsType>;

const QuizCreateTemplate: React.FC<QuizCreatePropsType> = (props, {}) => {
  const method = useMethod();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);

  const handleSubmit = useCallback(
    async (e: FormEvent, _data: Partial<QuizCreateResDataType>) => {
      e.preventDefault();
      e.persist();

      const data: Partial<QuizCreateResDataType> = {
        title: e.target[props.titleName].value,
        time: e.target[props.timeName].value,
        book_id: _data.book_id,
        scope: _data.scope,
        word_count: _data.word_count,
        type: _data.type,
        max_options: 4,
      };

      try {
        const res = await method.POST('/quiz/create', data);
        // console.log(res);
        dispatch(
          pushToastAsync.request({
            status: 'success',
            message: '퀴즈 생성에 성공하였습니다.',
          }),
        );
      } catch (e) {
        // console.log(e);
        dispatch(
          pushToastAsync.request({
            status: 'error',
            message: '퀴즈 생성에 실패하였습니다.',
          }),
        );
      }
    },
    [],
  );

  return (
    <>
      <QuizCreateComponent {...props} handleSubmit={handleSubmit} />
    </>
  );
};

export default QuizCreateTemplate;
