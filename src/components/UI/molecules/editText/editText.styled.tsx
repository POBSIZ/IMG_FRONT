import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button } from 'Atoms';

const StyledEditText = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_info = Theme.font.$font_body_info;

    return css`
      display: flex;
      gap: 10px;
      align-items: center;

      svg {
        ${$font_body_info};
        cursor: pointer;
      }

      ${Button} {
        width: 30%;
      }
    `;
  }};
`;

export default StyledEditText;
