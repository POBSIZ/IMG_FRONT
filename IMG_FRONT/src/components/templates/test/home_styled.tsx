import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledHome = styled.article.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;
    return css`
      min-height: 100vh;
      /* background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%); */
      background-color: ${$color_base_white};
      /* background-color: ${$color_base_black}; */
      /* background-color: ${$color_base_dark}; */
      h1 {
        margin: 0;
        color: #fff;
        text-align: center;
      }
    `;
  }}
`;

export default StyledHome;
