import styled from 'styled-components';
import Modal from 'react-modal';


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
  width: 1020px;
height: 568px;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;