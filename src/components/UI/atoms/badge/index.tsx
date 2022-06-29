import React from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

export interface BadgePropsType {
  backColor: 'primary' | 'black' | 'red';
}

const Badge = styled.li.attrs((props) => ({}))<BadgePropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;

    const bgColor =
      props.backColor === 'primary'
        ? `background-color: ${$color_key_color};`
        : props.backColor === 'black'
        ? `background-color: ${$color_base_black};`
        : props.backColor === 'red'
        ? `background-color: ${$color_failure};`
        : `background-color: ${$color_base_black};`;

    return css`
      /* background: ${$color_base_black}; */
      ${bgColor};
      background-repeat: no-repeat;
      color: #fff;
      width: fit-content;
      border-radius: 32px;
      padding: 12px;
      font-size: 1em;
      font-weight: 500;
      cursor: default;
    `;
  }};
`;

export default Badge;
