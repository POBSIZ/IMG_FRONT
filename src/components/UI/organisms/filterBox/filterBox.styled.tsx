import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import StyledSelectList from 'Molecules/selectList/selectList.styled';

const StyledFilterBox = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      display: grid;
      grid-template-columns: 1fr 10px 1fr 10px 1fr;
      align-items: center;
      gap: 10px;

      ${StyledSelectList} {
        width: 100%;
      }

      svg {
        display: block;
        margin: auto;
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

export default StyledFilterBox;
