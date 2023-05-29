import React from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import Desenvolvedores from "./DevsTable";
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

const Devs = () => {
  return (
    <>
      <NavBarList type={1} />
      <SubMenu type={1} />
      <Desenvolvedores />
    </>
  );
};

export default Devs;
