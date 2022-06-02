import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import StyledButton from 'Atoms/button/button.styled';
import StyledListTab from 'Molecules/listTab/listTab.styled';

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
      border-top: 2px solid ${$color_key_light};
      border-bottom: 2px solid ${$color_key_light};
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

      ${StyledButton} {
        width: calc(50% - 20px);
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

      ${StyledButton} {
        width: calc(50% - 20px);
        margin: 10px;
        border-radius: 32px;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        width: 90%;
        ${StyledButton} {
          width: 90%;
          margin: 10px;
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
    const $mobile_max_width = Theme.media.$mobile_max_width;
    return css`
      height: 100vh;
      max-height: 100vh;
      background-color: ${$color_base_white};

      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      ${StyledListTab} {
        width: 180px;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        gap: 20px;
      }
    `;
  }}
`;

export default StyledQuiz;
