import React from "react";
import Styled from "./CardNotification.styled";
import { useState } from "react";
import { getS3 } from "../../../../../../store/actions/MicroService";
import { useEffect } from "react";
import styled from "styled-components";
import CardGroup from "./components/cardGroup/CardGroup";
import axios from "axios";
import { AmbienteBackend } from "../../../../../../hooks/Ambiente";

const CardNotification = ({ dados, socket }) => {


  return (
    <Styled.Container >
      {dados.type === "SERVER" && (
        <CardGroup dados={dados} socket={socket} />
      )}
    </Styled.Container>
  );
};

export default CardNotification;
