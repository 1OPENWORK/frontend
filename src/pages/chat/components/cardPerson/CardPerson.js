import { Avatar } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectedWebSocket } from "../../../../store/reducers/WebSocketSlice";

import Styled from "./CardPerson.styled";

const CardPerson = ({ dados, handleClick, atualizarUltimaMessage }) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [qtdMessagePendente, setQuantidadeMessaPendente] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [message, setMessage] = useState("");
  const [visualizado, setVisualizado] = useState(false);
  const [create, setCreated] = useState("");

  function listarUltimaMessage() {
    const message = websocket.conversationRecents[0].message;
    setMessage(message);
    setVisualizado(dados.isVisualizado === 0 ? false : true);
    setCreated(moment(dados.createdAt).calendar());

    const qtdMessagePendente = [...websocket.messagesPendentes];

    for (const item of qtdMessagePendente) {
      if (item.idFriend === dados.idFriend) {
        setQuantidadeMessaPendente(item.qtdNaoVisualizados);
        return;
      }
    }
    setQuantidadeMessaPendente(0);
  }

  function selectedPerson(dados) {
    const myID = websocket.idUser;

    if (myID === dados.idEnviou) {
      handleClick({
        id: dados.idRecebeu,
        img: dados.imagemRecebeu,
        nome: dados.nomeRecebeu,
        message: dados.message,
        socketId: dados.socketRecebeu,
        createdAt: dados.createdAt,
        idFriend: dados.idFriend,
      });
    } else {
      handleClick({
        id: dados.idEnviou,
        img: dados.imagemEnviou,
        nome: dados.nomeEnviou,
        message: dados.message,
        socketId: dados.socketEnviou,
        createdAt: dados.createdAt,
        idFriend: dados.idFriend,
      });
    }
  }

  useEffect(() => {
    const myID = websocket.idUser;
    if (myID === dados.idEnviou) {
      setName(dados.nomeRecebeu);
      setImg(dados.imagemRecebeu);

    } else {
      setName(dados.nomeEnviou);
      setImg(dados.imagemEnviou);
    }

    listarUltimaMessage();

  }, [
    dados,
    websocket.conversationRecents,
    websocket.messages,
    websocket.messagesPendentes,
    atualizarUltimaMessage,
    handleClick,
  ]);

  return (
    <Styled.Container onClick={() => selectedPerson(dados)}>
      <Avatar src={img} sx={{ width: 60, height: 60 }} />
      <Styled.CardContent>
        <Styled.Header>
          <Styled.UserName>{name}</Styled.UserName>
          <Styled.MessageInfo>
            <Styled.MessageTime>{create}</Styled.MessageTime>
            {qtdMessagePendente > 0 && (
              <Styled.MessagesPendente>
                {qtdMessagePendente}
              </Styled.MessagesPendente>
            )}
          </Styled.MessageInfo>
        </Styled.Header>
        <Styled.MessageText>
          {visualizado && dados.idEnviou === websocket.idUser ? (
            <Styled.SeeIcon>
              <ion-icon name="checkmark-done-outline"></ion-icon>
            </Styled.SeeIcon>
          ) : !visualizado && dados.idEnviou === websocket.idUser ? (
            <ion-icon
            name={"checkmark-outline"}
            
          ></ion-icon>
          ) : ("")}
          {dados.message ?? message}
        </Styled.MessageText>
      </Styled.CardContent>
    </Styled.Container>
  );
};

export default CardPerson;
