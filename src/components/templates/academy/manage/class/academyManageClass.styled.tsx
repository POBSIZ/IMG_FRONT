import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledAcademyManageClass = styled.form.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      display: flex;
      flex-flow: column;
      gap: 10px;

      .classForm {
        display: flex;
        flex-flow: column;
        gap: 10px;

        div {
          display: flex;
          gap: 10px;
        }
      }
    `;
  }};
`;

export default StyledAcademyManageClass;
