import React from "react";
import Styled from "./ModalStatus.styled";
import Error from "../../../../assets/icons/error.svg";
import Success from "../../../../assets/icons/success.svg";
import { MdOutlineCheckCircle, MdOutlineClose } from "react-icons/md";
import Colors from "../../../../constants/Colors";

const ModalStatus = ({ status, texto, onClose, modalError }) => {
  if (!modalError) {
    return null; // Não renderizar o componente se modalError for verdadeiro
  }
  return (
    <>
      <Styled.Container>
        <Styled.Img>
          {status === "sucess" ? (
            <MdOutlineCheckCircle size={48} color={Colors.PRIMARY_COLOR} />
          ) : (
            <MdOutlineClose size={48} color={Colors.RED_ERROR} />
          )}
        </Styled.Img>
        <Styled.ModalHeader
          src={status === "error" ? Error : status === "success" ? Success : ""}
        />
        <Styled.ModalBody>{texto}</Styled.ModalBody>
        <Styled.ModalButton onClick={onClose}>Fechar</Styled.ModalButton>
      </Styled.Container>
    </>
  );
};

export default ModalStatus;
