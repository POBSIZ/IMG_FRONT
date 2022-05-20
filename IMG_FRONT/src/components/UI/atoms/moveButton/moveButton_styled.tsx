import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { MoveButtonPropsType } from '.';

const StyledMoveButton = styled.a.attrs((props) => ({}))<MoveButtonPropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_black = Theme.palette.$color_base_black;

    const backgroundColor =
      props.backColor == 'primary'
        ? `background-color: ${$color_key_color};`
        : 'transparent';

    const textColor = props.backColor == 'primary' ? '#fff' : $color_base_black;

    return css`
      ${backgroundColor}
      width: ${props.width};
      height: ${props.height};
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1em;
      color: ${textColor};
      padding: 10px 20px;
      font-weight: 500;
      border-radius: ${props.radius + 'px'};
    `;
  }};
`;

export default StyledMoveButton;
