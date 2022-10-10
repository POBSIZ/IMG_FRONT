import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const Content = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_LightGray = Theme.palette.$color_base_LightGray;

    const $tablet_max_width = Theme.media.$tablet_max_width;
    const $header_desktop_line_height = Theme.size.$header_desktop_line_height;
    const $header_mobile_line_height = Theme.size.$header_mobile_line_height;
    return css`
      background-color: rgb(0, 0, 0, 3%);
      /* background-color: ${$color_base_LightGray}; */
      padding: 2% 3%;
      /* border-radius: 16px; */

      @media screen and (max-width: ${$tablet_max_width}) {
        /* border-radius: 8px; */
        padding: 4%;
      }
    `;
  }};
`;

export default Content;
