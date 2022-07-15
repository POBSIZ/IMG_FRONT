import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const StyledMain = styled.main.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $tablet_max_width = Theme.media.$tablet_max_width;
    const $header_desktop_line_height = Theme.size.$header_desktop_line_height;
    const $header_mobile_line_height = Theme.size.$header_mobile_line_height;
    return css`
      overflow: hidden;
      min-height: 100vh;
      /* padding-top: ${$header_desktop_line_height}; */
      @media screen and (max-width: ${$tablet_max_width}) {
        /* padding-top: ${$header_mobile_line_height}; */
      }
    `;
  }};
`;

export default StyledMain;
