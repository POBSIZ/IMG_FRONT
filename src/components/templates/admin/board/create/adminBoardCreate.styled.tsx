import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';
import { AdminBoardCreatePropsType } from '.';

const StyledAdminBoardCreate = styled.form.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      display: flex;
      flex-flow: column;
      gap: 14px;
    `;
  }};
`;

export default StyledAdminBoardCreate;
