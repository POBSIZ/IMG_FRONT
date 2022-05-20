import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledLogo = styled.span.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $base_theme_color = Theme.baseTheme.color;
    return css`
      text-decoration: none;
    `;
  }};
`;

export default StyledLogo;
