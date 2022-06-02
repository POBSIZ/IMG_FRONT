import React, { useCallback } from 'react';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import QuizResultComponent from './quizResult.component';

import { QuizResultTemplatePropsType } from './quizResult.types';

import { BlockChangePage } from 'Hoc';

const QuizResultTemplate: React.FC<QuizResultTemplatePropsType> = (props) => {
  const quizResultState = useSelector(
    (state: RootStateOrAny) => state.quizReducer,
  );
  const dispatch = useDispatch();

  return (
    <>
      <QuizResultComponent result={quizResultState} {...props} />
    </>
  );
};

export default QuizResultTemplate;
