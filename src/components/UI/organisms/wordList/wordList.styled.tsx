import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import Layout from 'Layouts';

const StyledWordList = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_failure = Theme.palette.$color_failure;

    return css`
      height: 100%;
      /* overflow-y: scroll; */

      ${Layout.Content} {
        background-color: ${$color_base_white};
      }

      ul {
        display: flex;
        flex-flow: column;
        gap: 10px;

        margin: 0;
        padding: 0;
        list-style: none;

        li {
          display: grid;
          /* grid-template-columns: repeat(4, 1fr); */
          grid-template-columns: 0.5fr 1fr 1fr 1fr;

          padding-bottom: 10px;
          border-bottom: 1px solid ${$color_base_line};

          span {
            .icon {
              color: ${$color_failure};
            }
          }
        }
      }
    `;
  }};
`;

export default StyledWordList;
