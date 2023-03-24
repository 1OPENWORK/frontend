import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeConversationActive,
  changeConversationRecentes,
  changeMessages,
  changeNewMessage,
  selectedWebSocket,
} from "../../../../store/reducers/WebSocketSlice";
import CardPerson from "../cardPerson/CardPerson";
import Styled, {
  DivOpcaoLateral,
  MenuLateral,
  OpcaoMenuLateral,
  TitleOpcaoMenuLateral,
} from "./SideBar.styled";
import Logo from "../../../../assets/imgs/logo.svg";
import Colors from "../../../../constants/Colors";

const SideBar = ({ socket, handleLoading, handleMessageActive }) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [friends, setFriends] = useState([]);
  const [conversationsRecentes, setConversationsRecentes] = useState([]);
  const [indexActive, setIndexActive] = useState(-1);
  const [dados, setDados] = useState({});
  const [on, setOn] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setFriends(websocket.friends);
    setConversationsRecentes(websocket.conversationRecents);
  }, [websocket]);

  const handle = (dados, index) => {
    handleLoading(true);
    handleMessageActive(true);
    setIndexActive(index);

    dispatch(
      changeConversationActive({
        active: dados,
      })
    );

    const idOtherPerson =
      websocket.idUser === dados.idEnviou ? dados.idRecebeu : dados.idEnviou;

    socket.emit(
      "listMessagesPerson",
      { otherPeploe: idOtherPerson, myId: websocket.idUser },
      (dados) => {
        dispatch(
          changeMessages({
            messages: dados,
          })
        );
      }
    );

    setDados(dados);
    handleLoading(false);
  };

  useEffect(() => {
    const MessageActive = dados.idEnviou;

    socket.on("newMessage", (dados) => {
      const response = dados;

      const idSender = response.dados.idSender;

      if (MessageActive === idSender) {
        dispatch(
          changeNewMessage({
            messages: response.dados,
          })
        );
      }

      dispatch(
        changeConversationRecentes({
          conversations: response.listRecentes,
        })
      );
    });

    return () => socket.off("newMessage");
  }, [on, dados]);

  return (
    <Styled.Container>
      <MenuLateral>
        <Styled.Img src={Logo} />
        <OpcaoMenuLateral>
          <ion-icon
            name="person-add-outline"
            style={{ color: Colors.WHITE01, fontSize: 30, cursor: "pointer" }}
          ></ion-icon>
          <DivOpcaoLateral>
            <TitleOpcaoMenuLateral>Adicionar</TitleOpcaoMenuLateral>
          </DivOpcaoLateral>
        </OpcaoMenuLateral>
        <OpcaoMenuLateral>
          <ion-icon
            name="people-outline"
            style={{ color: Colors.WHITE01, fontSize: 30, cursor: "pointer" }}
          ></ion-icon>
          <DivOpcaoLateral>
            <TitleOpcaoMenuLateral>Novo grupo</TitleOpcaoMenuLateral>
          </DivOpcaoLateral>
        </OpcaoMenuLateral>
        <OpcaoMenuLateral>
          <ion-icon
            name="list-outline"
            style={{ color: Colors.WHITE01, fontSize: 30, cursor: "pointer" }}
          ></ion-icon>
          <DivOpcaoLateral>
            <TitleOpcaoMenuLateral>Atividades</TitleOpcaoMenuLateral>
          </DivOpcaoLateral>
        </OpcaoMenuLateral>
        <OpcaoMenuLateral>
          <ion-icon
            name="chatbox-ellipses-outline"
            style={{ color: Colors.WHITE01, fontSize: 30, cursor: "pointer" }}
          ></ion-icon>
          <DivOpcaoLateral>
            <TitleOpcaoMenuLateral>Conversas</TitleOpcaoMenuLateral>
          </DivOpcaoLateral>
        </OpcaoMenuLateral>
        <TitleOpcaoMenuLateral style={{ color: Colors.WHITE01, margin: 20 }}>
          Conexões
        </TitleOpcaoMenuLateral>
        <Styled.ConexoesMenuLateral>
          {friends.map((d, index) => (
            <OpcaoMenuLateral onClick={() => handle(d, index)}>
              <Avatar src={d.img} />
              <DivOpcaoLateral>
                <TitleOpcaoMenuLateral>{d.nome}</TitleOpcaoMenuLateral>
              </DivOpcaoLateral>
            </OpcaoMenuLateral>
          ))}
        </Styled.ConexoesMenuLateral>
      </MenuLateral>
      <Styled.DivColumn>
        <Styled.Header>
          <Styled.TitleHeader>Conversas Recentes</Styled.TitleHeader>
          <ion-icon
            name="chatbox-ellipses-outline"
            style={{ color: Colors.WHITE01, fontSize: 30 }}
          ></ion-icon>
        </Styled.Header>
        <Styled.ListPersons>
          {conversationsRecentes.map((d, index) => (
            <CardPerson
              dados={d}
              key={index}
              handleClick={handle}
              index={index}
              active={indexActive === index}
            />
          ))}
        </Styled.ListPersons>
      </Styled.DivColumn>
    </Styled.Container>
  );
};
export default SideBar;
