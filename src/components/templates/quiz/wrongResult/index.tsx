import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import QuizResultComponent from './quizResult.component';

import { QuizResultTemplatePropsType } from './quizResult.types';

import { BlockChangePage } from 'Hoc';
import { Loader } from 'Bases';
import { QuizResultType } from 'Types/quizTypes';

const QuizWrongResultTemplate: React.FC<QuizResultTemplatePropsType> = (
  props,
) => {
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const quizResultState = useSelector(
    (state: RootStateOrAny) => state.quizReducer,
  );

  // Result List Sort
  const result: QuizResultType = useMemo(() => {
    const _list = props.result.list.filter(
      (item) => item.answer[0] !== item.correctWordId,
    );

    return {
      id: props.result.id,
      title: props.result.title,
      list: isWrong ? (_list.length < 1 ? [] : _list) : props.result.list,
      corrCount: props.result.corrCount,
    };
  }, [isWrong, quizResultState]);

  return (
    <QuizResultComponent
      result={result}
      isWrong={isWrong}
      setIsWrong={() => {
        setIsWrong((state) => !state);
      }}
    />
  );
};

export default QuizWrongResultTemplate;
