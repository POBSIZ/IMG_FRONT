import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const StyledModal = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    return css``;
  }};
`;

export default StyledModal;
