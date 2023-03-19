import React, { useState } from "react";
import Styled from "./SendMessage.styled";
import SvgIcon from "@mui/material/SvgIcon";
import Colors from "../../../../../../constants/Colors";
const SendMessage = ({socket}) => {

  const [message, setMessage] = useState("");


  const handMessage = () => {

    

    setMessage("")

  }



  return (
    <Styled.Container>
      <Styled.InputSendMessage value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Digite uma nova messagem" />
      <Styled.ButtonSend onClick={handMessage}>
        <SvgIcon style={{color: Colors.WHITE01}}>
        </SvgIcon>
      </Styled.ButtonSend>
    </Styled.Container>
  );
};

export default SendMessage;
