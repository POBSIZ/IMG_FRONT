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
  idx: number;
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
    _idx: number,
    _title: string,
    _subtitle: string | number,
    _dataObj: any,
  ) => any | any;
}

const SelectList: React.FC<SelectListPropsType> = (props, {}) => {
  const handleClick = useCallback((_item) => {
    props.handleClick(_item.idx, _item.title, _item.subtitle, {
      ..._item,
    });
  }, []);

  const list = useMemo(() => {
    const _list = props.selectList?.map((item, i) => {
      return (
        <ListItem key={nanoid()}>
          <Input
            type={props.type}
            id={props.name + i}
            name={props.name}
            onChange={(e) => {
              handleClick(item);
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
