import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import Layout from 'Layouts';

export const QuizLogItem = styled.li.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_base = Theme.font.$font_body_base;
    const $font_body_info = Theme.font.$font_body_info;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_dark = Theme.palette.$color_base_dark;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_success = Theme.palette.$color_success;
    const $color_warning = Theme.palette.$color_warning;
    const $color_failure = Theme.palette.$color_failure;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: ${$color_base_white};
      border-bottom: 1px solid ${$color_base_line};
      padding: 2%;

      section {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: column;
        gap: 4px;

        span {
          color: ${$color_base_gray};

          &:first-child {
            ${$font_body_info};
          }

          &:last-child {
            margin-left: 4px;
            color: ${$color_success};
            ${$font_body_base};
          }
        }

        p {
          margin: 0;
          ${$font_body_head};
        }
      }

      div {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-flow: row;
        gap: 8px;

        a {
          width: 74px;
          padding: 6px;
          color: #fff;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          background-color: ${$color_failure};

          &:first-child {
            background-color: ${$color_success};
          }

          &:nth-child(2) {
            background-color: ${$color_key_color};
          }

          svg {
            cursor: pointer;
          }
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        padding: 5%;

        div {
          flex-flow: column;
        }
      }
    `;
  }}
`;

export const ProfileInfo = styled.section.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_info = Theme.font.$font_body_info;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;
      flex-wrap: wrap;
      flex-flow: column;
      justify-content: center;
      align-items: center;

      h1 {
        ${$font_body_head};

        margin: 20px 0;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 80px;
        height: 80px;
        border-radius: 100%;
        color: ${$color_base_white};
        background-color: ${$color_key_color};
      }

      p {
        margin: 0 0 4px 0;
      }

      span {
        ${$font_body_info};
        color: ${$color_base_gray};
      }

      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }}
`;

const StyledProfile = styled.article.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;
    return css`
      min-height: 100vh;

      ${Layout.Content} {
        margin-top: 20px;

        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      }
    `;
  }}
`;

export default StyledProfile;
