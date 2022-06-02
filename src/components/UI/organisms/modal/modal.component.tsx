import React from 'react';

import { AosWrapper } from 'Hoc';

const ModalComponent: React.FC<any> = ({}) => {
  return (
    <>
      <AosWrapper animation="fade-up">
        <h1>Modal</h1>
      </AosWrapper>
    </>
  );
};

export default ModalComponent;
