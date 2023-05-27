import React, { useState } from "react";
import {
  StyledModal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalClosedButton,
} from "./Modal.styled";

const CustomModal = ({ isOpen, onClose, children, tamanho }) => {

  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose}>
      <ModalContent tamanho={tamanho}>{children}</ModalContent>
    </StyledModal>
  );
};

export default CustomModal;
