import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

interface CheckPropsType extends Partial<HTMLInputElement> {
  type: 'radio' | 'checkbox';
  scale: 'S' | 'M' | 'L';
}

export const Check = styled.input.attrs((props) => ({
  type: 'checkbox',
}))<CheckPropsType>`
  ${(props) => {
    const sizeTable = {
      S: {
        size: '16px',
      },
      M: {
        size: '20px',
      },
      L: {
        size: '24px',
      },
    };

    const Theme: GlobalStyleType = props.theme;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;

    return css`
      cursor: pointer;
      margin: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      appearance: none;
      width: ${sizeTable[props.scale]?.size};
      height: ${sizeTable[props.scale]?.size};
      border: 2px solid ${$color_key_color};

      &:checked {
        &:after {
          content: '';
          display: block;
          width: calc(${sizeTable[props.scale]?.size} / 2);
          height: calc(${sizeTable[props.scale]?.size} / 2);
          background-color: ${$color_key_color};
        }
      }
    `;
  }};
`;

export default Check;
