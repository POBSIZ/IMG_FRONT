import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

interface CheckPropsType extends Partial<HTMLInputElement> {
  type: 'radio' | 'checkbox';
  id: string | undefined;
  name: string | undefined;
  checked?: boolean;
  scale: 'S' | 'M' | 'L';
  stopProp?: boolean;
}

const sizeTable = {
  S: {
    size: '16px',
  },
  M: {
    size: '20px',
  },
  L: {
    size: '24px',
  },
};

const StyledCheck = styled.label.attrs((props) => ({}))<{
  scale: 'S' | 'M' | 'L';
}>`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_key_color = Theme.palette.$color_key_color;

    return css`
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      width: ${sizeTable[props.scale].size};
      height: ${sizeTable[props.scale].size};
      border: 2px solid ${$color_key_color};
      /* border-radius: 100%; */

      input {
        cursor: pointer;
        appearance: none;
        margin: 0;

        &:checked {
          width: calc(${sizeTable[props.scale].size} / 2);
          height: calc(${sizeTable[props.scale].size} / 2);
          background-color: ${$color_key_color};
        }
      }
    `;
  }};
`;

const Check: React.FC<CheckPropsType> = (props) => {
  const [isCheck, setIsCheck] = useState<boolean | undefined>(false);

  const handleClick = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    setIsCheck((state) => !state);
  };

  useEffect(() => {
    setIsCheck(props.checked);
  }, []);

  return (
    <StyledCheck scale={props.scale} htmlFor={props.id}>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        checked={isCheck}
        onChange={handleClick}
        onClick={() => {}}
      />
    </StyledCheck>
  );
};

export default Check;
