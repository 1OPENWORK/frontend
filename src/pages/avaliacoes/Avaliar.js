import React from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import AvaliarTable from "./AvaliarTable";
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

const Avaliar = () => {
  return (
    <>
      <NavBarList type={2} />
      <AvaliarTable />
    </>
  );
};

export default Avaliar;
