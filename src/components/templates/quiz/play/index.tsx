import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import QuizPlayComponent from './quizPlay.component';

import {
  QuizPlayTemplatePropsType,
  QuizPlayComponentPropsType,
} from './quizPlay.types';

import { BlockChangePage } from 'Hoc';
import { saveQuiz } from 'Actions/quizAction';
import { AnswerListItem } from './quizPlay.types';

const QuizPlayTemplate: React.FC<QuizPlayTemplatePropsType> = (props) => {
  const dispatch = useDispatch();

  const handleSave = useCallback((_list: AnswerListItem[]) => {
    dispatch(
      saveQuiz({
        title: props.quizTitle,
        id: props.quizId,
        list: _list,
      }),
    );
  }, []);

  return (
    <>
      {/* <BlockChangePage
        exitMsg="중간 저장 하시겠습니까?"
        exitFunc={() => {}}
        condFunc={() => {}}
      > */}
      <QuizPlayComponent {...props} handleSave={handleSave} />
      {/* </BlockChangePage> */}
    </>
  );
};

export default QuizPlayTemplate;
