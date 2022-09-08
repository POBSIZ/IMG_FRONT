import { ReactElement, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';
import Link from 'next/link';

export interface MovePropsType extends Partial<ReactElement> {
  children: any;
  backColor: 'primary' | 'gradient' | 'black' | 'red' | 'green';
  isDisabled?: boolean;
  href: string;
  style?: CSSProperties;
}

export const StyledMove = styled.div.attrs((props: MovePropsType) => ({
  disabled: props.isDisabled,
}))<MovePropsType>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;
    const $color_success = Theme.palette.$color_success;

    const bgColor =
      props.backColor === 'primary'
        ? `background-color: ${$color_key_color};`
        : props.backColor === 'black'
        ? `background-color: ${$color_base_black};`
        : props.backColor === 'red'
        ? `background-color: ${$color_failure};`
        : props.backColor === 'green'
        ? `background-color: ${$color_success};`
        : `background-color: ${$color_base_black};`;

    return css`
      display: flex;
      justify-content: center;
      align-items: center;

      background: ${$color_base_black};
      ${bgColor};
      background-repeat: no-repeat;
      width: 100%;
      height: 45px;
      border: none;
      padding: 5px 10px;
      outline: none;
      cursor: pointer;

      color: #fff;
      font-size: 1em;
      font-weight: 500;
      text-decoration: none;
    `;
  }};
`;

const Move: React.FC<MovePropsType> = (props) => {
  return (
    <Link href={props.href}>
      <StyledMove {...props}>{props.children}</StyledMove>
    </Link>
  );
};

export default Move;
