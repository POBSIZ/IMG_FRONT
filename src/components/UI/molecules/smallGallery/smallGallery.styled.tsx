import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledSmallGallery = styled.div.attrs((props) => ({}))`
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

    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      width: 100%;
      background-color: ${$color_base_white};
      padding: 20px;
      overflow: hidden;

      p {
        ${$font_title_regular};
        text-align: start !important;

        margin: 10px 0;
        padding: 10px 0;

        border-bottom: 1px solid ${$color_base_line};
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        justify-items: center;
        flex-wrap: wrap;
        gap: 10px;
        overflow: hidden;

        margin: 0;
        padding: 0;
        list-style: none;

        img {
          cursor: pointer;
          width: calc(100% / 4 - 10px);
          height: 200px;
          object-fit: cover;
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        ul {
          grid-template-columns: 1fr;

          img {
            width: 100%;
          }
        }
      }
    `;
  }};
`;

export default StyledSmallGallery;
