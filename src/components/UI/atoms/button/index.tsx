import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

export interface ButtonPropsType extends Partial<ReactElement> {
  children: any;
  backColor: 'primary' | 'gradient' | 'black' | 'red' | 'green';
  isDisabled?: boolean;
  isLoad?: boolean;
}

const Button = styled.button.attrs((props: ButtonPropsType) => ({
  disabled: props.isDisabled,
}))<ButtonPropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;
    const $color_success = Theme.palette.$color_success;

    const bgColor =
      props.backColor === 'primary'
        ? `background-color: ${$color_key_color};`
        : props.backColor === 'black'
        ? `background-color: ${$color_base_black};`
        : props.backColor === 'red'
        ? `background-color: ${$color_failure};`
        : props.backColor === 'green'
        ? `background-color: ${$color_success};`
        : `background-color: ${$color_base_black};`;

    return css`
      background: ${$color_base_black};
      ${bgColor};
      background-repeat: no-repeat;
      color: #fff;
      width: 100%;
      height: 45px;
      border: none;
      padding: 5px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition: all 0.3s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:disabled {
        cursor: not-allowed;
        background: ${$color_base_line};
      }

      ${props.isLoad
        ? `
          &::after {
            display: inline-block;
            content: '' '';
            border: 2px solid #fff;
            border-radius: 100%;
            margin: 0 6px;
            width: 16px;
            height: 16px;
            animation: circle 2s ease-in-out infinite;
          }
        `
        : ``}

      @keyframes circle {
        0% {
          transform: scale(0%);
        }
        50% {
          transform: scale(100%);
        }
        100% {
          transform: scale(0%);
        }
      }
    `;
  }};
`;

export default Button;
