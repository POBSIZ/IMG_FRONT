import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import Layout, { Content } from 'Layouts';

export const BoardList = styled.ul.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_info = Theme.font.$font_body_info;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_gray = Theme.palette.$color_base_gray;

    return css`
      margin: 0;
      padding: 0;
      list-style: none;

      span:nth-child(2) {
        ${$font_body_info};
        color: ${$color_base_gray};
      }

      span:nth-child(3) {
        color: ${$color_base_black};
      }

      a {
        display: flex;
        flex-flow: row;
        gap: 10px;
        letter-spacing: 0.8px;
        text-decoration: none;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid ${$color_base_line};

        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }

        div {
          display: flex;
          flex-flow: column;
          gap: 6px;

          p {
            margin: 0;
            color: ${$color_base_black};
            ${$font_body_head};

            span {
              ${$font_body_info};
              color: ${$color_base_black};
              margin: 0 4px;
            }
          }
        }
      }
    `;
  }};
`;

export const BoardHeader = styled.nav.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;

    return css`
      width: 100%;
      margin: 0 0 20px 0;
      list-style: none;

      display: flex;
      flex-flow: row;
      align-items: center;
      gap: 10px;

      overflow-x: scroll;

      &::-webkit-scrollbar {
        height: 1px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${$color_base_line};
      }
      &::-webkit-scrollbar-track {
        background-color: #fff;
      }

      a {
        white-space: nowrap;
        width: fit-content;
        display: block;
        text-decoration: none;
        color: ${$color_base_black};
      }
    `;
  }};
`;

const StyledBoard = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css``;
  }};
`;

export default StyledBoard;
