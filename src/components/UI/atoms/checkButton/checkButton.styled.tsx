import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledCheckButton = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_LightGray = Theme.palette.$color_base_LightGray;

    return css`
      width: fit-content;

      * {
        cursor: pointer;
      }

      input {
        display: none;
        appearance: none;

        &:checked ~ label {
          background-color: ${$color_key_color};
          color: ${$color_base_white};
        }
      }

      label {
        display: inline-block;
        padding: 10px;
        color: ${$color_base_black};
        background-color: ${$color_base_LightGray};
      }
    `;
  }};
`;

export default StyledCheckButton;
