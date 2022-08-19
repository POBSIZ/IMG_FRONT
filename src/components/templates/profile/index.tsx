import { pushToastAsync } from 'Actions/toastAction';
import { useMethod } from 'Hooks';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AuthProfileType, AuthReducerType } from 'Types/authTypes';
import ProfileComponent from './profile.component';
import { useValidate } from 'Hooks';

export interface QuizLogItemType {
  quiz_id: number | bigint;
  quizLog_id: number | bigint;
  userQuiz_id: number | bigint;
  date: string;
  title: string;
  score: number;
  probCount: number;
}

export interface ProfileTemplatePropsType {
  profile?: AuthProfileType;
  quizLog?: QuizLogItemType[];
  chainId?: string;
  requestChain: (e: any) => Promise<void>;
  responseChain: (_targetId: number, _status: boolean) => Promise<void>;
}

const ProfileTemplate: React.FC<Partial<ProfileTemplatePropsType>> = (
  props,
) => {
  const method = useMethod();
  const dispatch = useDispatch();
  const validate = useValidate();

  const requestChain = useCallback(async (e) => {
    e.preventDefault();
    try {
      const res = await method.PATCH('/auth/chain/request', {
        target: e.target.chain.value,
      });

      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '계정 연결 요청을 보냈습니다.',
        }),
      );
    } catch (error) {
      // console.log(error);
    }
  }, []);

  const responseChain = useCallback(async (_targetId, _status) => {
    try {
      const res = await method.PATCH('/auth/chain/response', {
        target: _targetId,
        status: _status,
      });

      _status
        ? dispatch(
            pushToastAsync.request({
              status: 'success',
              message: '계정 연결 요청을 승인했습니다.',
            }),
          )
        : dispatch(
            pushToastAsync.request({
              status: 'error',
              message: '계정 연결 요청을 거절했습니다.',
            }),
          );

      await validate();
    } catch (error) {
      // console.log(error);
    }
  }, []);

  return (
    <>
      <ProfileComponent
        profile={props.profile}
        quizLog={props.quizLog}
        chainId={props.chainId}
        requestChain={requestChain}
        responseChain={responseChain}
      />
    </>
  );
};

export default ProfileTemplate;
