import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button, Input, Title } from 'Atoms';
import { Content } from 'Layouts';
import { StyledMove } from 'Atoms/move';

const StyledAcademy = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;

    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_body_base = Theme.font.$font_body_base;
    const $font_body_info = Theme.font.$font_body_info;

    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      /* gap: 10px; */

      ${StyledMove} {
        margin: 5px 0;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

export default StyledAcademy;
