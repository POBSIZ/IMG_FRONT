import React, { useCallback, useState } from 'react';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import QuizPlayComponent from './quizPlay.component';

import {
  QuizPlayTemplatePropsType,
  QuizPlayComponentPropsType,
} from './quizPlay.types';

import { BlockChangePage } from 'Hoc';
import { saveQuiz } from 'Actions/quizAction';
import { AnswerListItem } from './quizPlay.types';

import { useRouter } from 'next/router';
import { Patch } from 'Utils';
import { useMethod, useDebounce } from 'Hooks';
import { Loader } from 'Bases';

const QuizPlayTemplate: React.FC<QuizPlayTemplatePropsType> = (props) => {
  const debounce = useDebounce();
  const method = useMethod();
  const dispatch = useDispatch();
  const router = useRouter();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [isSend, setIsSend] = useState<boolean>(false);

  const handleSave = async (_list: AnswerListItem[]) => {
    setIsSend(true);

    let corrCount = 0;
    _list.forEach((item) => {
      if (item.correctWordId === item.answer[0]) {
        corrCount++;
      }
    });

    dispatch(
      saveQuiz({
        title: props.quizTitle,
        id: props.quizId,
        list: _list,
        corrCount: corrCount,
      }),
    );

    const data = {
      userQuiz_id: props.userQuizId,
      quiz_id: props.quizId,
      best_solve: corrCount,
      answerList: _list,
    };

    const res = await method.PATCH('/auth/userQuiz/update', data);
    router.push('/quiz/result');
  };

  return (
    <>
      {isSend ? (
        <Loader />
      ) : (
        <QuizPlayComponent {...props} router={router} handleSave={handleSave} />
      )}
    </>
  );
};

export default QuizPlayTemplate;
