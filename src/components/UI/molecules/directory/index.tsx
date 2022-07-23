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
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
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
  handleClick: (...args: any) => any;
}

const Directory: React.FC<DirectoryPropsType> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const icon = useMemo(() => (isOpen ? faMinus : faPlus), [isOpen]);
  const id = useMemo(() => nanoid(), [props.list]);
  const list = useMemo(() => props.list, [props.list]);
  const memoIsOpen = useMemo(() => isOpen, [icon]);

  useEffect(() => {
    setIsChecked(props.checked === undefined ? false : props.checked);
  }, [props.checked]);

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
                handleClick={props.handleClick}
                checked={isChecked}
                name={props.name}
              />
            );
          })}
        </List>
      ) : null}
    </StyledDirectory>
  );
};

export default React.memo(Directory);
