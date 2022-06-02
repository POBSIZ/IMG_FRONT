import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import Slider from 'react-slick';

export const SlideItem = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $mobile_max_width = Theme.media.$mobile_max_width;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;
    const $font_title_big = Theme.font.$font_title_big;
    return css`
      display: flex !important;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
      ${$font_title_big};
      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  gap: 0;
  .slick-list {
    .slick-track {
      display: flex;
      flex-flow: row;
    }
  }
`;

const StyledSwipeBanner = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;

    const $font_title_big = Theme.font.$font_title_big;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const BG = props?.style?.background;

    return css`
      width: 100%;
      overflow: hidden;
      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

export default StyledSwipeBanner;
