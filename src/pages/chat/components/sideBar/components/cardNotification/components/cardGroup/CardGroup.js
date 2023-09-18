import React, { useEffect, useState } from "react";
import Styled from "./CardGroup.styled";
import { useDispatch } from "react-redux";
import {
  changeAllNotifications,
  changeConversationRecentes,
  changeFriends,
  changeMessagesPendentes,
  selectedWebSocket,
} from "../../../../../../../../store/reducers/WebSocketSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { AmbienteBackend } from "../../../../../../../../hooks/Ambiente";
import { useSelector } from "react-redux";
import { ToastSuccess } from "../../../../../../../../helpers/Toast";

const CardGroup = ({ dados, socket }) => {
  const dispatch = useDispatch();
  const { websocket } = useSelector(selectedWebSocket);
  const [imgUser, setImgUser] = useState("");

  const fetchImage = async () => {
    axios
      .get(AmbienteBackend() + "/api/usuarios/imagem/" + dados.idRelacionado)
      .then((response) => {
        setImgUser(response.data.image);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Messages.js:42 ~ ).then ~ error:", error);
      });
  };

  const handleClick = (value) => {
    const isAccpty = value ? true : false;

    socket.emit(
      "eventConexao",
      {
        idNotification: dados.id,
        idReceiver: dados.idReceiver,
        idSender: dados.idSender,
        isAccpty,
      },
      (callback) => {}
    );

    if (isAccpty) {
      ToastSuccess("Você aceitou o pedido de conexão.");
    }

    const listaNotification = websocket.notifications.filter(
      (n) => !n.id === dados.id
    );

    dispatch(
      changeAllNotifications({
        notifications: listaNotification,
      })
    );
  };


  

  useEffect(() => {
    fetchImage();
  }, [dados]);

  return (
    <Styled.Container>
      {/* <Styled.Imagem img={img} /> */}
      <Styled.Divisor paddingLeft={"16px"} paddingTop={"16px"}>
        <Styled.ImgUser src={imgUser} />
        <Styled.Title>{dados.nomeSender}, te convidou.</Styled.Title>
      </Styled.Divisor>
      <Styled.Divisor width={"60%"} justifyContent={"center"}>
        <Styled.Title>{dados.description}</Styled.Title>
      </Styled.Divisor>
      <Styled.Divisor justifyContent={"center"}>
        <Styled.Button onClick={() => handleClick(true)} success={true}>
          <ion-icon name="checkmark-outline"></ion-icon> Aceitar
        </Styled.Button>
        <Styled.Button onClick={() => handleClick(false)}>
          <ion-icon name="close-outline"></ion-icon> Recusar
        </Styled.Button>
      </Styled.Divisor>
    </Styled.Container>
  );
};

export default CardGroup;
