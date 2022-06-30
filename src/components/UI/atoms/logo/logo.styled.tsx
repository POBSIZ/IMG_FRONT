import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const StyledLogo = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $base_theme_color = Theme.baseTheme.color;
    return css`
      text-decoration: none;
    `;
  }};
`;

export default StyledLogo;
