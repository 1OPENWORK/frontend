import React from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import Cards from "./components/Cards";

// --------------------------------------------------------
// Community INTERFACE
// --------------------------------------------------------
/**
 * A component that renders a Screen.
 *
 * @param props Properties
 * @param props.route The route
 * @param props.navigation The navigator
 * @returns The component JSX.
 */
const Comunidade = () => {
  return (
    <>
      <NavBarList type={4} />
      <Cards />
    </>
  );
};

export default Comunidade;
