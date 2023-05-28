import React from "react";
import GlobalStyle from "./styles/global.jsx";
import Board from "./components/Board/Board.jsx";
import SidebarProjecteds from "../projects/components/sideBar/SidebarProjecteds.jsx";

function Todo() {
  return (
    <>
      <SidebarProjecteds />
      <Board />

      <GlobalStyle />
    </>
  );
}

export default Todo;
