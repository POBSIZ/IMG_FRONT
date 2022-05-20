import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { SelectPropsType } from '.';

const StyledSelect = styled.select.attrs((props) => ({
  defaultValue: 'none',
  name: props.name || '',
  disabled: props.disabled,
  required: props.required || false,
}))<SelectPropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_success = Theme.palette.$color_success;
    const $color_failure = Theme.palette.$color_failure;
    const $color_warning = Theme.palette.$color_warning;

    const borderColor =
      props.isFail === true
        ? $color_failure
        : props.isSuccess === true
        ? $color_success
        : props.isWarning === true
        ? $color_warning
        : $color_base_line;

    const bgColor = props.disabled === true ? $color_base_line : 'transparent';

    return css`
      color: ${$color_base_black};
      background-color: ${bgColor};
      width: 100%;
      height: 45px;
      font-size: 16px;
      font-weight: 400;
      outline: none;
      will-change: border;
      text-indent: 6px;
      border: 1px solid ${borderColor};

      border-radius: 0px;

      &:focus {
        border: 1px solid ${$color_key_color};
        color: ${$color_base_black};
      }

      &:disabled {
        border: 1px solid rgb(30, 30, 30, 50%);
        background-color: rgb(30, 30, 30, 5%);
      }
    `;
  }};
`;

export default StyledSelect;
