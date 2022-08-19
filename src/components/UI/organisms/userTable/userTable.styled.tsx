import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

export const TableWrapper = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $cell_height = '60px';

    const $font_subtitle = Theme.font.$font_subtitle;

    return css`
      display: flex;
      flex-flow: column;
      margin: 20px 0;
      width: fit-content;
    `;
  }};
`;

export const StyledDateField = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $cell_height = '60px';

    const $font_subtitle = Theme.font.$font_subtitle;

    return css`
      width: fit-content;
      position: sticky;
      left: 0;
      ${$font_subtitle};
      margin: 20px 0;
    `;
  }};
`;

const StyledUserTable = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $cell_height = '60px';

    return css`
      width: fit-content;
      display: flex;
      /* align-items: flex-end; */
      text-align: center;

      border: 1px solid;
      border-left: none;

      /* padding-left: 100px; */

      * {
        border-collapse: collapse;
      }

      .names {
        width: 100px;
        padding-top: 120px;

        /* position: absolute; */
        /* transform: translateX(-100px) translateY(-1px); */
        position: sticky;
        left: 0;

        background-color: #fff;

        border-right: 1px solid;
        border-left: 1px solid;

        div {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;

          border-bottom: 1px solid;
          /* border-right: 1px solid; */
          height: ${$cell_height};

          align-self: flex-start;

          p {
            margin: 0;
            line-height: 25px;
          }

          &:first-child {
            border-top: 1px solid;
            height: calc(${$cell_height} + 1px);
          }

          &:last-child {
            border-bottom: none;
          }
        }
      }

      .test {
        width: 220px;
        line-height: ${$cell_height};
        border-left: 1px solid;
        align-self: flex-start;

        p {
          margin: 0;
          border-bottom: 1px solid;
        }

        ul {
          margin: 0;
          padding: 0;
          list-style: none;

          li {
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: center;

            height: ${$cell_height};
            border-bottom: 1px solid;

            &:last-child {
              border-bottom: none;
            }

            span {
              line-height: ${$cell_height};
              height: ${$cell_height};
              display: inline-block;
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding: 0 4px;

              &:last-child {
                border-left: 1px solid;
                text-align: center;
              }
            }
          }
        }
      }
    `;
  }};
`;

export default StyledUserTable;
