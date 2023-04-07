import { Avatar, AvatarGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ImageCircule from "../../messages/components/ImageCircule/ImageCircule";
import Styled from "./ModalNewConversa.styled";
import { useSelector } from "react-redux";
import { selectedWebSocket } from "../../../../../store/reducers/WebSocketSlice";
import { handleImgGroup } from "../../../../../store/actions/MicroService";

const ModalNewConversa = ({ show, handleClick }) => {
  const { websocket } = useSelector(selectedWebSocket);
  // Informações
  const [img, setImg] = useState("");

  // funcionalidades
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClickOverlay = event => {
    setShowOverlay(!showOverlay);
  };

  const handleGroup = async () => {
    const bodyFormData = new FormData();

    bodyFormData.append("img", img);

    const { imageFile } = await handleImgGroup(bodyFormData);
  };

  return (
    <Styled.Modal
      show={show}
      fullscreen={true}
      onHide={() => {
        handleClick(false);
        setShowOverlay(false);
      }}
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
              onClick={() => {
                handleClick(false);
                handleClickOverlay(false);
              }}
              name="close-outline"
              style={{ cursor: "pointer" }}
            ></ion-icon>
          </Styled.DivBetween>
          <Styled.Body></Styled.Body>
        </Styled.Container>
      </Modal.Body>
    </Styled.Modal>
  );
};

export default ModalNewConversa;
