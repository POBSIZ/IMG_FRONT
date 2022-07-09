import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledQuizAssign = styled.form.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      display: flex;
      flex-flow: column;
      gap: 20px;
    `;
  }};
`;

export default StyledQuizAssign;
