import React from "react";
import Styled from "./ModalStatus.styled";
import Error from "../../../../assets/icons/error.svg"
import Success from "../../../../assets/icons/success.svg"

const ModalStatus = ({status, texto, onClose}) => {

    const handleClickFechar = () => {
        // Executa a função de retorno onClose passada como prop
        onClose();
      };

  return <>
      <Styled.ModalHeader src={status == 'error' ? Error : status == 'success' ? Success : ''}/>
      <Styled.ModalBody>{texto}</Styled.ModalBody>
      <Styled.ModalButton onClick={handleClickFechar}>Fechar</Styled.ModalButton>
  </>;
};

export default ModalStatus;
