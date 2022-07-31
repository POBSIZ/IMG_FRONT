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

import FilterBoxComponent from './filterBox.component';

export interface FilterBoxPropsType {
  list: any[];
  getList: SetStateType;
  depth: 1 | 2 | 3;
}

const FilterBox: React.FC<FilterBoxPropsType> = (props) => {
  return (
    <>
      <FilterBoxComponent {...props} />
    </>
  );
};

export default FilterBox;
