import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import QuizResultComponent from './quizResult.component';

import { QuizResultTemplatePropsType } from './quizResult.types';

import { BlockChangePage } from 'Hoc';
import { Loader } from 'Bases';

const QuizResultTemplate: React.FC<QuizResultTemplatePropsType> = (props) => {
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const quizResultState = useSelector(
    (state: RootStateOrAny) => state.quizReducer,
  );

  // Result List Sort
  const resultList = useMemo(() => {
    const _list = quizResultState?.result?.list.filter(
      (item) => item.answer[0] !== item.correctWordId,
    );
    // console.log(_list);
    return isWrong
      ? _list.length < 1
        ? []
        : _list
      : quizResultState?.result?.list;
  }, [isWrong, quizResultState]);

  return (
    <QuizResultComponent
      quizResultState={quizResultState}
      resultList={resultList}
      isWrong={isWrong}
      setIsWrong={() => {
        setIsWrong((state) => !state);
      }}
      {...props}
    />
  );
};

export default QuizResultTemplate;
