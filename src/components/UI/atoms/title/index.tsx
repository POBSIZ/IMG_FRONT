import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const Title = styled.h1.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_big = Theme.font.$font_title_big;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_disabled = Theme.palette.$color_disabled;
    const $color_key_color = Theme.palette.$color_key_color;
    return css`
      ${$font_title_big};
      padding-bottom: 10px;
      border-bottom: 2px solid ${$color_base_line};
      margin: 0;
    `;
  }};
`;

export default Title;
