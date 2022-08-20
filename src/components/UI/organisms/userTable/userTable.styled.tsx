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

    const $color_key_color = Theme.palette.$color_key_color;

    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;

    const $cell_height = '60px';

    const $border_color = $color_base_gray;

    return css`
      width: fit-content;
      display: flex;
      /* align-items: flex-end; */
      text-align: center;

      border: 1px solid ${$border_color};
      border-left: none;

      /* padding-left: 100px; */

      * {
        border-collapse: collapse;
      }

      .names {
        width: 140px;
        padding-top: 120px;

        /* position: absolute; */
        /* transform: translateX(-100px) translateY(-1px); */
        position: sticky;
        left: 0;

        background-color: #fff;

        border-right: 1px solid ${$border_color};
        border-left: 1px solid ${$border_color};

        div {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;

          border-bottom: 1px solid ${$border_color};

          height: ${$cell_height};

          align-self: flex-start;

          p {
            margin: 0;
            line-height: 25px;
          }

          &:first-child {
            border-top: 1px solid ${$border_color};
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
        border-left: 1px solid ${$border_color};
        align-self: flex-start;

        &:nth-child(odd) {
          background-color: ${$color_base_line};
        }

        &:nth-child(2n) {
          background-color: ${$color_base_LightGray};
        }

        p {
          margin: 0;
          border-bottom: 1px solid ${$border_color};
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
            border-bottom: 1px solid ${$border_color};

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
                border-left: 1px solid ${$border_color};
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
