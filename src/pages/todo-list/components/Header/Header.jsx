import React from "react";

import { Container, Logo } from "./Header.styled";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

import logoLink from "./img/logo.svg";
import { useNavigate } from "react-router-dom";

function Header(height) {
  const navigate = useNavigate();

  return (
    <Container>
      <button type="button" onClick={() => navigate("/projetos")}>
        <RxDashboard size={32} />

        <h2>Projetos</h2>
      </button>
      <button type="button">
        <BsFillClipboard2PlusFill size={32} color={"#20ac51"} />

        <h2 color={"#20ac51"}>Tarefas</h2>
      </button>
      <button type="button">
        <Logo height={64} src={logoLink} />

        <h2>Home</h2>
      </button>
    </Container>
  );
}

export default Header;
