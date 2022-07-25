import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import Layout, { Content } from 'Layouts';

const StyledBoardCreate = styled.form.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      display: flex;
      flex-flow: column;
      gap: 20px;

      div {
        h3 {
          margin: 10px 0;
        }
      }
    `;
  }};
`;

export default StyledBoardCreate;
