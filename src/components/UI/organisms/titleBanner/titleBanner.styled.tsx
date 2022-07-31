import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import StyledBoardTab from 'Molecules/boardTab/boardTab.styled';
import Layout, { Content } from 'Layouts';
import { StyledMove } from 'Atoms/move';

export const BoardTabWrapper = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;

    const $font_body_info = Theme.font.$font_body_info;
    const $font_title_big = Theme.font.$font_title_big;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;
      gap: 20px;

      ${Content} {
        width: 50%;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        flex-flow: column;

        ${Content} {
          width: 100%;
        }
      }
    `;
  }};
`;

export const PortalRing = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;

    const $font_body_info = Theme.font.$font_body_info;
    const $font_title_big = Theme.font.$font_title_big;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      margin: auto;

      /* width: 500px;
      height: 500px;
      border: 1px solid ${$color_key_color};
      border-radius: 100%; */

      /* .circle {
        width: 14px;
        height: 14px;
        background: ${$color_key_color};
        border-radius: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        margin: auto;
        filter: blur(6px);
        animation: circle_desktop 6s ease-in-out infinite;

        &:nth-child(1) {
          filter: blur(0px);
        }
      } */

      @media screen and (max-width: ${$mobile_max_width}) {
        /* width: 260px; */
        height: 100px;

        .circle {
          animation: circle_mobile 6s ease-in-out infinite;
        }
      }

      @keyframes circle_desktop {
        0% {
          transform: rotate(0deg) translate(-250px) rotate(0deg);
        }
        100% {
          transform: rotate(360deg) translate(-250px) rotate(-360deg);
        }
      }

      @keyframes circle_mobile {
        0% {
          transform: rotate(0deg) translate(-130px) rotate(0deg);
        }
        100% {
          transform: rotate(360deg) translate(-130px) rotate(-360deg);
        }
      }
    `;
  }};
`;

const StyledTitleBanner = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;

    const $font_body_info = Theme.font.$font_body_info;
    const $font_body_head = Theme.font.$font_body_head;

    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_title_big = Theme.font.$font_title_big;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const BG = props?.style?.background;

    return css`
      /* display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center; */
      /* height: 35vh; */
      min-height: 100vh;

      background: url(${BG});
      background-position: left;
      background-size: cover;

      overflow: hidden;

      /* color: ${$color_base_white}; */

      .gal {
        /* width: calc(50% - 10px); */
        width: calc(100%);
      }

      section {
        /* width: 100%;
        height: 100vh; */

        /* backdrop-filter: blur(2px) brightness(90%); */
        /* display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column; */

        overflow: hidden;

        h1 {
          margin: 0px;
          margin-top: 10%;
          /* margin-bottom: 10px; */
          ${$font_title_big};
          color: ${$color_base_black};
        }

        /* p {
          margin: 0;
          line-height: 20px;
          text-align: center;
          ${$font_body_info};
          color: ${$color_base_gray};
        } */
      }

      ${StyledMove} {
        width: 30%;
        border-radius: 32px;
        margin: auto;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        .gal {
          width: calc(100%);
        }

        section {
          h1 {
            /* ${$font_body_head}; */
            ${$font_title_regular};
          }

          p {
            /* width: 80%; */
          }
        }
      }
    `;
  }};
`;

export default StyledTitleBanner;
