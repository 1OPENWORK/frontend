import React from "react";

import { Container, Logo, Tarefa } from "./Header.styled";
import { BiGridAlt } from "react-icons/bi";
import { MdOutlineRunCircle } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";

function Header(height) {
  return (
    <Container>
      <button type="button">
        <MdOutlineRunCircle size={40} />

        <h2>Andamento</h2>
      </button>
      <button type="button">
        <AiOutlineCheckCircle size={40} color={"#20ac51"} />

        <h2 color={"#20ac51"}>Concluídos</h2>
      </button>
      <button type="button">
        <TiCancel size={40} className="icon-cancel" />

        <h2>Cancelados</h2>
      </button>
    </Container>
  );
}

export default Header;
