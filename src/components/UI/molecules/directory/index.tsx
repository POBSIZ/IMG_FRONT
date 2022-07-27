import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {
  faPlus,
  faMinus,
  faMinusCircle,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledDirectory, List, Info } from './directory.styled';
import { Check } from 'Atoms';

import { nanoid } from 'nanoid';

export interface DirectoryPropsType {
  name: string;
  title?: string;
  data?: any;
  list?: any[];
  checked?: boolean;
  isOpen?: boolean;
  limit: number;
  handleClick: (...args: any) => any;
  handleDelete?: (...args: any) => any;
}

const Directory: React.FC<DirectoryPropsType> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const icon = useMemo(() => (isOpen ? faMinus : faPlus), [isOpen]);
  const id = useMemo(() => nanoid(), [props.list]);
  const list = useMemo(() => props.list, [props.list]);
  const memoIsOpen = useMemo(() => isOpen, [icon, isOpen]);

  useEffect(() => {
    setIsChecked(props.checked ?? false);
  }, [props.checked]);

  useEffect(() => {
    if (props.limit > 0) {
      setIsOpen(props.isOpen ?? false);
    }
    return () => {};
  }, []);

  return (
    <StyledDirectory>
      {props.title ? (
        <Info>
          <Check
            scale="M"
            id={id}
            value={props.title}
            name={props.name}
            checked={isChecked}
            onChange={(e) => {
              setIsChecked((state) => !state);
              props.handleClick(e, props.data);
            }}
          />
          {list && list?.length !== 0 ? (
            <FontAwesomeIcon
              icon={icon}
              onClick={() => {
                setIsOpen((state) => !state);
              }}
            />
          ) : null}
          <span>{props.title}</span>
          {props.data?.userQuiz_id && props.handleDelete ? (
            <FontAwesomeIcon
              className="delete"
              icon={faXmarkCircle}
              onClick={() => {
                (props.handleDelete ?? (() => {}))(props.data?.userQuiz_id);
              }}
            />
          ) : null}
        </Info>
      ) : null}

      {list && list?.length !== 0 ? (
        <List isOpen={memoIsOpen}>
          {list?.map((item) => {
            return (
              <Directory
                key={nanoid()}
                title={item.title}
                data={item.data}
                list={item.list}
                checked={isChecked}
                limit={props.limit - 1}
                isOpen={memoIsOpen}
                name={props.name}
                handleClick={props.handleClick}
                handleDelete={props.handleDelete}
              />
            );
          })}
        </List>
      ) : null}
    </StyledDirectory>
  );
};

export default React.memo(Directory);
