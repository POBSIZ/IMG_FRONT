import React, { ReactNode } from 'react';

export interface ModalPropsType {
  children?: ReactNode;
  visible: boolean;
  position?: 'top' | 'bottom';
  width: number | string;
  height: number | string;
}