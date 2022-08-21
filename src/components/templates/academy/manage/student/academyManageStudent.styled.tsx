import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import StyledAcademyManageClass from '../class/academyManageClass.styled';

const StyledAcademyManageStudent = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;

      .students {
        width: 100%;

        .inner {
          background-color: #fff;
          max-height: 50vh;
          overflow: hidden;
          overflow-y: scroll;
        }
      }

      /* section {
        width: 100%;
      } */

      @media screen and (max-width: ${$mobile_max_width}) {
        flex-flow: column;
      }
    `;
  }};
`;

export default StyledAcademyManageStudent;
