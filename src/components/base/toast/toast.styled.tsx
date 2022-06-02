import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import { ToastPropsTypes } from '.';

const StyledToast = styled.div.attrs((props) => ({}))<ToastPropsTypes>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_success = Theme.palette.$color_success;
    const $color_warning = Theme.palette.$color_warning;
    const $color_failure = Theme.palette.$color_failure;
    const $color_base_black = Theme.palette.$color_base_black;
    const isPop = props.isPop ? '-50%' : '100%';
    const isPopOpacity = props.isPop ? '100%' : '0%';
    const themeColor =
      props.status === 'default'
        ? $color_base_black
        : props.status === 'error'
        ? $color_failure
        : props.status === 'warning'
        ? $color_warning
        : props.status === 'success'
        ? $color_success
        : '#fff';
    const mediaMinMaxWidth = Theme.media.$min_max_width;

    return css`
      position: fixed;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      background-color: ${themeColor};
      color: #fff;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
      opacity: ${isPopOpacity};

      min-width: 300px;
      height: 45px;
      margin: 0;

      left: 50%;
      transform: translateX(-50%) translateY(${isPop});
      transition: all 0.5s;

      bottom: 0;

      h2 {
        text-align: center;
        align-items: center;
      }

      @media screen and (max-width: ${mediaMinMaxWidth}) {
        width: 80%;
      }
    `;
  }};
`;

export default StyledToast;
