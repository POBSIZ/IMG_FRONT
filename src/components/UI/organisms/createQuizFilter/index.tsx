import { useMethod } from 'Hooks';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { SetStateType } from 'Types';

import CreateQuizFilterComponent from './createQuizFilter.component';

export interface quizOptionType {
  scope: [number, number];
  word_count: number;
  type: 'IN_PREV' | 'EX_PREV' | 'STATIC';
}

export interface FilterBoxPropsType {
  maxWords: number;
  setOption: (
    scope: [number, number] | null,
    word_count: number | null,
    type: 'IN_PREV' | 'EX_PREV' | 'STATIC' | null,
  ) => void;
}

const CreateQuizFilter: React.FC<FilterBoxPropsType> = (props) => {
  return (
    <>
      <CreateQuizFilterComponent {...props} />
    </>
  );
};

export default CreateQuizFilter;
