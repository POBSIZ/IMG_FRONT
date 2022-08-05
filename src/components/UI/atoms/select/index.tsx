import React, { useEffect, useState, useRef, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';
import { nanoid } from 'nanoid';

export interface SelectPropsType {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  optionList: string[] | number[];
  isFail?: boolean;
}

export const Select = styled.select.attrs((props) => ({}))<
  Partial<SelectPropsType>
>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_disabled = Theme.palette.$color_disabled;
    const $color_key_color = Theme.palette.$color_key_color;
    // const bgColor = props.disabled === true ? $color_base_line : 'transparent';
    const bgColor =
      props.disabled === true ? $color_base_line : $color_base_white;
    const borderColor =
      props.isFail === true ? Theme.palette.$color_failure : $color_base_line;
    return css`
      color: ${$color_base_black};
      width: 100%;
      height: 45px;
      padding: 0px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      border: 1px solid ${borderColor};
      border-radius: 0;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      background: url('/down-arrow.svg') no-repeat 97% 50%/15px auto;
      background-color: ${bgColor};

      will-change: border;

      &::placeholder {
        color: ${$color_base_line};
      }

      &:focus {
        border: 1px solid ${$color_key_color};
      }

      &:disabled {
        cursor: not-allowed;
        background-color: ${$color_disabled};
      }
    `;
  }};
`;

export default Select;
