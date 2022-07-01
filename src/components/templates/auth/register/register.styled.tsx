import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Select } from 'Atoms';

const StyledRegister = styled.article.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;

    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_body_base = Theme.font.$font_body_base;
    const $font_body_info = Theme.font.$font_body_info;

    return css`
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-flow: column;
      /* gap: 20px; */

      section {
        text-align: center;

        h1 {
          ${$font_title_medium};
          color: ${$color_base_black};
          margin-bottom: 8px;
        }
        p {
          ${$font_body_base};
          color: ${$color_base_gray};
          margin: 0;
        }
      }

      form {
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-flow: column;
        /* gap: 16px; */
        margin: 16px 0;

        div {
          margin: 10px 0;
        }

        a {
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          color: ${$color_base_black};
        }

        .detail-wrapper {
          width: 100%;

          span {
            display: inline-block;
            margin-bottom: 6px;
            ${$font_body_info};
          }

          ${Select} {
            margin-bottom: 10px;
          }
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        form {
          width: 90%;
        }
      }
    `;
  }};
`;

export default StyledRegister;
