import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Content } from 'Layouts';
import { Title } from 'Atoms';
import { StyledFile } from 'Atoms/file';

const StyledAdminUpload = styled.article.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $mobile_max_width = Theme.media.$mobile_max_width;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_gray = Theme.palette.$color_base_gray;

    const $font_title_medium = Theme.font.$font_title_medium;
    const $font_body_head = Theme.font.$font_body_head;
    const $font_body_base = Theme.font.$font_body_base;

    return css`
      h1 {
        margin: 20px 0;
      }

      ${StyledFile} {
        margin-bottom: 10px;
      }

      ${Content} {
        margin: 20px 0;
        ul {
          padding: 0;
          list-style: none;

          li {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin: 12px 0;
            padding-bottom: 12px;
            border-bottom: 1px solid ${$color_base_line};

            &:first-child {
              ${$font_body_head};
            }
          }
        }
      }

      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

export default StyledAdminUpload;
