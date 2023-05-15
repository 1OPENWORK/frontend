import React from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import JobsTable from "./JobsTable";

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
      <JobsTable />
    </>
  );
};

export default Jobs;
