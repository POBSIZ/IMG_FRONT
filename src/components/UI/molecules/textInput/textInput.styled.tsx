import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledTextInput = styled.div.attrs((props) => ({}))<any>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_info = Theme.font.$font_body_info;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;

    return css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-flow: column;
      justify-content: flex-start;
      /* gap: 6px; */
      /* align-items: center; */

      span {
        display: inline-block;
        margin-bottom: 6px;
        ${$font_body_info};
        /* color: ${$color_base_gray}; */
      }
    `;
  }};
`;

export default StyledTextInput;
