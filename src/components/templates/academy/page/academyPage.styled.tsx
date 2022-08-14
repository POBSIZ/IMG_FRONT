import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button, Input, Title } from 'Atoms';
import { Content } from 'Layouts';
import { StyledMove } from 'Atoms/move';

export const BoardTabWrapper = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;

    const $font_body_info = Theme.font.$font_body_info;
    const $font_title_big = Theme.font.$font_title_big;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;
      gap: 20px;

      ${Content} {
        width: 50%;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        flex-flow: column;

        ${Content} {
          width: 100%;
        }
      }
    `;
  }};
`;

const StyledAcademyPage = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;

    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_base = Theme.font.$font_body_base;
    const $font_body_info = Theme.font.$font_body_info;

    return css`
      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

export default StyledAcademyPage;
