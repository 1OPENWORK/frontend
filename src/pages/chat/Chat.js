import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  changeConversationRecentes,
  changeFriends,
  changeIdUser,
} from "../../store/reducers/WebSocketSlice";
import Styled from "./Chat.styled";
import Messages from "./components/messages/Messages";
import SideBar from "./components/sideBar/SideBar";

export const Chat = ({ socket }) => {
  const [loading, setLoading] = useState(false);
  const [messageActive, setMessageActive] = useState(false);
  const [dadosConversa, setDadosConversa] = useState({});

  const [atualizarUltimaMessage, setAtualizarUltimaMessage] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(
      changeIdUser({
        id: id,
      })
    );

    socket.on("connect", () => {
      socket.emit(
        "allFriends",
        { idUser: id },
        (friends, listConversationsRecentes) => {
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
    });

    socket.emit("updateSocketId", { idUser: id }, (user) => {});
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
        />
      </Styled.Div>
      <Styled.Div width={"70%"} style={{ height: "100vh" }}>
        <Messages
          socket={socket}
          isLoading={loading}
          messageSeleted={messageActive}
          setAtualizarUltimaMessage={setAtualizarUltimaMessage}
          dadosConversa={dadosConversa}
        />
      </Styled.Div>
    </Styled.Container>
  );
};

export default Chat;
