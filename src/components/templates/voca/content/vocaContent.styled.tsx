import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledVocaContent = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css``;
  }};
`;

export default StyledVocaContent;
