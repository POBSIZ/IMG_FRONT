import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button, Input, Title } from 'Atoms';
import { Content } from 'Layouts';
import { UserPropsType } from './user.types';

export const UserItem = styled.div.attrs((props) => ({}))<
  Partial<UserPropsType>
>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_head = Theme.font.$font_body_head;
    const $font_title_regular = Theme.font.$font_title_regular;

    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;

    return css`
      display: grid;
      /* grid-template-columns: repeat(${props.hasRole ? '5' : '4'}, 1fr); */
      /* ${props.hasRole ? '5' : '4'} */
      /* grid-template-columns: .3fr 1fr 1fr 1fr; */
      grid-template-columns: .4fr 1fr 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      height: 60px;
      border-bottom: 1px solid ${$color_base_line};
      background-color: ${$color_base_white};

      padding: 0 4%;
      /* margin-bottom: 10px; */

      transition: all 0.3s;
      will-change: background-color;
      &:hover {
        background-color: ${$color_base_line};
      }

      span {
        padding: 0 4px;
        &:first-child {
        }
      }
    `;
  }};
`;

const StyledUser = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_regular = Theme.font.$font_title_regular;

    return css``;
  }};
`;

export default StyledUser;
