import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

export const List = styled.div.attrs((props) => ({}))<{
  isOpen: boolean | undefined;
}>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;

    const $display = props.isOpen ? 'block' : 'none';

    return css`
      padding-left: 30px;
      display: ${$display};
    `;
  }};
`;

export const Info = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_failure = Theme.palette.$color_failure;

    return css`
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        cursor: pointer;
      }

      .delete {
        color: ${$color_failure};
      }
    `;
  }};
`;

export const StyledDirectory = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;

    return css`
      margin: 10px 0;
      padding-left: 10px;
      border-left: 1px solid ${$color_base_line};
    `;
  }};
`;
