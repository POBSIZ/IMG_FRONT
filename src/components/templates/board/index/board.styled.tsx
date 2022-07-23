import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

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
        flex-flow: column;
        gap: 6px;
        letter-spacing: 0.8px;
        text-decoration: none;

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
    `;
  }};
`;

export const BoardHeader = styled.nav.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_black = Theme.palette.$color_base_black;

    return css`
      margin: 0 0 20px 0;
      list-style: none;

      display: flex;
      align-items: center;
      gap: 10px;
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
