import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../../components/loading/Loading";
import { selectedWebSocket } from "../../../../store/reducers/WebSocketSlice";
import BalaoMessage from "./components/balaoMessage/BalaoMessage";
import SendMessage from "./components/sendMessage/SendMessage";
import Styled from "./Messages.styled";

const Messages = ({ socket, isLoading, messageSeleted }) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [idSender, setIdSender] = useState("");
  const [idReceiver, setIdReceiver] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("🚀 ~ file: Messages.js:17 ~ useEffect ~ websocket.conversationActive.idEnviou:",websocket.idUser)
    if (websocket.conversationActive.idEnviou === websocket.idUser) {
      setIdSender(websocket.idUser);
      setIdReceiver(websocket.conversationActive.idRecebeu);
    } else {
      setIdSender(websocket.conversationActive.idRecebeu);
      setIdReceiver(websocket.idUser);
    }

    console.log("🚀 ~ file: Messages.js:26 ~ useEffect ~ websocket.messages:", websocket.messages)
    setMessages(websocket.messages);
  }, [websocket]);

  useEffect(() => {
    console.log("🚀 ~ file: SendMessage.js:52 ~ SendMessage ~ idSender, idReceiver:", idSender, idReceiver)

  }, [idSender, idReceiver])
  return (
    <React.Fragment>
      <Styled.Container>
        {isLoading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {messageSeleted ? (
              <Styled.Reverce>
                <Styled.Header>Header</Styled.Header>
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
      />
    </React.Fragment>
  );
};

export default Messages;
