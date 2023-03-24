import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeConversationActive,
  changeMessages,
  changeNewMessage,
  selectedWebSocket,
} from "../../../../store/reducers/WebSocketSlice";
import CardPerson from "../cardPerson/CardPerson";
import Styled from "./SideBar.styled";

const SideBar = ({ socket, handleLoading }) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [friends, setFriends] = useState([]);
  const [dados, setDados] = useState({});
  const [on, setOn] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setFriends(websocket.friends);
  }, [websocket]);

  const handle = dados => {
    handleLoading(true);

    dispatch(
      changeConversationActive({
        active: dados,
      })
    );

    socket.emit(
      "listMessagesPerson",
      { otherPeploe: dados.id, myId: websocket.idUser },
      dados => {
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
    const idConversationActive = dados.id;

    socket.on("newMessage", dados => {
      const idSender = dados.idSender;

      console.log("conversation", idConversationActive);
      console.log("sender", idSender);

      console.log(idConversationActive === idSender);
      if (idConversationActive === idSender) {
        dispatch(
          changeNewMessage({
            messages: dados,
          })
        );
      }
    });

    return () => socket.off("newMessage");
  }, [on, dados]);

  return (
    <Styled.Container>
      <Styled.Header>
        <Avatar
          src="https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
          sx={{ width: 60, height: 60 }}
          style={{
            cursor: "pointer",
          }}
        />
      </Styled.Header>
      <Styled.ListPersons>
        {friends.map((d, index) => (
          <CardPerson dados={d} key={index} handleClick={handle} />
        ))}
      </Styled.ListPersons>
    </Styled.Container>
  );
};
export default SideBar;
