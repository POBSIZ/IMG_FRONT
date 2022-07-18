import React from 'react';

import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faX, faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledModal, {
  ModalContent,
  ModalHeader,
  ModalBody,
} from './modal.styled';

import { AosWrapper } from 'Hoc';

import { ModalPropsType } from '.';

const ModalComponent: React.FC<ModalPropsType> = (props) => {
  return (
    <StyledModal {...props}>
      <ModalContent>
        <ModalHeader>
          <h2>{props.title}</h2>
          <FontAwesomeIcon icon={faCircleXmark} onClick={props.setOpenState} />
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </ModalContent>
    </StyledModal>
  );
};

export default ModalComponent;
