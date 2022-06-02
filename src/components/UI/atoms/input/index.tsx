import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import InputComponent from './input.component';

export interface InputPropsType {
  className?: string;
  placeholder: string;
  type:
    | 'text'
    | 'username'
    | 'password'
    | 'current-password'
    | 'new-password'
    | 'email'
    | 'number'
    | string;
  value: string | number | null;
  onChange: <T>(T: any) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  isFail?: boolean;
  step?: number;
  min?: number;
  max?: number;
}

const Input: React.FC<InputPropsType> = (
  props,
  {
    className,
    value,
    onChange,
    placeholder,
    type,
    name,
    required,
    disabled,
    isFail,
  }: InputPropsType,
) => {
  return (
    <>
      <InputComponent
        required={required}
        disabled={disabled}
        isFail={isFail}
        {...props}
      />
    </>
  );
};

export default Input;
