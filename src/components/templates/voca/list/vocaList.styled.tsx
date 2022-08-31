import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { QuizItem } from 'Templates/quiz/index/quiz.styled';

const StyledVocaList = styled.ul.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_key_color = Theme.palette.$color_key_color;

    return css`
      margin: 0;
      padding: 0;
      list-style: none;

      display: flex;
      flex-flow: column;
      gap: 20px;

      ${QuizItem} {
        border-color: ${$color_key_color};
      }
    `;
  }};
`;

export default StyledVocaList;
