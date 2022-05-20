import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { BadgePropsType } from '.';

const StyledBadge = styled.span.attrs((props) => ({}))<BadgePropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_success = Theme.palette.$color_success;
    const $color_warning = Theme.palette.$color_warning;
    const $color_failure = Theme.palette.$color_failure;

    const bgColor = {
      primary: $color_key_color,
      success: $color_success,
      warning: $color_warning,
      error: $color_failure,
      disabled: $color_base_LightGray,
    };

    const size = {
      small: {
        height: '20px',
        font: '10px',
      },
      medium: {
        height: '22px',
        font: '12px',
      },
    };

    const $color_base_black = props.theme.palette.$color_base_black;

    const textColor = props.backColor == 'none' ? $color_base_black : '#fff';
    return css`
      background: ${bgColor[props.backColor]};
      color: ${textColor};
      width: auto;
      height: ${size[props.size].height};
      padding: 4px 10px;
      font-size: ${size[props.size].font};
      border-radius: 3px;

      border-radius: ${props.radius};
      align-items: center;
      align-content: center;
      justify-content: center;
      display: flex;
    `;
  }};
`;

export default StyledBadge;
