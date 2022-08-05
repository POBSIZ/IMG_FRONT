import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Title, Button } from 'Atoms';
import { StyledMove } from 'Atoms/move';

export const PostContent = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_subtitle = Theme.font.$font_subtitle;
    const $font_body_base = Theme.font.$font_body_base;

    const $tablet_max_width = Theme.media.$tablet_max_width;

    return css`
      padding: 20px 0;
      min-height: 50vh;
      overflow: hidden;

      width: 50%;
      margin: auto;

      img {
        width: 74% !important;
      }

      @media screen and (max-width: ${$tablet_max_width}) {
        width: 100%;

        img {
          width: 100% !important;
        }
      }
    `;
  }};
`;

export const EditDiv = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_subtitle = Theme.font.$font_subtitle;
    const $font_body_base = Theme.font.$font_body_base;

    return css`
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        gap: 10px;

        ${Button}, ${StyledMove} {
          width: 80px;
          height: 30px;
        }
      }
    `;
  }};
`;

const StyledBoardContent = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_subtitle = Theme.font.$font_subtitle;
    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_body_base = Theme.font.$font_body_base;

    const $tablet_max_width = Theme.media.$tablet_max_width;

    return css`
      width: 50%;
      margin: auto;

      ${Title} {
        margin: 20px 0;
        ${$font_title_medium};
        span {
          ${$font_subtitle};
        }
      }

      @media screen and (max-width: ${$tablet_max_width}) {
        width: 100%;
      }
    `;
  }};
`;

export default StyledBoardContent;
