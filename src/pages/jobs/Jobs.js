import React, { useState } from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import JobsTable from "./JobsTable";
import SubMenu from "../../components/subMenu/subMenu";
import JobsPropostas from "./JobsPropostasTable";

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
  const [abaActive, setAbactive] = useState(0);

  return (
    <>
      <NavBarList type={3} />
      <SubMenu
        dados={[{ name: "Jobs" }, { name: "Propostas" }]}
        setActive={setAbactive}
        active={abaActive}
      />
      {abaActive === 0 ? <JobsTable /> : <JobsPropostas />}
    </>
  );
};

export default Jobs;
