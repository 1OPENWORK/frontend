import React, { useState } from "react";
import {
  StyledModal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalClosedButton,
} from "./Modal.styled";

const CustomModal = ({ isOpen, onClose, children, tamanho, altura }) => {

  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose}>
      <ModalContent tamanho={tamanho} altura={altura}>{children}</ModalContent>
    </StyledModal>
  );
};

export default CustomModal;
