import { Avatar } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectedWebSocket } from "../../../../store/reducers/WebSocketSlice";

import Styled from "./CardPerson.styled";

const CardPerson = ({ dados, handleClick, atualizarUltimaMessage }) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [message, setMessage] = useState("");
  const [visualizado, setVisualizado] = useState(true);
  const [create, setCreated] = useState("");

  function listarUltimaMessage() {
    const message = websocket.conversationRecents[0].message;
    setMessage(message);
    setCreated(moment(dados.createdAt).calendar());
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
        createdAt: dados.createdAt
      });
    } else {
      handleClick({
        id: dados.idEnviou,
        img: dados.imagemEnviou,
        nome: dados.nomeEnviou,
        message: dados.message,
        socketId: dados.socketEnviou,
        createdAt: dados.createdAt
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
    websocket.changeConversationRecentes,
    websocket.changeMessages,
    atualizarUltimaMessage,
    handleClick
  ]);



  return (
    <Styled.Container onClick={() => selectedPerson(dados)}>
      <Avatar src={img} sx={{ width: 60, height: 60 }} />
      <Styled.CardContent>
        <Styled.Header>
          <Styled.UserName>{name}</Styled.UserName>
          <Styled.MessageInfo>
            <Styled.MessageTime>{create}</Styled.MessageTime>
          </Styled.MessageInfo>
        </Styled.Header>
        <Styled.MessageText>
          {visualizado && dados.idEnviou === websocket.idUser && (
            <Styled.SeeIcon>
              <ion-icon name="checkmark-done-outline"></ion-icon>
            </Styled.SeeIcon>
          )}
          {dados.message ?? message}
        </Styled.MessageText>
      </Styled.CardContent>
    </Styled.Container>
  );
};

export default CardPerson;
