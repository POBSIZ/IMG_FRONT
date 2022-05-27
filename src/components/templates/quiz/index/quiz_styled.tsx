import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

export const QuizItem = styled.div.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;

    const $color_success = Theme.palette.$color_success;
    const $color_failure = Theme.palette.$color_failure;

    const $font_body_head = Theme.font.$font_body_head;
    const $font_subtitle = Theme.font.$font_subtitle;
    const $font_title_big = Theme.font.$font_title_big;
    const $font_title_regular = Theme.font.$font_title_regular;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $isTryColor = props.isTry ? $color_success : $color_failure;

    return css`
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;

      padding: 20px;
      margin: 8px;

      width: 260px;
      height: fit-content;

      border-radius: 32px;
      box-shadow: -6px 6px 0px 2px ${$isTryColor};

      div {
        display: flex;
        flex-flow: column;
        gap: 6px;

        h3 {
          margin: 0;
          ${$font_title_regular};
        }

        span {
          ${$font_subtitle};
        }

        p {
          margin: 0;
          ${$font_body_head};
          color: ${$isTryColor};
        }
      }

      svg {
        font-size: 30px;
        color: ${$isTryColor};
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        width: 100%;
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
      padding: 60px 5% 5% 5%;

      h1 {
        ${$font_title_big};
        padding: 10px 0;
        border-bottom: 1px solid ${$color_base_black};
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
      }
    `;
  }}
`;

export default StyledQuiz;
