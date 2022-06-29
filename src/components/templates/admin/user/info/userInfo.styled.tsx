import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

import { Button, Input, Title } from 'Atoms';
import { Content } from 'Layouts';

const StyledUserInfo = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;

    const $font_title_regular = Theme.font.$font_title_regular;

    return css``;
  }};
`;

export default StyledUserInfo;
