import React from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import AvaliacaoTable from "./AvaliacaoTable";
import SubMenu from "../../components/subMenu/subMenu";

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
      <SubMenu type={3} />
      <AvaliacaoTable />
    </>
  );
};

export default Avaliacoes;
