import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const StyledLogo = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;

    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_title_regular = Theme.font.$font_title_regular;

    const $base_theme_color = Theme.baseTheme.color;
    return css`
      text-decoration: none;
      cursor: pointer;

      a {
        text-decoration: none;
      }

      span {
        cursor: pointer;
        color: ${$color_key_color};
        ${$font_title_regular};
      }
    `;
  }};
`;

export default StyledLogo;
