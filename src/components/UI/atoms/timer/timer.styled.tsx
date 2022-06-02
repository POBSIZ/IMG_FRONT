import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import { TimerPropsType } from '.';

const StyledTimer = styled.div.attrs((props: TimerPropsType) => ({}))<any>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;

    const $font_subtitle = Theme.font.$font_subtitle;

    return css`
      width: 40px;
      height: 40px;
      background-color: ${$color_base_LightGray};
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      ${$font_subtitle};
      color: ${$color_base_black};
    `;
  }};
`;

export default StyledTimer;
