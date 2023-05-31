import React, { useState } from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import Dashboard from "./Dashboard";
import SubMenu from "../../components/subMenu/subMenu";
import Financeira from "./Financeira/Financeira";

const DashboardFinanceira = () => {
  const [abaActive, setAbactive] = useState(0);

  return (
    <>
      <NavBarList />
      <SubMenu
        dados={[{ name: "Dashboard" }, { name: "Financeira" }]}
        setActive={setAbactive}
        active={abaActive}
      />

      {abaActive === 0 ? <Dashboard /> : <Financeira />}
    </>
  );
};

export default DashboardFinanceira;
