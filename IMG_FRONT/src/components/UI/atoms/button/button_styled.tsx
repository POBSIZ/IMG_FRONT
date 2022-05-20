import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { ButtonPropsType } from '.';

const StyledButton = styled.button.attrs((props: ButtonPropsType) => ({
  disabled: props.isDisabled,
}))<ButtonPropsType>`
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
    `;
  }};
`;

export default StyledButton;
