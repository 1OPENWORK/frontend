import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeConversationActive,
  changeConversationRecentes,
  changeMessages,
  changeMessagesPendentes,
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

const SideBar = ({
  socket,
  handleLoading,
  handleMessageActive,
  atualizarUltimaMessage,
  setDadosConversa,
  visualized,
  setVisualized,
}) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [friends, setFriends] = useState([]);
  const [conversationsRecentes, setConversationsRecentes] = useState([]);
  const [indexActive, setIndexActive] = useState(-1);
  const [dados, setDados] = useState({});
  const [on, setOn] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setFriends(websocket.friends);
    const prevList = [...websocket.conversationRecents];
    const descendingList = prevList
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .filter((item, index, self) => {
        const idEnviou = item.idEnviou;
        for (let i = 0; i < index; i++) {
          if (self[i].idEnviou === idEnviou) {
            return false;
          }
        }
        return true;
      });
    setConversationsRecentes(descendingList);
  }, [websocket, dados]);

  const handle = (dados, index) => {
    handleLoading(true);
    handleMessageActive(true);
    setIndexActive(index);
    atualizarVisualized(dados.idFriend, websocket.idUser, dados.id);

    dispatch(
      changeConversationActive({
        active: dados,
      })
    );

    socket.emit(
      "listMessagesPerson",
      { otherPeploe: dados.id, myId: websocket.idUser },
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

  const atualizarVisualized = (idFriend, myId, idSender) => {
    socket.emit("messagesVisualized", { idFriend, myId }, (messagePedentes) => {
      dispatch(
        changeMessagesPendentes({
          messages: messagePedentes,
        })
      );
    });

    socket.emit("atualizarStateMessageActive", { idFriend, myId, idSender });

    return () => socket.off("messagesVisualized");
  };

  useEffect(() => {
    const idConversationActive = dados.id;

    socket.on("newMessage", (dados) => {
      const response = dados;

      const idSender = response.dados.idSender;

      if (idConversationActive === idSender) {
        dispatch(
          changeNewMessage({
            messages: response.dados,
          })
        );

        // atualizar o visualization
        atualizarVisualized(
          response.dados.idFriend,
          response.dados.idReceiver,
          idSender
        );
      } else {
        dispatch(
          changeMessagesPendentes({
            messages: response.messagePedentes,
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

  useEffect(() => {
    socket.on("atualizandoState", (dados) => {
      setVisualized(Math.random() * 100 + 1 - 1);

      if (websocket.conversationActive === dados.idReciver) {
        dispatch(
          changeMessages({
            messages: dados.messages,
          })
        );
      }
    });
  }, [on, dados]);

  useEffect(() => {
    setVisualized(Math.random() * 100 + 1 - 1);
    setDadosConversa(dados);
  }, [dados]);

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
            <OpcaoMenuLateral key={index} onClick={() => handle(d, index)}>
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
              atualizarUltimaMessage={atualizarUltimaMessage}
            />
          ))}
        </Styled.ListPersons>
      </Styled.DivColumn>
    </Styled.Container>
  );
};
export default SideBar;
