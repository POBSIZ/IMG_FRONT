import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import StyledBoardTab from 'Molecules/boardTab/boardTab.styled';
import Layout, { Content } from 'Layouts';
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

const StyledTitleBanner = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;

    const $font_body_info = Theme.font.$font_body_info;
    const $font_body_head = Theme.font.$font_body_head;

    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_title_big = Theme.font.$font_title_big;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const BG = props?.style?.background;

    return css`
      min-height: 100vh;

      background: url(${BG});
      background-position: left;
      background-size: cover;

      overflow: hidden;

      .gal {
        width: calc(100%);
      }

      section {
        overflow: hidden;

        h1 {
          margin: 0px;
          margin-top: 10%;
          ${$font_title_big};
          color: ${$color_base_black};
        }
      }

      ${StyledMove} {
        width: 30%;
        border-radius: 32px;
        margin: auto;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        .gal {
          width: calc(100%);
        }

        section {
          h1 {
            /* ${$font_body_head}; */
            ${$font_title_regular};
          }

          p {
            /* width: 80%; */
          }
        }
      }
    `;
  }};
`;

export default StyledTitleBanner;
