import { Badge, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAllNotifications,
  changeConversationActive,
  changeConversationRecentes,
  changeMessages,
  changeMessagesPendentes,
  changeNewMessage,
  changeNewNotifications,
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
import CardNotification from "./components/cardNotification/CardNotification";
import ModalNewConversa from "../modal/newConversa/ModalNewConversa";
import ToastNewMessage from "../messages/components/toastNewMessage/ToastNewMessage";
import { ToastNewMessageContainer } from "../messages/components/toastNewMessage/ToastNewMessage.styled";
import { useSpring, animated } from "react-spring";

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
  const [ setFriends] = useState([]);
  const [conversationsRecentes, setConversationsRecentes] = useState([]);
  const [indexActive, setIndexActive] = useState(-1);
  const [indexAbaActive, setIndexAbaActive] = useState(3);
  const [totalMessagePendentes, setTotalMessagePendentes] = useState(0);
  const [totalNotificationPendentes, setTotalNotificationPendentes] =
    useState(0);
  const [notifications, setNotifications] = useState([]);
  const [toastNewMessage, setToastNewMessage] = useState({});
  const [showToastNewMessage, setShowToastNewMessage] = useState(false);
  const [dados, setDados] = useState({});
  const [show, setShowModal] = useState(false);
  const [showModalNewConversa, setShowModalNewConversa] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [on] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setFriends(websocket.friends);
    const prevList = [...websocket.conversationRecents];
    const descendingList = prevList.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setConversationsRecentes(descendingList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

        const friends = websocket.friends;
        const messagesPendentes = response.messagePedentes;
        const message = response.dados.message;
        let img = "";
        let qtdMessagesPendentes = 0;

        for (const friend of friends) {
          if (friend.id === idSender) {
            img = friend.img;
          }
        }

        for (const message of messagesPendentes) {
          if (message.idFriend === response.dados.idFriend) {
            qtdMessagesPendentes = message.qtdNaoVisualizados;
          }
        }
        setShowToastNewMessage(true);
        setToastNewMessage({
          img,
          message,
          qtdMessagesPendentes,
        });
      }

      dispatch(
        changeConversationRecentes({
          conversations: response.listRecentes,
        })
      );
    });

    return () => socket.off("newMessage");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, dados]);

  useEffect(() => {
    socket.on("atualizandoState", (dados) => {});
    return () => socket.off("atualizandoState");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, dados]);

  useEffect(() => {
    socket.on("notifications", (dados) => {
      dispatch(
        changeNewNotifications({
          newNotifications: dados,
        })
      );
    });

    return () => socket.off("notifications");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, dados]);

  useEffect(() => {
    let total = 0;

    const messagesPedentes = websocket.messagesPendentes || []; // Define um valor padrão se for null ou undefined

    for (const message of messagesPedentes) {
      total += message.qtdNaoVisualizados;
    }

    setTotalMessagePendentes(total);

    setNotifications(websocket.notifications);
  }, [websocket]);

  useEffect(() => {
    setVisualized(Math.random() * 100 + 1 - 1);
    setDadosConversa(dados);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dados]);

  useEffect(() => {
    socket.emit(
      "listAllNotifications",
      { idUser: websocket.idUser },
      (callback) => {
        dispatch(
          changeAllNotifications({
            notifications: callback,
          })
        );

        // Mostrar o total de noticações pendentes para visualiação.
        attQtdNotification(callback);
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dados, indexAbaActive]);

  const visualizedNotifications = async () => {
    const notifys = websocket.notifications;

    let arrayNotify = [];

    for (const notify of notifys) {
      if (!notify.isVisualizado) {
        arrayNotify.push(notify);
      }
    }

    if (arrayNotify.length > 0) {
      socket.emit("updateNotifyVisualized", { arrayNotify }, (callback) => {});
    }
    setTotalNotificationPendentes(0);
  };

  const attQtdNotification = (cb) => {
    let total = 0;

    cb.forEach((element) => {
      if (!element.isVisualizado) {
        total++;
      }
    });

    setTotalNotificationPendentes(total);
  };

  const fadeAnim = useSpring({
    opacity: showToastNewMessage ? 1 : 0,
    transform: showToastNewMessage ? "translateY(0%)" : "translateY(-10%)",
  });

  useEffect(() => {
    setLoading(true);
  }, [indexAbaActive]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [conversationsRecentes]);

  useEffect(() => {
    if (showToastNewMessage) {
      const timeout = setTimeout(() => {
        setShowToastNewMessage(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastNewMessage]);

  return (
    <Styled.Container>
      <ModalGroup socket={socket} show={show} handleClick={setShowModal} />
      <ModalNewConversa
        show={showModalNewConversa}
        handleClick={setShowModalNewConversa}
        handleConversation={handle}
      />
      <ToastNewMessageContainer>
        <animated.div style={fadeAnim}>
          {showToastNewMessage && <ToastNewMessage dados={toastNewMessage} />}
        </animated.div>
      </ToastNewMessageContainer>

      {isLoading ? (
        <Styled.ContainerLoading>
          <CircularProgress size={150} color="success" />
          <Styled.LabelLoading>Carregando...</Styled.LabelLoading>
        </Styled.ContainerLoading>
      ) : (
        <>
          <MenuLateral>
            <Styled.Img src={Logo} />
            <OpcaoMenuLateral
              onClick={() => {
                setIndexAbaActive(1);
                visualizedNotifications();
              }}
            >
              {indexAbaActive !== 1 ? (
                <Badge
                  color="primary"
                  badgeContent={parseInt(totalNotificationPendentes)}
                  showZero
                >
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
                  style={{
                    color: Colors.WHITE01,
                    fontSize: 30,
                    cursor: "pointer",
                  }}
                ></ion-icon>
              )}
              <DivOpcaoLateral>
                <TitleOpcaoMenuLateral>Notificações</TitleOpcaoMenuLateral>
              </DivOpcaoLateral>
            </OpcaoMenuLateral>
            <OpcaoMenuLateral>
              <ion-icon
                name="person-add-outline"
                style={{
                  color: Colors.WHITE01,
                  fontSize: 30,
                  cursor: "pointer",
                }}
              ></ion-icon>
              <DivOpcaoLateral>
                <TitleOpcaoMenuLateral>Adicionar</TitleOpcaoMenuLateral>
              </DivOpcaoLateral>
            </OpcaoMenuLateral>
            <OpcaoMenuLateral onClick={() => setShowModal(true)}>
              <ion-icon
                name="people-outline"
                style={{
                  color: Colors.WHITE01,
                  fontSize: 30,
                  cursor: "pointer",
                }}
              ></ion-icon>
              <DivOpcaoLateral>
                <TitleOpcaoMenuLateral>Novo grupo</TitleOpcaoMenuLateral>
              </DivOpcaoLateral>
            </OpcaoMenuLateral>
            <OpcaoMenuLateral>
              <ion-icon
                name="list-outline"
                style={{
                  color: Colors.WHITE01,
                  fontSize: 30,
                  cursor: "pointer",
                }}
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
                  style={{
                    color: Colors.WHITE01,
                    fontSize: 30,
                    cursor: "pointer",
                  }}
                ></ion-icon>
              )}

              <DivOpcaoLateral>
                <TitleOpcaoMenuLateral>Conversas</TitleOpcaoMenuLateral>
              </DivOpcaoLateral>
            </OpcaoMenuLateral>

            <OpcaoMenuLateral onClick={() => setShowModalNewConversa(true)}>
              <ion-icon
                name="chatbubbles-outline"
                style={{
                  color: Colors.WHITE01,
                  fontSize: 30,
                  cursor: "pointer",
                }}
              ></ion-icon>
              <DivOpcaoLateral>
                <TitleOpcaoMenuLateral>Nova Conversa</TitleOpcaoMenuLateral>
              </DivOpcaoLateral>
            </OpcaoMenuLateral>
          </MenuLateral>
          {indexAbaActive === 1 ? (
            <Styled.DivColumn>
              <Styled.Header>
                <Styled.TitleHeader>Notificações</Styled.TitleHeader>
                <ion-icon
                  name="notifications-outline"
                  style={{ color: Colors.WHITE01, fontSize: 30 }}
                ></ion-icon>
              </Styled.Header>
              <Styled.ListPersons>
                {/* Colocar os cards de noticações */}
                {notifications.map((d, index) => (
                  <CardNotification dados={d} key={index} />
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
        </>
      )}
    </Styled.Container>
  );
};
export default SideBar;
