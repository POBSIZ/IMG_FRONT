import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import { Title } from 'Atoms';

export const QuizItem = styled.div.attrs((props) => {})`
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

    const $is_try_color = props.isTry ? $color_success : $color_failure;
    const $is_disabled_font = props.disabled
      ? $color_base_gray
      : $color_base_black;
    const $is_disabled_bg = props.disabled ? $color_base_line : $is_try_color;

    return css`
      cursor: pointer;
      display: flex;
      /* flex-flow: row; */
      flex-flow: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;

      padding: 20px;

      width: 100%;
      height: fit-content;

      /* border-radius: 32px; */
      border: 4px solid ${$is_disabled_bg};

      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

      a {
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

        div {
          display: flex;
          flex-flow: row;
          gap: 4px;

          span {
            ${$font_subtitle};
            color: ${$is_disabled_font};
          }

          span:last-child {
            color: ${$is_disabled_bg};
          }
        }
      }

      .opt {
        width: 100%;

        a {
          margin-bottom: 4px;
          display: inline-block;
          /* ${$font_subtitle}; */
          text-decoration: none;
          color: ${$is_disabled_font};
        }

        p {
          margin: 0;
          align-self: flex-end;
          text-align: end;
          ${$font_title_regular} !important;
          color: ${$is_disabled_bg};
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }}
`;

const StyledQuiz = styled.div.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;

    const $font_title_big = Theme.font.$font_title_big;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      min-height: 100vh;

      ${Title} {
        margin: 20px 0;
      }

      ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 30px;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        padding: 0 5%;
      }
    `;
  }}
`;

export default StyledQuiz;
