import React, { useEffect, useState, useRef, FormEvent } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import QuizAssignComponent from './quizAssign.component';

import { QuizAssignTempPropsType } from './quizAssign.types';
import { useMethod } from 'Hooks';
import { pushToastAsync } from 'Actions/toastAction';

const AssignTemplate: React.FC<QuizAssignTempPropsType> = (props) => {
  const method = useMethod();
  const dispatch = useDispatch();

  const handleSubmit = async (e, quizIdx: number) => {
    e.preventDefault();
    try {
      let userList: number[] = [];
      const users = e.target.user;
      if (users.length > 1) {
        for (let i = 0; i < users.length; i++) {
          userList.push(Number(users[i].value));
        }
      } else {
        userList.push(Number(users.value));
      }

      const res = await method.POST('/auth/userQuiz/create', {
        users: userList,
        quiz_id: quizIdx,
      });

      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '퀴즈 할당에 성공하였습니다.',
        }),
      );
    } catch (error) {
      // console.log(error);
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '퀴즈 할당에 실패하였습니다.',
        }),
      );
    }
  };

  const handleDelete = async (_uqid: string) => {
    try {
      const res = await method.DELETE(`/auth/userQuiz/delete/${_uqid}`);

      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '유저 퀴즈 삭제에 성공하였습니다.',
        }),
      );
    } catch (error) {
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '유저 퀴즈 삭제에 실패하였습니다.',
        }),
      );
    }
  };

  return (
    <>
      <QuizAssignComponent handleSubmit={handleSubmit} handleDelete={handleDelete} {...props} />
    </>
  );
};

export default React.memo(AssignTemplate);
