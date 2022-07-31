import React, { useCallback, useState, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

export interface FilePropsType extends Partial<HTMLInputElement> {
  name: string;
  onChange?: (...args: any) => void;
}

export const StyledFile = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_base_line = Theme.palette.$color_base_line;
    const $color_base_LightGray = Theme.palette.$color_base_LightGray;
    const $color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_white = Theme.palette.$color_base_white;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_failure = Theme.palette.$color_failure;

    return css`
      width: 100%;
      display: flex;
      gap: 10px;

      span,
      label {
        height: 44px;
        display: flex;
        align-items: center;
        padding: 0 10px;
      }

      span {
        width: 80%;
        color: ${$color_base_gray};
        background-color: ${$color_base_LightGray};
        border: 1px solid ${$color_base_line};
      }

      label {
        width: 20%;
        justify-content: center;
        color: ${$color_base_white};
        background-color: ${$color_key_color};
        cursor: pointer;
      }

      input[type='file'] {
        display: none;
      }
    `;
  }};
`;

const File: React.FC<FilePropsType> = (props) => {
  const [fileName, setFileName] = useState<string | null>(
    '파일을 선택해주세요.',
  );

  const handleFile = useCallback((e) => {
    setFileName(e.target.files[0].name);
  }, []);

  return (
    <StyledFile>
      <span>{fileName}</span>
      <label htmlFor={props.name}>파일찾기</label>
      <input
        type="file"
        id={props.name}
        name={props.name}
        onChange={(e) => {
          handleFile(e);
          if (props.onChange) {
            props.onChange(e);
          }
        }}
      />
    </StyledFile>
  );
};

export default File;
