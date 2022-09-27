import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';
import { ModalPropsType } from '.';

export const ModalBody = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      padding: 2%;

      @media screen and (max-width: ${$mobile_max_width}) {
        padding: 5%;
      }
    `;
  }};
`;

export const ModalHeader = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_key_color = Theme.palette.$color_key_color;
    const $mobile_max_width = Theme.media.$mobile_max_width;

    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${$color_base_line};
      padding: 2%;

      h2 {
        margin: 0;
      }

      svg {
        cursor: pointer;
        font-size: 20px;
        padding: 0 10px;
        color: ${$color_key_color};
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        padding: 5%;
      }
    `;
  }};
`;

export const ModalContent = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_white = Theme.palette.$color_base_white;

    return css`
      position: relative;
      top: -5%;
      width: auto;
      background-color: ${$color_base_white};
      box-shadow: 0px 10px 10px ${$color_base_line};
      /* border-radius: 16px; */

      width: 80%;
    `;
  }};
`;

const StyledModal = styled.div.attrs((props) => ({}))<ModalPropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_line = Theme.palette.$color_base_line;

    const $is_open = props.openState ? 'flex' : 'none';

    return css`
      width: 100%;
      height: 100vh;

      position: fixed;
      z-index: 99999;

      top: 0;
      left: 0;
      right: 0;

      display: ${$is_open};
      justify-content: center;
      align-items: center;

      background-color: ${$color_base_line};
    `;
  }};
`;

export default StyledModal;
