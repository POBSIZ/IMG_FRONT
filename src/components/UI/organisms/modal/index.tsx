import React from 'react';

import ModalComponent from './modal.component';

const Modal: React.FC<any> = (props) => {
  return (
    <>
      <ModalComponent {...props}></ModalComponent>
    </>
  );
};

export default Modal;
