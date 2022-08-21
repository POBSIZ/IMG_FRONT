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

      position: relative;

      width: fit-content;
      margin: 40px 0;
    `;
  }};
`;

export const StyledNumField = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $cell_height = '60px';

    const $font_subtitle = Theme.font.$font_subtitle;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $border_color = $color_base_gray;

    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_base_line = Theme.palette.$color_base_line;

    return css`
      position: sticky;
      top: 0;
      left: 0;
      z-index: 3;

      margin: 0;
      border: 1px solid ${$border_color};
      background-color: #fff;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      p {
        border-left: 1px solid ${$border_color};

        text-align: center;
        display: inline-block;
        width: 200px;
        margin: 0;
        line-height: 25px;

        padding: 10px 0;

        &:nth-child(odd) {
          background-color: ${$color_base_line};
        }

        &:nth-child(2n) {
          background-color: ${$color_base_LightGray};
        }

        &:first-child {
          background-color: #fff;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 10;
          margin: 0;
          width: 141px;
          border-right: 1px solid ${$border_color};
        }

        &:nth-child(2) {
          border-left: none;
        }
      }
    `;
  }};
`;

const StyledUserTable = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_body_info = Theme.font.$font_body_info;

    const $color_key_color = Theme.palette.$color_key_color;

    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_line = Theme.palette.$color_base_line;

    const $cell_height = '60px';

    const $border_color = $color_base_gray;

    return css`
      width: fit-content;
      display: flex;
      text-align: center;

      border: 1px solid ${$border_color};
      border-top: none;
      border-left: none;

      * {
        border-collapse: collapse;
      }

      .names {
        padding-top: 59px;

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
          align-self: flex-start;

          border-bottom: 1px solid ${$border_color};

          width: 140px;
          height: ${$cell_height};

          p {
            ${$font_body_info};
            margin: 0;
            /* padding: 1px 0; */
            /* line-height: 25px; */

            &:first-child {
              color: ${$color_base_gray};
            }
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
        width: 200px;
        line-height: ${$cell_height};
        border-left: 1px solid ${$border_color};
        align-self: flex-start;

        &:nth-child(2) {
          border-left: none;
        }

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
            grid-template-columns: 1fr;
            text-align: center;

            height: ${$cell_height};
            border-bottom: 1px solid ${$border_color};

            &:last-child {
              border-bottom: none;
            }

            span {
              line-height: calc(${$cell_height} / 2);
              height: ${$cell_height};

              display: flex;
              flex-flow: column;
              align-items: center;
              justify-content: center;

              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding: 0 4px;

              &:last-child {
                text-align: center;
              }

              span {
                height: auto;
                line-height: 20px;
              }
            }
          }
        }
      }
    `;
  }};
`;

export default StyledUserTable;
