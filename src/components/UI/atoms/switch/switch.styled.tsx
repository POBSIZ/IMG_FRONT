import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import { SwitchPropsType } from '.';

const sizeTable = {
  S: {
    padding: '2px',
    body: {
      w: '34px',
      h: '18px',
    },
    circle: {
      w: '14px',
      h: '14px',
    },
  },
  M: {
    padding: '4px',
    body: {
      w: '46px',
      h: '26px',
    },
    circle: {
      w: '18px',
      h: '18px',
    },
  },
  L: {
    padding: '4px',
    body: {
      w: '68px',
      h: '36px',
    },
    circle: {
      w: '28px',
      h: '28px',
    },
  },
};

export const SwitchValue = styled.input.attrs((props) => ({}))<{ ref: any }>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;
    return css``;
  }};
`;

export const SwitchCircle = styled.div.attrs((props: SwitchPropsType) => ({}))<{
  state: boolean | undefined;
  size: 'S' | 'M' | 'L';
}>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;

    const $bg_color = props.state ? $color_base_white : $color_key_color;
    const $circle_locate = props.state
      ? 'translateX(calc(100% + 2px))'
      : 'translateX(0)';

    return css`
      background-color: ${$bg_color};
      border-radius: 100%;
      border: none;

      width: ${sizeTable[props.size].circle.w};
      height: ${sizeTable[props.size].circle.h};

      box-shadow: 0px 1px 2px rgba(181, 181, 181, 0.58);

      transform: ${$circle_locate};
      will-change: background-color;
      transition: all 0.3s;
    `;
  }};
`;

const StyledSwitch = styled.div.attrs((props: SwitchPropsType) => ({}))<{
  state: boolean | undefined;
  size: 'S' | 'M' | 'L';
}>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;

    const $bg_color = props.state ? $color_key_color : $color_base_LightGray;

    return css`
      cursor: pointer;
      width: ${sizeTable[props.size].body.w};
      height: ${sizeTable[props.size].body.h};
      border-radius: 32px;
      border: none;
      background-color: ${$bg_color};

      display: flex;
      align-items: center;
      padding: ${sizeTable[props.size].padding};

      box-shadow: 0px 2px 4px rgba(181, 181, 181, 0.58);

      will-change: background-color;
      transition: all 0.3s;
    `;
  }};
`;

export default StyledSwitch;
