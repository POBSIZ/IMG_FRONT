import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledVocaList = styled.ul.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css`
      margin: 0;
      padding: 0;
      list-style: none;
    `;
  }};
`;

export default StyledVocaList;
