import React, {
  useEffect,
  useState,
  useRef,
  memo,
  useMemo,
  useCallback,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { nanoid } from 'nanoid';

import StyledSelectList, { ListItem } from './selectList.styled';

import { Input } from 'Atoms';

export interface SelectListType {
  idx: string;
  title: string;
  subtitle: string | number;
}

export interface SelectListPropsType extends Partial<HTMLInputElement> {
  name: string;
  type: 'radio' | 'checkbox' | 'button';
  // selectList: SelectListType[];
  selectList: any;
  boxHeight: number | string;
  handleClick: (
    _idx: string,
    _title: string,
    _subtitle: string | number,
    _dataObj: any,
  ) => any | any;
}

const SelectList: React.FC<SelectListPropsType> = (props, {}) => {
  // console.log('render');
  // console.log(props);

  const list = useMemo(() => {
    const _list = props.selectList?.map((item, i) => {
      return (
        <ListItem key={nanoid()}>
          <Input
            type={props.type}
            id={props.name + i}
            name={props.name}
            onChange={(e) => {
              props.handleClick(item.idx, item.title, item.subtitle, {
                ...item,
              });
            }}
          />
          <label htmlFor={props.name + i}>
            {item.title} <span>/ {item.subtitle}</span>
          </label>
        </ListItem>
      );
    });
    return _list;
  }, [props.selectList]);

  return (
    <StyledSelectList boxHeight={props.boxHeight}>{list}</StyledSelectList>
  );
};

export default React.memo(SelectList);
