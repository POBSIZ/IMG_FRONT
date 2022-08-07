import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { SelectListPropsType } from '.';
import { Input } from 'Atoms';

export const ListItem = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_base = Theme.font.$font_body_base;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_gray = Theme.palette.$color_base_gray;

    return css`
      margin-bottom: 4px;

      display: flex;
      flex-wrap: wrap;
      flex-flow: row;

      label {
        cursor: pointer;
        will-change: background-color, color;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        width: 98%;
        margin: 0;
        padding: 6px 0px 6px 10px;
        line-height: fit-content;
        ${$font_body_head};
        background-color: ${$color_base_LightGray};
        background-color: ${$color_base_white};
        color: ${$color_base_gray};

        span {
          ${$font_body_base};
          margin-bottom: 0 !important;
        }
      }

      ${Input}[type="radio"], ${Input}[type="checkbox"] {
        will-change: background-color, color;
        margin: 0;
        padding: 0;
        width: 4%;
        height: auto;
        min-height: 50px;
        border: none;
        background-color: ${$color_base_line};
        cursor: pointer;

        &:checked {
          background-color: ${$color_key_color};
        }

        &:checked + label {
          color: ${$color_base_white};
          background-color: ${$color_key_color};
        }
      }

      &:last-child {
        margin: 0 !important;
      }
    `;
  }};
`;

const StyledSelectList = styled.div.attrs((props) => ({}))<{
  boxHeight: number | string;
}>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;

    return css`
      border: 1px solid ${$color_base_line};
      padding: 4px;
      height: ${props.boxHeight};
      overflow: hidden;
      overflow-y: scroll;
    `;
  }};
`;

export default StyledSelectList;
