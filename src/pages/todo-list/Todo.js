import React from "react";
import GlobalStyle from "./styles/global";
import Board from "./components/Board/Board";
import SidebarProjecteds from "../projects/components/sideBar/SidebarProjecteds";
import { useParams } from "react-router-dom";

function Todo() {
  const params = useParams();

  return (
    <>
      <SidebarProjecteds />
      <Board id={params.id} />

      <GlobalStyle />
    </>
  );
}

export default Todo;
