import React, { useEffect, useState } from "react";
import styled from "./Jobs.styled";
import NavBarList from "../../components/navBarList/NavBarList";
import List from "../../components/list/List";

// --------------------------------------------------------
// Jobs INTERFACE
// --------------------------------------------------------
/**
 * A component that renders a Screen.
 *
 * @param props Properties
 * @param props.route The route
 * @param props.navigation The navigator
 * @returns The component JSX.
 */
const Jobs = () => {
  return (
    <>
      <NavBarList type={3} />
      <List />
    </>
  );
};

export default Jobs;
