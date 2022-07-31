import React, {
  useEffect,
  useState,
  useRef,
  memo,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { nanoid } from 'nanoid';

import StyledCustomList, { CustomListItem } from './customList.styled';

import { Input, Check, Button } from 'Atoms';

export type CustomTypesItemType = string;

export type CustomItemType = {
  [key: string]: string;
};

export interface CustomListItemPropsType {
  type: 'checkbox' | 'radio';
  name: string;
  valueKey: string;
  i: number;
  item: CustomItemType;
  isAllCheck: boolean;
  typeList: Array<string>;
}

export interface CustomListPropsType {
  type: 'checkbox' | 'radio';
  name: string;
  valueKey: string;
  dataList: Array<any>;
  typeList: Array<string>;
}

const CustomListItemComponent: React.FC<CustomListItemPropsType> = (props) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const dataFill = useMemo(() => {
    return props.typeList?.map((_type) => {
      return <span key={nanoid()}>{props.item[_type]}</span>;
    });
  }, [props.typeList, props.item]);

  useEffect(() => {
    setIsCheck(props.isAllCheck);
  }, [props.isAllCheck]);

  return (
    <CustomListItem htmlFor={props.i + ''}>
      <Check
        type={props.type}
        value={props.item[props.valueKey]}
        scale="L"
        id={props.i + ''}
        name={props.name}
        checked={isCheck}
        onChange={() => {
          setIsCheck((state) => !state);
        }}
      />
      {dataFill}
    </CustomListItem>
  );
};

const CustomList: React.FC<CustomListPropsType> = (props) => {
  const [isAllCheck, setIsAllCheck] = useState<boolean>(false);

  const typeList = useMemo(() => {
    return props.typeList?.map((item) => <span key={nanoid()}>{item}</span>);
  }, [props.typeList]);

  const dataList = useMemo(() => {
    return props.dataList?.map((item, i) => {
      return (
        <CustomListItemComponent
          key={nanoid()}
          valueKey={props.valueKey}
          i={i}
          item={item}
          type={props.type}
          name={props.name}
          isAllCheck={isAllCheck}
          typeList={props.typeList}
        />
      );
    });
  }, [props.dataList, isAllCheck]);

  const handleAll = useCallback((e) => {
    setIsAllCheck((state) => !state);
  }, []);

  return (
    <StyledCustomList>
      <CustomListItem>
        <Check
          scale="L"
          checked={isAllCheck}
          onClick={props.type === 'radio' ? () => {} : handleAll}
          type={props.type}
        />
        {typeList}
      </CustomListItem>
      <section>{dataList}</section>
    </StyledCustomList>
  );
};

export default React.memo(CustomList);
