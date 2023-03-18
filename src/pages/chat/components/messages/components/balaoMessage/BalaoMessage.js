import React from "react";
import Styled from "./BalaoMessage.styled";

const BalaoMessage = ({receiver}) => {
  return <Styled.Container receiver={receiver}>Balão message</Styled.Container>;
};

export default BalaoMessage;
