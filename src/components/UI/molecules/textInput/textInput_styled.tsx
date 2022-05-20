import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { TextInputPropsType } from '.';

const StyledTextInput = styled.div.attrs((props) => ({}))<TextInputPropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_failure = Theme.palette.$color_failure;
    const failColor = props.isFail == true ? $color_failure : $color_base_black;
    const $tablet_max_width = Theme.media.$tablet_max_width;
    return css`
      width: 100%;
      color: ${failColor};
      label span {
        font-size: 18px;
      }
      .line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
      }
      .line_container {
        display: flex;
        width: 70%;
        gap: 10px;
      }
      .warnning {
        margin-left: 30%;
        text-align: start;
        font-size: 15px;
        margin-bottom: 10px;
      }
      @media screen and (max-width: ${$tablet_max_width}) {
        label span {
          font-size: 14px;
          margin-bottom: 5px;
          padding-left: 4px;
        }

        .line {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .line_container {
          display: flex;
          width: 100%;
          gap: 10px;
        }

        .warnning {
          margin-left: 0%;
          text-align: start;
          font-size: 15px;
          margin-bottom: 10px;
        }
      }
    `;
  }};
`;

export default StyledTextInput;
