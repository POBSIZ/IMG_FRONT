import React, { useEffect, useState, useRef, memo } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import SelectListComponent from './selectList.component';

export interface SelectListType {
  idx: number;
  title: string;
  subtitle: string | number;
}

export interface SelectListPropsType extends Partial<HTMLInputElement> {
  name: string;
  type: 'radio' | 'checkbox' | 'button';
  selectList: SelectListType[];
  boxHeight: number;
  handleClick: (
    _idx: number,
    _title: string,
    _subtitle: string | number,
  ) => any | any;
}

const SelectList: React.FC<SelectListPropsType> = (props, {}) => {
  return (
    <>
      <SelectListComponent {...props} />
    </>
  );
};

export default memo(SelectList);
