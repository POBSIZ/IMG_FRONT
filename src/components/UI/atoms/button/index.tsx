import React from 'react';
import ButtonComponent from './button.component';

export interface ButtonPropsType {
  children: any;
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
