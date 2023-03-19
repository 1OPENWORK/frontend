import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../../components/loading/Loading";
import { selectedWebSocket } from "../../../../store/reducers/WebSocketSlice";
import BalaoMessage from "./components/balaoMessage/BalaoMessage";
import SendMessage from "./components/sendMessage/SendMessage";
import Styled from "./Messages.styled";

const Messages = ({ socket, isLoading }) => {
  const { websocket } = useSelector(selectedWebSocket);
  const [myId, setId] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setId(websocket.idUser);
    setMessages(websocket.messages);
  }, [websocket]);

  return (
    <React.Fragment>
      <Styled.Container>
        {isLoading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {messages?.map((dados, index) => (
              <React.Fragment>
                {dados.idSender === myId ? (
                  <Styled.Divisor>
                    <BalaoMessage dados={dados}/>
                  </Styled.Divisor>
                ) : (
                  <Styled.Divisor receiver={true}>
                    <BalaoMessage receiver={true} dados={dados}/>
                  </Styled.Divisor>
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </Styled.Container>

      <SendMessage socket={socket} />
    </React.Fragment>
  );
};

export default Messages;
