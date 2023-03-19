import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  changeFriends,
  changeIdUser,
} from "../../store/reducers/WebSocketSlice";
import Styled from "./Chat.styled";
import Messages from "./components/messages/Messages";
import SideBar from "./components/sideBar/SideBar";

export const Chat = ({ socket }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(
      changeIdUser({
        id: id,
      })
    );

    socket.on("connect", () => {
      socket.emit("allFriends", { idUser: id }, (friends) => {
        dispatch(
          changeFriends({
            friends,
          })
        );
      });
    });

   
  }, []);

  useEffect(() => {
    socket.emit(
      "updateSocketId",
      { idUser: id, idSocket: socket.id },
      (user) => {
        console.log(user);
      }
    );
  }, [])

  return (
    <Styled.Container>
      <Styled.Div width={"30%"}>
        <SideBar socket={socket} handleLoading={setLoading} />
      </Styled.Div>
      <Styled.Div width={"70%"} style={{ height: "100vh" }}>
        <Messages socket={socket} isLoading={loading} />
      </Styled.Div>
    </Styled.Container>
  );
};

export default Chat;
