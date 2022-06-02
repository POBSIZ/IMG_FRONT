import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const StyledFooter = styled.footer.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_white = Theme.palette.$color_base_white;

    const $font_title_big = Theme.font.$font_title_big;
    const $font_body_info = Theme.font.$font_body_info;
    const $font_prop_xsmall = Theme.font.$font_prop_xsmall;

    const $tablet_max_width = Theme.media.$tablet_max_width;

    return css`
      min-height: 300px;
      padding: 0 5%;
      box-shadow: 0 0 10px rgba(70, 70, 70, 0.3);
      background-color: ${$color_base_black};
      color: ${$color_base_white};

      display: flex;
      justify-content: space-between;
      flex-flow: row;
      align-items: center;
      flex-wrap: wrap;

      .footer-info {
        display: flex;
        flex-flow: row;
        text-align: start;
        justify-content: center;
        gap: 40px;

        .footer-logo {
          ${$font_title_big};
          margin: 0;
        }

        .footer-desc {
          display: flex;
          flex-flow: column;
          align-items: start;
          gap: 10px;
          p {
            ${$font_body_info};
            margin: 0;
            span {
              margin: 0 10px;
            }
          }
          .footer-copyright {
            ${$font_prop_xsmall};
          }
        }
      }

      .footer-link {
        a {
          font-size: 35px;
          padding: 0 10px;
          color: #fff;
        }
      }

      @media screen and (max-width: ${$tablet_max_width}) {
        /* flex-flow: column; */
        .footer-info {
          flex-flow: column;
        }
      }
    `;
  }};
`;

export default StyledFooter;
