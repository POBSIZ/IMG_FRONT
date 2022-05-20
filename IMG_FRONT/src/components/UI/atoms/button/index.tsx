import React from 'react';
import ButtonComponent from './button_component';

export interface ButtonPropsType {
  children: string;
  backColor: 'primary' | 'gradient' | 'black' | 'red';
  isDisabled?: boolean;
  onClick?: () => {} | void;
}

const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  return (
    <>
      <ButtonComponent {...props} />
    </>
  );
};

export default Button;
