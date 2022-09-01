import React, { useEffect, useState, useRef, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

export interface InputPropsType
  extends Partial<React.FormHTMLAttributes<HTMLFormElement>> {
  type:
    | 'text'
    | 'username'
    | 'password'
    | 'current-password'
    | 'new-password'
    | 'email'
    | 'number'
    | 'file'
    | string;
  isFail?: boolean;
  onChange?: any;
}

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder ?? 'input',
  type: props.type ?? 'text',
  name: props.name ?? '',
  required: props.required ?? false,
  disabled: props.disabled ?? false,
  autocomplete: props.type === 'password' ? 'current-password' : 'on',
}))<InputPropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_disabled = Theme.palette.$color_disabled;
    const $color_key_color = Theme.palette.$color_key_color;

    const bgColor =
      props.disabled === true ? $color_base_LightGray : $color_base_white;

    const borderColor =
      props.isFail === true ? Theme.palette.$color_failure : $color_base_line;
    return css`
      background-color: ${$color_base_white};
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

      will-change: border;

      &::placeholder {
        color: ${$color_base_line};
      }

      &:focus {
        border: 1px solid ${$color_key_color};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${$color_base_line};
        background-color: ${$color_base_LightGray};
      }
    `;
  }};
`;

export default Input;
