import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  changeConversationRecentes,
  changeFriends,
  changeIdUser,
  changeMessagesPendentes,
} from "../../store/reducers/WebSocketSlice";
import Styled from "./Chat.styled";
import Messages from "./components/messages/Messages";
import SideBar from "./components/sideBar/SideBar";
import { getId } from "../../hooks/Cookies";

export const Chat = ({ socket }) => {
  const [loading, setLoading] = useState(false);
  const [messageActive, setMessageActive] = useState(false);
  const [visualized, setVisualized] = useState([]);
  const [dadosConversa, setDadosConversa] = useState({});

  const [atualizarUltimaMessage, setAtualizarUltimaMessage] = useState(0);
  const dispatch = useDispatch();
  const id = getId();

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("myInformation", { id }, callback => {
        const idUser = callback.id;

        dispatch(
          changeIdUser({
            id: idUser,
          })
        );

        socket.emit(
          "allFriends",
          { idUser },
          (friends, listConversationsRecentes, messagePedentes) => {
            let messagesPendentes = [];

            for (const item of messagePedentes) {
              messagesPendentes.push(item);
            }

            dispatch(
              changeMessagesPendentes({
                messages: messagesPendentes,
              })
            );

            dispatch(
              changeFriends({
                friends,
              })
            );

            dispatch(
              changeConversationRecentes({
                conversations: listConversationsRecentes,
              })
            );
          }
        );

        socket.emit("updateSocketId", { idUser }, user => {});
      });
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.Div width={"30%"}>
        <SideBar
          socket={socket}
          handleLoading={setLoading}
          handleMessageActive={setMessageActive}
          atualizarUltimaMessage={atualizarUltimaMessage}
          setDadosConversa={setDadosConversa}
          visualized={visualized}
          setVisualized={setVisualized}
        />
      </Styled.Div>
      <Styled.Div width={"70%"} style={{ height: "100vh" }}>
        <Messages
          socket={socket}
          isLoading={loading}
          messageSeleted={messageActive}
          setAtualizarUltimaMessage={setAtualizarUltimaMessage}
          dadosConversa={dadosConversa}
          visualized={visualized}
        />
      </Styled.Div>
    </Styled.Container>
  );
};

export default Chat;
