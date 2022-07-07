import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button, Input, Title } from 'Atoms';
import { Content } from 'Layouts';

const StyledAcademyCreate = styled.section.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_gray = Theme.palette.$color_base_gray;

    const $font_title_regular = Theme.font.$font_title_regular;
    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_body_base = Theme.font.$font_body_base;
    const $font_body_info = Theme.font.$font_body_info;

    return css`
      display: flex;
      justify-content: center;
      align-items: center;

      form {
        width: 400px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        flex-flow: column;

        ${Title} {
          width: 100%;
          margin: 20px 0;
        }

        div {
          margin: 10px 0;
        }

        a {
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          color: ${$color_base_black};
        }

        .detail-wrapper {
          width: 100%;

          span {
            display: inline-block;
            margin-bottom: 6px;
            ${$font_body_info};
          }
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
        form {
          width: 90%;
        }
      }
    `;
  }};
`;

export default StyledAcademyCreate;
