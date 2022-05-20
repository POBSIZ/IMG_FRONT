// crd
import React from 'react';

import MoveComponent from './moveButton_component';

export interface MoveButtonPropsType {
  children: string;
  href: string;
  radius: 'none' | '4' | '8' | '16' | '32' | '64';
  height: string;
  width: string;
  backColor: 'none' | 'primary' | 'gradient';
}

const MoveButton: React.FC<MoveButtonPropsType> = (
  props,
  { children, href, radius, height, width, backColor }: MoveButtonPropsType,
) => {
  return (
    <>
      <MoveComponent {...props} />
    </>
  );
};

export default MoveButton;
