import React from 'react';

import ModalComponent from './modal_component';

const Modal: React.FC<any> = (props) => {
  return (
    <>
      <ModalComponent {...props}></ModalComponent>
    </>
  );
};

export default Modal;
