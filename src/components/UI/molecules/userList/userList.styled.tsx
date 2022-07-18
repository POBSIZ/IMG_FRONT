import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Input, Button } from 'Atoms';

export const UserListItem = styled.label.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;

    return css`
      display: grid;
      /* justify-content: space-between; */
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;

      width: 100%;
      padding: 14px 0;
      border-bottom: 1px solid ${$color_base_line};

      text-align: start;
    `;
  }};
`;

const StyledUserList = styled.ul.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;

    return css`
      margin: 0;
      padding: 0;
      list-style: none;

      section {
        max-height: 300px;
        overflow: hidden;
        overflow-y: scroll;
      }
    `;
  }};
`;

export default StyledUserList;
