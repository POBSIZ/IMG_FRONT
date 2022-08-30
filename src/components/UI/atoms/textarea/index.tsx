import React, { useEffect, useState, useRef, RefObject } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

export interface TextareaPropsType
  extends Partial<React.FormHTMLAttributes<HTMLFormElement>> {
  isFail?: boolean;
  onChange?: any;
}

const Textarea = styled.textarea.attrs((props) => ({
  placeholder: props.placeholder || '입력해주세요.',
  name: props.name || '',
  required: props.required || false,
  disabled: props.disabled || false,
  value: props.value || undefined,
}))<TextareaPropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_base = Theme.font.$font_body_base;

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
      height: 100%;
      padding: 10px;

      ${$font_body_base};

      outline: none;
      border: 1px solid ${borderColor};
      border-radius: 0;

      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      will-change: border;

      &::placeholder {
        color: ${$color_base_line};
        ${$font_body_base};
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

export default Textarea;
