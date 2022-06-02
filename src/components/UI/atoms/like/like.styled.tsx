import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const StyledLike = styled.div.attrs((props) => ({}))<{ isLike: boolean }>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const iconColor = props.isLike
      ? Theme.palette.$color_failure
      : Theme.palette.$color_disabled;
    return css`
      cursor: pointer;
      width: 100%;
      height: 100%;
      .Icon {
        will-change: color;
        width: 100%;
        height: 100%;
        color: ${iconColor};
        transition: all 0.2s;
      }
    `;
  }};
`;

export default StyledLike;
