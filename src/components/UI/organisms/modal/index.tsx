import React from 'react';

import ModalComponent from './modal.component';

export interface ModalPropsType {
  title: string;
  children: React.ReactElement;
  openState: boolean;
  setOpenState: React.MouseEventHandler<SVGSVGElement>;
}

const Modal: React.FC<ModalPropsType> = (props) => {
  return <ModalComponent {...props} />;
};

export default Modal;
