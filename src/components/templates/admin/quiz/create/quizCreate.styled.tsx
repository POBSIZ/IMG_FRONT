import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button, Input, Title } from 'Atoms';
import { Content } from 'Layouts';

export const NumberInput = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_regular = Theme.font.$font_title_regular;

    return css`
      display: flex;
      gap: 10px;
      margin: 10px 0;

      ${Button} {
        width: 40%;
      }

      div {
        width: calc(100% + 10px);
        display: flex;
        gap: 10px;
      }
    `;
  }};
`;

export const TextInput = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_regular = Theme.font.$font_title_regular;

    return css`
      span {
        display: inline-block;
        margin-bottom: 10px;
        ${$font_title_regular};
      }
    `;
  }};
`;

const StyledQuizCreate = styled.form.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_regular = Theme.font.$font_title_regular;

    return css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-flow: column;
      gap: 20px;

      ${Title} {
        margin-top: 20px;
      }

      .m-title {
        display: block;
        ${$font_title_regular};
        margin-bottom: 18px;
      }

      ul {
        margin: 0;
        padding: 0;
        display: flex;
        gap: 10px;
        list-style: none;
        flex-wrap: wrap;

        li {
          svg {
            cursor: pointer;
          }
          span {
            margin-left: 6px;
          }
        }
      }
    `;
  }};
`;

export default StyledQuizCreate;
