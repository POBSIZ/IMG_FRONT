import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledContainer = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $tablet_max_width = Theme.media.$tablet_max_width;
    const $header_desktop_line_height = Theme.size.$header_desktop_line_height;
    const $header_mobile_line_height = Theme.size.$header_mobile_line_height;
    return css`
      padding: ${$header_desktop_line_height} 5%;

      @media screen and (max-width: ${$tablet_max_width}) {
        padding: ${$header_mobile_line_height} 2%;
      }
    `;
  }};
`;

export default StyledContainer;
