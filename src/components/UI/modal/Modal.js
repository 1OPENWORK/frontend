import React, { useState } from 'react';
import {StyledModal, ModalContent} from './Modal.styled'

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose}>
      <ModalContent>{children}</ModalContent>
    </StyledModal>
  );
}

export default CustomModal