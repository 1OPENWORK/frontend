import React, { useEffect, useState } from "react";
import Styled from "./SendMessage.styled";
import SvgIcon from "@mui/material/SvgIcon";
import Colors from "../../../../../../constants/Colors";
import { changeMessages, changeNewMessage } from "../../../../../../store/reducers/WebSocketSlice";
import { useDispatch } from "react-redux";
const SendMessage = ({ socket, idSender, idReceiver }) => {
  
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState([]);

  const handMessage = () => {

    socket.emit("sendMessage", {idSender: idSender, idReceiver: idReceiver, message}, (dados) => {
      setUpdateMessage(dados);
    })
    setMessage("");
  };

  useEffect(() => {
    socket.emit("listMessagesPerson", { id: idSender }, (dados) => {
      dispatch(
        changeMessages({
          messages: dados,
        })
      );
    });

   
  }, [updateMessage])

  return (
    <Styled.Container>
      <Styled.InputSendMessage
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite uma nova messagem"
      />
      <Styled.ButtonSend onClick={handMessage}>
        <ion-icon
          name="send-outline"
          style={{ color: Colors.WHITE01, fontSize: 20 }}
        ></ion-icon>
      </Styled.ButtonSend>
    </Styled.Container>
  );
};

export default SendMessage;
