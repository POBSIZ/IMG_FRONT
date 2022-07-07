import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import { Button } from 'Atoms';
import StyledListTab from 'Molecules/listTab/listTab.styled';
import StyledModal, {
  ModalBody,
  ModalContent,
} from 'Organisms/modal/modal.styled';

export const QuizTitle = styled.h1.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_key_light = Theme.palette.$color_key_light;
    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $font_body_base = Theme.font.$font_body_base;
    return css`
      ${$font_body_base};
      padding: 4px 0;
      min-width: 100px;
      text-align: center;
      border-top: 2px solid ${$color_key_color};
      border-bottom: 2px solid ${$color_key_color};
    `;
  }}
`;

export const QuizControl = styled.ul.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;
    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      list-style: none;
      padding: 0;
      margin: 0;
      width: 30%;
      text-align: center;

      ${Button} {
        width: calc(50% - 20px);
        height: auto;
        margin: 10px;
        border-radius: 32px;
        svg {
          font-size: 24px;
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        width: 90%;
      }
    `;
  }}
`;

export const QuizOptions = styled.ul.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;

    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      list-style: none;
      padding: 0;
      margin: 0;
      width: 50%;
      text-align: center;

      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 20px;

      ${Button} {
        width: 100%;
        border-radius: 32px;
        color: ${$color_base_black} !important;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        width: 90%;
        gap: 10px;

        ${Button} {
          width: calc(100% - 20px);
        }
      }
    `;
  }}
`;

export const QuizWord = styled.div.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;
    return css`
      text-align: center;
      h1,
      h3 {
        margin: 0;
      }
      h1 {
        margin-bottom: 10px;
      }
    `;
  }}
`;

const StyledQuiz = styled.div.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_gray = Theme.palette.$color_base_gray;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $font_body_base = Theme.font.$font_body_base;
    const $font_body_info = Theme.font.$font_body_info;
    return css`
      height: 80vh;
      max-height: 100vh;
      background-color: ${$color_base_white};

      display: flex;
      flex-wrap: wrap;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      ${ModalContent} {
        width: 50%;
        ${ModalBody} {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          gap: 10px;

          section {
            display: flex;
            flex-flow: row;
            justify-content: center;
            align-items: center;
            gap: 40px;

            div {
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;

              svg {
                font-size: 40px;
                color: ${$color_key_color};
              }

              span {
                margin-top: 10px;
                ${$font_body_info};
                color: ${$color_base_gray};

                &:last-child {
                  margin-top: 4px;
                  ${$font_body_base};
                  color: ${$color_base_black};
                }
              }
            }
          }
        }
      }

      ${StyledListTab} {
        width: 180px;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        gap: 20px;

        ${ModalContent} {
          width: 80%;
        }
      }
    `;
  }}
`;

export default StyledQuiz;
