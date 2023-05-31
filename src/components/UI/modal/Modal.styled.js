import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: ${(props) => (props.tamanho ? props.tamanho : "1020px")};
  height: ${(props) => (props.altura ? props.altura : "568px")};
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 20px;
`;

export const ModalClosedButton = styled.button`
  color: #d9d9d9;
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-family: nunito;
`;

export const ModalTitle = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
`;
