import React from 'react';
import SwitchComponent from './switch.component';
import { SetStateType } from 'Types';

export interface SwitchPropsType {
  name: string;
  switchState: boolean;
  handleSwitch: SetStateType;
  size: 'S' | 'M' | 'L';
}

const Switch: React.FC<SwitchPropsType> = (props: SwitchPropsType) => {
  return (
    <>
      <SwitchComponent {...props} />
    </>
  );
};

export default Switch;
