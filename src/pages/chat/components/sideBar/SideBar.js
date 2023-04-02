import { Avatar, Badge } from "@mui/material";
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
import ModalGroup from "../modal/group/ModalGroup";

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
  const [indexAbaActive, setIndexAbaActive] = useState(3);
  const [totalMessagePendentes, setTotalMessagePendentes] = useState(3);
  const [dados, setDados] = useState({});
  const [show, setShowModal] = useState(false);
  const [on, setOn] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setFriends(websocket.friends);
    const prevList = [...websocket.conversationRecents];
    const descendingList = prevList.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setConversationsRecentes(descendingList);
  }, [websocket, dados]);

  const handle = (dados, index, isSide) => {
    handleLoading(true);
    handleMessageActive(true);
    setIndexActive(index);

    if (isSide) {
      let idFriend = "";

      for (const conversationRecents of websocket.conversationRecents) {
        if (
          dados.id === conversationRecents.idEnviou ||
          dados.id === conversationRecents.idRecebeu
        ) {
          idFriend = conversationRecents.idFriend;
          break;
        }
      }

      atualizarVisualized(idFriend, websocket.idUser, dados.id);
    } else {
      atualizarVisualized(dados.idFriend, websocket.idUser, dados.id);
    }

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

      console.log(response.listRecentes);

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
    let total = 0;

    const messagesPedentes = websocket.messagesPendentes || []; // Define um valor padrão se for null ou undefined

    for (const message of messagesPedentes) {
      total += message.qtdNaoVisualizados;
    }

    setTotalMessagePendentes(total);
  }, [websocket]);

  useEffect(() => {
    setVisualized(Math.random() * 100 + 1 - 1);
    setDadosConversa(dados);
  }, [dados]);

  return (
    <Styled.Container>
      <ModalGroup socket={socket} show={show} handleClick={setShowModal} />
      <MenuLateral>
        <Styled.Img src={Logo} />
        <OpcaoMenuLateral onClick={() => setIndexAbaActive(1)}>
          {indexAbaActive !== 1 ? (
            <Badge color="primary" badgeContent={0} showZero>
              <ion-icon
                name="notifications-outline"
                style={{
                  color: Colors.WHITE01,
                  fontSize: 30,
                  cursor: "pointer",
                }}
              ></ion-icon>
            </Badge>
          ) : (
            <ion-icon
              name="notifications-outline"
              style={{ color: Colors.WHITE01, fontSize: 30, cursor: "pointer" }}
            ></ion-icon>
          )}

          <DivOpcaoLateral>
            <TitleOpcaoMenuLateral>Notificações</TitleOpcaoMenuLateral>
          </DivOpcaoLateral>
        </OpcaoMenuLateral>
        <OpcaoMenuLateral>
          <ion-icon
            name="person-add-outline"
            style={{ color: Colors.WHITE01, fontSize: 30, cursor: "pointer" }}
          ></ion-icon>
          <DivOpcaoLateral>
            <TitleOpcaoMenuLateral>Adicionar</TitleOpcaoMenuLateral>
          </DivOpcaoLateral>
        </OpcaoMenuLateral>
        <OpcaoMenuLateral onClick={() => setShowModal(true)}>
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
        <OpcaoMenuLateral onClick={() => setIndexAbaActive(3)}>
          {indexAbaActive !== 3 ? (
            <Badge
              color="primary"
              badgeContent={totalMessagePendentes}
              showZero
            >
              <ion-icon
                name="chatbox-ellipses-outline"
                style={{
                  color: Colors.WHITE01,
                  fontSize: 30,
                  cursor: "pointer",
                }}
              ></ion-icon>
            </Badge>
          ) : (
            <ion-icon
              name="chatbox-ellipses-outline"
              style={{ color: Colors.WHITE01, fontSize: 30, cursor: "pointer" }}
            ></ion-icon>
          )}

          <DivOpcaoLateral>
            <TitleOpcaoMenuLateral>Conversas</TitleOpcaoMenuLateral>
          </DivOpcaoLateral>
        </OpcaoMenuLateral>
        <TitleOpcaoMenuLateral style={{ color: Colors.WHITE01, margin: 20 }}>
          Conexões
        </TitleOpcaoMenuLateral>
        <Styled.ConexoesMenuLateral>
          {friends.map((d, index) => (
            <OpcaoMenuLateral
              key={index}
              onClick={() => {
                handle(d, index, true);
              }}
            >
              <Avatar src={d.img} />
              <DivOpcaoLateral>
                <TitleOpcaoMenuLateral>{d.nome}</TitleOpcaoMenuLateral>
              </DivOpcaoLateral>
            </OpcaoMenuLateral>
          ))}
        </Styled.ConexoesMenuLateral>
      </MenuLateral>
      {indexAbaActive === 1 ? (
        <Styled.DivColumn>
          <Styled.Header>
            <Styled.TitleHeader>Noticações Recentes</Styled.TitleHeader>
            <ion-icon
              name="chatbox-ellipses-outline"
              style={{ color: Colors.WHITE01, fontSize: 30 }}
            ></ion-icon>
          </Styled.Header>
          <Styled.ListPersons>
            {/* Colocar os cards de noticações */}
            {conversationsRecentes.map((d, index) => (
              <></>
            ))}
          </Styled.ListPersons>
        </Styled.DivColumn>
      ) : indexAbaActive === 3 ? (
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
      ) : (
        "Nenhum"
      )}
    </Styled.Container>
  );
};
export default SideBar;
