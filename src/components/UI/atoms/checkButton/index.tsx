import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

import StyledCheckButton from './checkButton.styled';

export interface CheckButtonPropsType
  extends Partial<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  > {
  text: string;
  id: string;
}

const CheckButton: React.FC<CheckButtonPropsType> = (props) => {
  return (
    <>
      <StyledCheckButton>
        <input type="checkbox" {...props} id={'CheckButton' + props.id} />
        <label htmlFor={'CheckButton' + props.id}>{props.text}</label>
      </StyledCheckButton>
    </>
  );
};

export default CheckButton;
