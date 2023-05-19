import React from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import Dashboard from "./Dashboard";
import SubMenu from "../../components/subMenu/subMenu";

const DashboardFinanceira = () => {
    return (
      <>
      <NavBarList />
      <SubMenu />
      <Dashboard />
      </>
    );
  };

  export default DashboardFinanceira;