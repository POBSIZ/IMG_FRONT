import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button, Input, Title, Select } from 'Atoms';
import { Content } from 'Layouts';

export const Info = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_regular = Theme.font.$font_title_regular;

    return css`
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 10px 0;
      align-items: center;
      min-height: 40px;

      h4 {
        margin: 0;
      }

      ${Select} {
        width: 50%;
      }
    `;
  }};
`;

const StyledUserInfo = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_regular = Theme.font.$font_title_regular;

    return css`
      display: flex;
      flex-flow: column;
      gap: 20px;

      .btns {
        display: flex;
        gap: 10px;
      }
    `;
  }};
`;

export default StyledUserInfo;
