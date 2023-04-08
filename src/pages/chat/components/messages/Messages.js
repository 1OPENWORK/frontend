import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../../components/loading/Loading";
import { selectedWebSocket } from "../../../../store/reducers/WebSocketSlice";
import BalaoMessage from "./components/balaoMessage/BalaoMessage";
import SendMessage from "./components/sendMessage/SendMessage";
import Styled from "./Messages.styled";

const Messages = ({
  socket,
  isLoading,
  messageSeleted,
  setAtualizarUltimaMessage,
  dadosConversa,
}) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [idSender, setIdSender] = useState("");
  const [idReceiver, setIdReceiver] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setIdSender(websocket.idUser);
    setIdReceiver(websocket.conversationActive.id);
    setMessages(websocket.messages);
  }, [websocket]);

  return (
    <React.Fragment>
      <Styled.Container>
        {isLoading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {messageSeleted ? (
              <Styled.Reverce>
                <Styled.Header>
                  <Avatar src={dadosConversa.img} />
                  <Styled.Divisor>{dadosConversa.nome}</Styled.Divisor>
                </Styled.Header>
                {messages?.map((dados, index) => (
                  <React.Fragment>
                    {dados.idSender === idSender ? (
                      <Styled.Divisor>
                        <BalaoMessage dados={dados} />
                      </Styled.Divisor>
                    ) : (
                      <Styled.Divisor receiver={true}>
                        <BalaoMessage receiver={true} dados={dados} />
                      </Styled.Divisor>
                    )}
                  </React.Fragment>
                ))}
              </Styled.Reverce>
            ) : (
              "Nenhuma conversa ativada..."
            )}
          </React.Fragment>
        )}
      </Styled.Container>

      <SendMessage
        socket={socket}
        idSender={idSender}
        idReceiver={idReceiver}
        setAtualizarUltimaMessage={setAtualizarUltimaMessage}
      />
    </React.Fragment>
  );
};

export default Messages;
