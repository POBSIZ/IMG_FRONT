import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  SetStateAction,
  Dispatch,
  memo,
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
import { useFirstRender } from 'Hooks';

export interface DirectoryPropsType {
  name: string;
  title?: string;
  data?: any;
  list?: any[];
  checked?: boolean;
  isOpen?: boolean;
  handleClick: (...args: any) => any;
  handleDelete?: (...args: any) => any;
}

const Directory: React.FC<DirectoryPropsType> = memo((props) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const memoIsOpen = useMemo(() => isOpen, [isOpen]);
  const icon = useMemo(() => (memoIsOpen ? faMinus : faPlus), [memoIsOpen]);

  const list = useMemo(() => {
    return (
      <List isOpen={memoIsOpen}>
        {props.list?.map((item) => {
          return (
            <Directory
              key={nanoid()}
              title={item?.title}
              data={item?.data}
              list={item?.list}
              checked={isChecked}
              name={props?.name}
              handleClick={props.handleClick}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </List>
    );
  }, [isOpen, props.list]);

  const handleChange = useCallback(
    (e) => {
      setIsChecked((state) => !state);
      props.handleClick(e, props.data);
    },
    [isChecked],
  );

  const handleDelete = useCallback(() => {
    (props.handleDelete ?? (() => {}))(props.data?.userQuiz_id);
  }, [props.handleDelete]);

  useEffect(() => {
    setIsChecked(props.checked ?? false);
    return () => {};
  }, [props.checked]);

  return (
    <StyledDirectory>
      {props?.title && !isDelete ? (
        <Info>
          <Check
            type="checkbox"
            scale="M"
            id={nanoid()}
            value={props?.title}
            name={props?.name}
            checked={isChecked}
            onChange={handleChange}
          />

          {props.list && props.list?.length !== 0 && !isDelete ? (
            <FontAwesomeIcon
              icon={icon}
              onClick={() => {
                setIsOpen((state) => !state);
              }}
            />
          ) : null}

          <span>{props?.title}</span>

          {props.data?.userQuiz_id && props.handleDelete ? (
            <FontAwesomeIcon
              className="delete"
              icon={faXmarkCircle}
              onClick={handleDelete}
            />
          ) : null}
        </Info>
      ) : null}

      {props.list && props.list?.length !== 0 ? list : null}
    </StyledDirectory>
  );
});

export default Directory;
