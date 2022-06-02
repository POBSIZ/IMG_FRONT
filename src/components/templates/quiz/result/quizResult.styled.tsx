import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

export const StyledAnswerListHead = styled.div.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_big = Theme.font.$font_title_big;
    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_subtitle = Theme.font.$font_subtitle;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;

    const $color_key_color = Theme.palette.$color_key_color;

    const $color_success = Theme.palette.$color_success;
    const $color_failure = Theme.palette.$color_failure;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 100px;

      span {
        ${$font_subtitle};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        color: ${$color_base_white};

        &.correct {
          background-color: ${$color_success};
        }
        &.wrong {
          background-color: ${$color_failure};
        }
      }

      h4 {
        ${$font_title_regular};
      }

      svg {
        font-size: 24px;
        color: ${$color_key_color};
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        gap: 14px;
      }
    `;
  }}
`;

export const StyledAnswerList = styled.ul.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_big = Theme.font.$font_title_big;
    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_subtitle = Theme.font.$font_subtitle;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;

    const $color_key_color = Theme.palette.$color_key_color;

    const $color_success = Theme.palette.$color_success;
    const $color_failure = Theme.palette.$color_failure;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        border-bottom: 1px solid ${$color_base_line};

        height: 100px;

        ol {
          padding: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          li {
            ${$font_subtitle};
            border: none;

            &.correct {
              color: ${$color_success};
            }
            &.wrong {
              color: ${$color_failure};
            }
          }
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        li {
          height: auto;
          padding-bottom: 10px;
        }
      }
    `;
  }}
`;

export const IsWrongToggle = styled.div.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;
    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }}
`;

const StyledQuizResult = styled.p.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_big = Theme.font.$font_title_big;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      h1 {
        ${$font_title_big};
      }
      @media screen and (max-width: ${$mobile_max_width}) {
        padding: 0 5%;
      }
    `;
  }}
`;

export default StyledQuizResult;
