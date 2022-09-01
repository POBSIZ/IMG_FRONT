import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button } from 'Atoms';

const StyledVocaContent = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_gray = Theme.palette.$color_base_gray;

    const $color_failure = Theme.palette.$color_failure;

    return css`
      .box {
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${Button} {
          width: fit-content;
          height: fit-content;
          padding: 10px 20px;

          .icon {
            margin-right: 6px;
          }
        }
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        max-height: 60vh;
        overflow-y: scroll;

        li {
          border: 1px solid ${$color_base_line};
          border-top: none;

          padding: 0px 20px;

          background-color: ${$color_base_white};

          h2 {
            padding: 0px 20px;
            padding-top: 20px;
            padding-bottom: 10px;

            margin: 10px 0;
            margin-top: 0px;

            border-bottom: 2px solid ${$color_base_gray};
          }

          p {
            margin: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            span {
              padding: 10px 20px;
              /* border-bottom: 1px solid ${$color_base_line}; */

              .icon {
                color: ${$color_failure};
                cursor: pointer;
              }
            }
          }
        }
      }
    `;
  }};
`;

export default StyledVocaContent;
