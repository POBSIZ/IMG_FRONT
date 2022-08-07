import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import StyledSelectList from 'Molecules/selectList/selectList.styled';

export const Option = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      display: flex;
      gap: 10px;

      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

const StyledCreateQuizFilter = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      display: grid;
      grid-template-columns: 1fr 10px 1fr 10px 1fr;
      align-items: flex-start;
      gap: 10px;

      ${StyledSelectList} {
        width: 100%;
      }

      svg {
        display: block;
        margin: auto;
        align-self: flex-start;
      }

      h2 {
        margin-bottom: 0;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        grid-template-columns: 1fr;

        svg {
          transform: rotate(90deg);
        }
      }
    `;
  }};
`;

export default StyledCreateQuizFilter;
