import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { ListTabPropsType } from '.';

const StyledListTab = styled.div.attrs((props: ListTabPropsType) => ({}))<any>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;

    const $font_subtitle = Theme.font.$font_subtitle;

    return css`
      background-color: ${$color_base_LightGray};
      padding: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 16px;
    `;
  }};
`;

export default StyledListTab;
