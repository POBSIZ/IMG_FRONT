import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Check } from 'Atoms';
import { QuizItem } from 'Templates/quiz/index/quiz.styled';

const StyledVocaList = styled.ul.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_key_color = Theme.palette.$color_key_color;

    const $color_success = Theme.palette.$color_success;
    const $color_failure = Theme.palette.$color_failure;

    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_info = Theme.font.$font_body_info;
    const $font_subtitle = Theme.font.$font_subtitle;
    const $font_title_big = Theme.font.$font_title_big;
    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_title_regular = Theme.font.$font_title_regular;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $is_try_color = $color_key_color;
    const $is_disabled_font = $color_base_black;
    const $is_disabled_bg = $is_try_color;

    return css`
      margin: 0;
      padding: 0;
      list-style: none;

      display: flex;
      flex-flow: column;
      gap: 20px;

      ${QuizItem} {
        border-color: ${$color_key_color};

        ${Check} {
          align-self: flex-end;
        }

        div {
          display: block;
          width: 100%;
          text-decoration: none;
          display: flex;
          flex-flow: column;
          gap: 6px;

          h3 {
            ${$font_title_regular};
            margin: 0;
            color: ${$is_disabled_font};
          }

          p {
            color: ${$color_base_gray};
            ${$font_body_info};
            margin: 0;
          }
        }
      }
    `;
  }};
`;

export default StyledVocaList;
