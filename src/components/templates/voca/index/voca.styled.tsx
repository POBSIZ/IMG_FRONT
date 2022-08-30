import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Textarea, Input } from 'Atoms';

export const StyledVocaInput = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;

    return css`
      h2 {
        margin: 0;
        margin-bottom: 20px;
      }

      ${Textarea} {
        height: 10vh;
      }
    `;
  }};
`;

export const StyledVocaLabel = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;

    return css`
      margin-bottom: 20px;

      form {
        display: flex;
        gap: 10px;

        input {
          width: 60%;
        }

        button {
          width: 40%;
        }
      }

      ul {
        list-style: none;
        margin: 0;
        margin-top: 10px;
        padding: 0;

        display: flex;
        flex-wrap: wrap;
        align-items: stretch;

        gap: 10px;

      }
    `;
  }};
`;

const StyledVoca = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;

    return css`
      display: flex;
      flex-flow: column;
      gap: 40px;

      background-color: ${$color_base_white};

      padding: 10px;
      height: 46vh;

      overflow-y: scroll;
    `;
  }};
`;

export default StyledVoca;
