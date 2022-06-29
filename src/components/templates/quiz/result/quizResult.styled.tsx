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
      flex-wrap: wrap;
      flex-flow: row;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;

      div {
        display: flex;
        flex-wrap: wrap;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;

        span {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 44px;
          height: 44px;
          border-radius: 100%;
          color: ${$color_base_white};
          ${$font_subtitle};

          &.correct {
            background-color: ${$color_success};
          }
          &.wrong {
            background-color: ${$color_failure};
          }
        }

        svg {
          cursor: pointer;
          font-size: 44px;
          color: ${$color_key_color};
        }
      }

      h4 {
        ${$font_title_regular};
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        gap: 10px;
        flex-flow: column;
        align-items: flex-start;
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
        align-items: flex-start;
        flex-wrap: wrap;
        flex-flow: column;

        border-bottom: 1px solid ${$color_base_line};

        ol {
          padding: 10px 10px 20px 10px;
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          align-items: flex-start;
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
          margin: 10px 0;
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

export const ResultNum = styled.div.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_head = Theme.font.$font_body_head;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
      ${$font_body_head};
      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }}
`;

export const GoToProfile = styled.div.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_info = Theme.font.$font_body_info;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      ${$font_body_info};
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 10px;

      width: fit-content;
      /* margin-top: 10px; */
      padding: 8px 10px;
      background-color: ${$color_key_color};
      color: ${$color_base_white};

      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }}
`;

const StyledQuizResult = styled.section.attrs((props) => {})`
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
