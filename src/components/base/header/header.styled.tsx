import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import StyledLogo from 'Atoms/logo/logo.styled';

export const NavList = styled.nav.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $base_theme_color = Theme.baseTheme.color;

    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_subtitle = Theme.font.$font_subtitle;
    const $font_body_head = Theme.font.$font_body_head;

    const $tablet_max_width = Theme.media.$tablet_max_width;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;

    const $display_state_position = props.isOpen ? '0' : '100%';
    const $display_state_opacity = props.isOpen ? '100%' : '0%';
    return css`
      display: flex;

      ul {
        li {
          display: none;
        }
        a {
          cursor: pointer;
          font-size: ${$font_subtitle};
          margin: 0 10px;
          /* color: ${$base_theme_color}; */
          color: ${$color_base_black};
          text-decoration: none;

          &:last-child {
            margin-right: 0;
          }

          .divider {
            border-left: 1px solid;
            padding-left: 20px;
          }
        }
      }

      @media screen and (max-width: ${$tablet_max_width}) {
        display: flex;
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: ${$color_base_line};
        right: 0;
        top: 0;

        align-items: flex-end;
        flex-flow: column;

        transform: translateX(${$display_state_position});
        opacity: ${$display_state_opacity};
        transition: all 0.3s;

        ul {
          display: flex;
          flex-flow: column;
          justify-content: flex-start;
          margin: 0;
          padding: 0;
          background-color: ${$color_base_white};
          backdrop-filter: blur(10px);
          width: 100%;
          height: 100vh;

          li {
            background-color: ${$color_base_white};
            color: ${$color_key_color};
            ${$font_title_regular};
            display: flex;
            padding: 0 5%;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            height: 60px;
            border-bottom: 1px solid ${$color_base_line};
            .Icon {
              ${$font_title_regular};
              cursor: pointer;
            }
          }

          a {
            display: flex;
            align-items: center;
            padding: 0 5%;
            margin: 0;
            height: 60px;
            background-color: ${$color_base_white};
            font-size: ${$font_body_head};
            border-bottom: 1px solid ${$color_base_line};
            transition: all 0.3s;
            &:hover {
              padding: 0 10%;
              background-color: ${$color_base_black};
              color: ${$color_base_white};
            }
          }
        }
      }
    `;
  }}
`;

const StyledHeader = styled.header.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $base_theme_color = Theme.baseTheme.color;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_white = Theme.palette.$color_base_white;

    const $tablet_max_width = Theme.media.$tablet_max_width;
    const $header_desktop_line_height = Theme.size.$header_desktop_line_height;
    const $header_mobile_line_height = Theme.size.$header_mobile_line_height;
    return css`
      position: fixed;
      z-index: 5;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      /* border-radius: 32px; */
      width: 100%;
      height: ${$header_desktop_line_height};
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* box-shadow: 0px 1px 0px rgba(56, 56, 56, 0.3); */
      font-weight: 500;
      background-color: rgba(255, 255, 255, 0.2);
      /* background-color: rgba(180, 180, 180, 0.1); */
      backdrop-filter: blur(10px);

      .Icon {
        display: none;
        /* color: ${$base_theme_color}; */
        color: ${$color_base_black};
        font-size: 20px;
        cursor: pointer;
      }

      ${StyledLogo} {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: calc(332px / 2) !important;
        height: calc(81px / 2) !important;

        a {
          font-size: 24px;
          font-weight: bold;
          color: ${$color_key_color};
          text-decoration: none;
        }

        span {
          width: calc(332px / 2) !important;
          height: calc(81px / 2) !important;

          img {
            cursor: pointer;
          }
        }
      }

      @media screen and (max-width: ${$tablet_max_width}) {
        height: ${$header_mobile_line_height};
        /* top: 14px; */
        width: 100%;
        padding: 0 5%;

        .Icon {
          display: block;
        }

        ${StyledLogo} {
          a {
            font-size: 20px;
          }
        }
      }
    `;
  }}
`;

StyledHeader.defaultProps = {};

export default StyledHeader;
