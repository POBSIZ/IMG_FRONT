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

export interface FilterBoxPropsType {
  // getList: SetStateType;
  maxWords: number;
}

const CreateQuizFilter: React.FC<FilterBoxPropsType> = (props) => {
  return (
    <>
      <CreateQuizFilterComponent {...props} />
    </>
  );
};

export default CreateQuizFilter;
