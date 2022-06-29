import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

const StyledLoader = styled.div.attrs((props) => ({}))<any>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_success = Theme.palette.$color_success;
    const $color_warning = Theme.palette.$color_warning;
    const $color_failure = Theme.palette.$color_failure;
    const $color_base_black = Theme.palette.$color_base_black;
    const mediaMinMaxWidth = Theme.media.$min_max_width;

    return css`
      /* position: fixed;
      z-index: 99999; */
      width: 100%;
      height: calc(70vh);
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(4px);

      .loader {
        color: ${$color_key_color};
        font-size: 90px;
        text-indent: -9999em;
        overflow: hidden;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        margin: 72px auto;
        position: relative;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
        animation: load6 1.7s infinite ease, round 1.7s infinite ease;
      }

      @-webkit-keyframes load6 {
        0% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
            -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
            -0.297em -0.775em 0 -0.477em;
        }
        20% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
            -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
            -0.749em -0.34em 0 -0.477em;
        }
        38% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
            -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
            -0.82em -0.09em 0 -0.477em;
        }
        100% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
      }

      @keyframes load6 {
        0% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
            -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
            -0.297em -0.775em 0 -0.477em;
        }
        20% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
            -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
            -0.749em -0.34em 0 -0.477em;
        }
        38% {
          box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
            -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
            -0.82em -0.09em 0 -0.477em;
        }
        100% {
          box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
      }

      @-webkit-keyframes round {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @keyframes round {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @media screen and (max-width: ${mediaMinMaxWidth}) {
      }
    `;
  }};
`;

export default StyledLoader;
