import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const Container = styled.article.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $tablet_max_width = Theme.media.$tablet_max_width;
    const $header_desktop_line_height = Theme.size.$header_desktop_line_height;
    const $header_mobile_line_height = Theme.size.$header_mobile_line_height;
    return css`
      max-width: 1080px;
      margin: auto;
      padding: ${$header_desktop_line_height} 5%;

      @media screen and (max-width: ${$tablet_max_width}) {
        padding: ${$header_mobile_line_height} 5%;
      }
    `;
  }};
`;

export default Container;
