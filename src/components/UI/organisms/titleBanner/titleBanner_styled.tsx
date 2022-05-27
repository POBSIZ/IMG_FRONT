import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledTitleBanner = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;

    const $font_title_big = Theme.font.$font_title_big;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const BG = props?.style?.background;

    return css`
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 100vh;

      background: url(${BG});
      background-position: center;
      background-size: cover;

      /* color: ${$color_base_white}; */

      h1 {
        margin: 0;
        ${$font_title_big};
        /* font-size: 60px; */
        /* color: ${$color_key_color}; */
      }
      p {
        width: 60%;
        line-height: 24px;
        text-align: center;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

export default StyledTitleBanner;
