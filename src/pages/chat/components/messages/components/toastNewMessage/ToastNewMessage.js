import React from "react";
import Styled from "./ToastNewMessage.styled";
import { Avatar } from "@mui/material";
import { Badge } from "react-bootstrap";
const ToastNewMessage = ({dados}) => {
  return (
      <Styled.Item>
        <Avatar src={dados.img} />
        <p>{dados.message}</p>
        <Badge color="primary" showZero>
          {dados.qtdMessagesPendentes}
        </Badge>
      </Styled.Item>
  );
};

export default ToastNewMessage;
