import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Content } from 'Layouts';
import { Title } from 'Atoms';
import { StyledFile } from 'Atoms/file';

const StyledAcademyQuizList = styled.article.attrs((props) => ({}))`
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
      .btns {
        margin-top: 10px;

        display: flex;
        gap: 10px;
      }

      @media screen and (max-width: ${$mobile_max_width}) {
      }
    `;
  }};
`;

export default StyledAcademyQuizList;
