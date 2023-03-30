import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../../components/loading/Loading";
import { selectedWebSocket } from "../../../../store/reducers/WebSocketSlice";
import BalaoMessage from "./components/balaoMessage/BalaoMessage";
import SendMessage from "./components/sendMessage/SendMessage";
import Styled, { IMessageContainer } from "./Messages.styled";
import MessageDefault from "../../../../assets/imgs/message_default.svg";

const Messages = ({
  socket,
  isLoading,
  messageSeleted,
  setAtualizarUltimaMessage,
  dadosConversa,
  visualized,
}) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [idSender, setIdSender] = useState("");
  const [idReceiver, setIdReceiver] = useState("");
  const [messages, setMessages] = useState([]);

  

  useEffect(() => {
    setIdSender(websocket.idUser);
    setIdReceiver(websocket.conversationActive.id);
    setMessages(websocket.messages);
  }, [websocket, websocket.messages]);

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
                {messages.map((dados, index) => {
                  return (
                    <IMessageContainer>
                      {dados.idSender === idSender ? (
                        <Styled.Divisor>
                          <BalaoMessage dados={dados} />
                        </Styled.Divisor>
                      ) : (
                        <Styled.Divisor receiver={true}>
                          <BalaoMessage receiver={true} dados={dados} />
                        </Styled.Divisor>
                      )}
                    </IMessageContainer>
                  );
                })}
              </Styled.Reverce>
            ) : (
              <Styled.ContainerNotSelected>
                <img src={MessageDefault} />

              </Styled.ContainerNotSelected>
            )}
          </React.Fragment>
        )}
      </Styled.Container>

      <SendMessage
        socket={socket}
        idSender={idSender}
        idReceiver={idReceiver}
        setAtualizarUltimaMessage={setAtualizarUltimaMessage}
        visualized={visualized}
      />
    </React.Fragment>
  );
};

export default Messages;
