import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Styled from "./BalaoMessage.styled";
import "moment/locale/pt-br";
import { Avatar } from "@mui/material";
const BalaoMessage = ({ receiver, dados }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(moment(dados.createdAt).fromNow());
  }, [dados]);

  return (
    <Styled.Container receiver={receiver}>
      <Styled.Div>
        <Styled.Div>{dados.message}</Styled.Div>
      </Styled.Div>
      <Styled.Div
        style={{
          position: "relative",
          top: "10px",
          fontSize: "12px",
        }}
      >
        {time}
      </Styled.Div>
    </Styled.Container>
  );
};

export default BalaoMessage;
