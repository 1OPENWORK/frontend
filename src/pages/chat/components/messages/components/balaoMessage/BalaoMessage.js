import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Styled from "./BalaoMessage.styled";
import "moment/locale/pt-br";
import { Avatar } from "@mui/material";
const BalaoMessage = ({ receiver, dados }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(moment(dados.createdAt).calendar());
  }, [dados]);

  return (
    <Styled.Container className={!receiver ? "mine" : ""} receiver={receiver}>
      <Styled.Message>{dados.message}</Styled.Message>
      <Styled.Divisor isMine={receiver}>
        <Styled.Time>{time}</Styled.Time>
        {!receiver && (
          <ion-icon
            name={dados.visualizado === 1 ? "checkmark-done-outline" : "checkmark-outline"}
            
          ></ion-icon>
        )}
      </Styled.Divisor>
    </Styled.Container>
  );
};

export default BalaoMessage;
