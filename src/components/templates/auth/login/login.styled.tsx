import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import Link from 'next/link';

const StyledLogin = styled.article.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;

    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_body_base = Theme.font.$font_body_base;

    return css`
      width: 100%;
      height: 70vh;

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
        margin-top: 20px;
        /* gap: 10px; */

        div {
          margin-bottom: 10px;
        }

        a {
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          color: ${$color_base_black};
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

export default StyledLogin;
