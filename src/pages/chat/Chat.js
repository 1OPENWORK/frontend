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
import { getS3 } from "../../store/actions/MicroService";

export const Chat = ({ socket }) => {
  const [loading, setLoading] = useState(false);
  const [messageActive, setMessageActive] = useState(false);
  const [visualized, setVisualized] = useState([]);
  const [dadosConversa, setDadosConversa] = useState({});
  const [tag, setTag] = useState("");
  const [imagemPerfil, setImagemPerfil] = useState("");
  const [nome, setNome] = useState("");

  const [atualizarUltimaMessage, setAtualizarUltimaMessage] = useState(0);
  const dispatch = useDispatch();
  const id = getId();

  const fetchS3 = async (img) => {
    const imagemPerfil = await getS3(img);

    setImagemPerfil(imagemPerfil);
  };

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("myInformation", { id }, (callback) => {
        console.log("🚀 ~ file: Chat.js:32 ~ socket.on ~ callback:", callback);
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

        socket.emit("updateSocketId", { idUser }, (user) => {});

        fetchS3(callback.img);
        setTag(callback.tag);
        setNome(callback.nome);
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
          myInformation={{ nome, tag, img: imagemPerfil }}
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
