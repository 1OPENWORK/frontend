import React from "react";
import GlobalStyle from "./styles/global";
import Board from "./components/Board/Board";
import SidebarProjecteds from "../projects/components/sideBar/SidebarProjecteds";

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
