import styled from "styled-components";

const StyledToastNewMessage = {
  Item: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #20252b;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 16px;
    margin-bottom: 16px;
    gap: 0.5rem;
    overflow: hidden; // Esconde o texto que ultrapassa o comprimento máximo
    text-overflow: ellipsis; // Exibe uma elipse (...) no final do texto que ultrapassa o comprimento máximo
    & > p {
      margin: 0px;
      margin-right: 16px;
      max-width: 150px;
      width: 150px; // Limita a largura máxima da mensagem para evitar que ela ultrapasse o container do toast
      white-space: nowrap; // Evita que a mensagem seja quebrada em várias linhas
      overflow: hidden; // Esconde o texto que ultrapassa o comprimento máximo
      text-overflow: ellipsis; // Exibe uma elipse (...) no final do texto que ultrapassa o comprimento máximo
    }
  `,
};

export const ToastNewMessageContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 350px;
  z-index: 9999;
`;

export default StyledToastNewMessage;
