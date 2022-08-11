import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledBoardTab = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_body_base = Theme.font.$font_body_base;
    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_info = Theme.font.$font_body_info;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_gray = Theme.palette.$color_base_gray;

    return css`
      width: 100%;
      background-color: ${$color_base_white};
      padding: 20px;

      p {
        ${$font_title_regular};
        text-align: start !important;

        margin: 10px 0;
        padding: 10px 0;

        border-bottom: 1px solid ${$color_base_line};
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        a {
          ${$font_body_head};
          text-decoration: none;
          color: ${$color_base_black};

          display: flex;
          justify-content: space-between;

          padding: 10px 0;
          border-bottom: 1px solid ${$color_base_line};

          span {
            width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 30px;
            height: 30px;
          }

          span:last-child {
            ${$font_body_info};
            color: ${$color_base_gray};
            text-align: right;
          }
        }
      }
    `;
  }};
`;

export default StyledBoardTab;
