import React from "react";
import GlobalStyle from "./styles/global";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";

function Todo() {
  return (
    <>
      <Header />
      <Board />

      <GlobalStyle />
    </>
  );
}

export default Todo;
