import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Styled from "./ModalGroup.styled";

const ModalGroup = ({ show, handleClick }) => {
  const [img, setImg] = useState("");
  const [nomeGroup, setNomeGroup] = useState("");

  return (
    <Styled.Modal
      show={show}
      fullscreen={true}
      onHide={() => handleClick(false)}
    >
      <Modal.Body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <Styled.Container>
          <Styled.DivBetween>
            <ion-icon
              onClick={() => handleClick(false)}
              name="close-outline"
              style={{ cursor: "pointer" }}
            ></ion-icon>
          </Styled.DivBetween>
          Woohoo, you're reading this text in a modal!
        </Styled.Container>
      </Modal.Body>
    </Styled.Modal>
  );
};

export default ModalGroup;
