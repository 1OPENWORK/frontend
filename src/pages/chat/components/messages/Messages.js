import React from "react";
import BalaoMessage from "./components/balaoMessage/BalaoMessage";
import SendMessage from "./components/sendMessage/SendMessage";
import Styled from "./Messages.styled";

const Messages = ({socket}) => {
  return (
    <React.Fragment>
      <Styled.Container>
        <Styled.Divisor receiver={true}>
          <BalaoMessage receiver={true} />
        </Styled.Divisor>
        <Styled.Divisor receiver={true}>
          <BalaoMessage receiver={true} />
        </Styled.Divisor>
        <Styled.Divisor>
          <BalaoMessage />
        </Styled.Divisor>
      
      </Styled.Container>
      <SendMessage socket={socket} />
    </React.Fragment>
  );
};

export default Messages;
