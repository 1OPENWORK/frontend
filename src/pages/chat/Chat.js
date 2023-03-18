import React, { useEffect } from "react";
import Styled from "./Chat.styled";
import Messages from "./components/messages/Messages";
import SideBar from "./components/sideBar/SideBar";

export const Chat = ({ socket }) => {
  useEffect(() => {
    socket.on("connect", () => {
      socket.on("message", (message) => {
        console.log(message);
      });

      socket.emit("allListen", null, (listUsers) => {
        console.log(listUsers);
      });
    });
  });

  return (
    <Styled.Container>
      <Styled.Div width={"30%"}>
        <SideBar />
      </Styled.Div>
      <Styled.Div width={"70%"}>
        <Messages socket={socket}/>
      </Styled.Div>
    </Styled.Container>
  );
};

export default Chat;
