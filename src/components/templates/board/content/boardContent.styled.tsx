import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Title, Button } from 'Atoms';

export const PostContent = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_subtitle = Theme.font.$font_subtitle;
    const $font_body_base = Theme.font.$font_body_base;

    return css`
      padding: 20px 0;
      min-height: 50vh;
      overflow: hidden;

      img {
        width: 100% !important;
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

        ${Button} {
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

    return css`
      ${Title} {
        margin: 20px 0;
        ${$font_title_medium};
        span {
          ${$font_subtitle};
        }
      }
    `;
  }};
`;

export default StyledBoardContent;
