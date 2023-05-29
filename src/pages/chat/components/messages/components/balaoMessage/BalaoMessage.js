import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Styled from "./BalaoMessage.styled";
import "moment/locale/pt-br";
const BalaoMessage = ({ receiver, dados }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(moment(dados.createdAt).calendar());
  }, [dados]);

  return (
    <p className={!receiver ? "from-me" : "from-them"}>
      <Styled.BodyMessage>
        <Styled.Message>{dados.message}</Styled.Message>
        <Styled.ContainerFooter>
          <Styled.Time>{time}</Styled.Time>
        </Styled.ContainerFooter>
      </Styled.BodyMessage>
    </p>
  );
};

export default BalaoMessage;
