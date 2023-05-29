/* eslint-disable jsx-a11y/alt-text */
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
  const [imgPerfil, setImgPerfil] = useState("");

  useEffect(() => {
    setIdSender(websocket.idUser);
    setIdReceiver(websocket.conversationActive.id);
    setMessages(websocket.messages);
  }, [websocket, websocket.messages]);

  const fetchS3 = async () => {
    // eslint-disable-next-line no-undef
    const response = await getS3(dadosConversa.img);

    setImgPerfil(response);
  };

  useEffect(() => {
    fetchS3();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dadosConversa]);

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
                  <Avatar src={imgPerfil} />
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
