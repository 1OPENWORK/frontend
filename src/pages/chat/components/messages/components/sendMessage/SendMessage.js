import React, { useEffect, useState } from "react";
import Styled from "./SendMessage.styled";
import SvgIcon from "@mui/material/SvgIcon";
import Colors from "../../../../../../constants/Colors";
import {
  changeConversationRecentes,
  changeMessages,
} from "../../../../../../store/reducers/WebSocketSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const SendMessage = ({
  socket,
  idSender,
  idReceiver,
  setAtualizarUltimaMessage,
}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [messagesRecentes, setMessagesRecentes] = useState([]);
  const [updateMessage, setUpdateMessage] = useState([]);



  const handleKeyPress = (event) => {
    // Verifica se a tecla pressionada é o Enter
    if (event.key === "Enter") {
      // Executa a ação desejada, como enviar um formulário ou pesquisar
      handMessage();
    }
  };

  const handMessage = () => {
    if (message.length > 0) {
      socket.emit(
        "sendMessage",
        { idSender: idSender, idReceiver: idReceiver, message },
        (dados, listRecentes) => {
          setUpdateMessage(dados);
          setMessagesRecentes(listRecentes);
          setAtualizarUltimaMessage(Math.random() * (10000 - 1) + 1);
        }
      );
    } else {
      toast.error("Mensagem vazia.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
      });
    }

    setMessage("");
  };

  useEffect(() => {
    socket.emit(
      "listMessagesPerson",
      { otherPeploe: idReceiver, myId: idSender },
      (dados) => {
        dispatch(
          changeMessages({
            messages: dados,
          })
        );
      }
    );
  }, [updateMessage]);

  useEffect(() => {
    dispatch(
      changeConversationRecentes({
        conversations: messagesRecentes,
      })
    );
  }, [messagesRecentes]);

  return (
    <Styled.Container>
     
      <Styled.InputSendMessage
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite uma nova messagem"
        onKeyPress={handleKeyPress}
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
