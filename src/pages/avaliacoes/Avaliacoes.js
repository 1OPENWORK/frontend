import React from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import List from "../../components/list/List";

// --------------------------------------------------------
// Devs INTERFACE
// --------------------------------------------------------
/**
 * A component that renders a Screen.
 *
 * @param props Properties
 * @param props.route The route
 * @param props.navigation The navigator
 * @returns The component JSX.
 */

const Avaliacoes = () => {
  return (
    <>
      <NavBarList type={2} />
      <List type={2} />
    </>
  );
};

export default Avaliacoes;
