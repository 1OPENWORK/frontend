import React, { useState } from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import AvaliacaoTable from "./AvaliacaoTable";
import SubMenu from "../../components/subMenu/subMenu";
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

const Avaliacoes = () => {
  const [abaActive, setAbactive] = useState(0);


  return (
    <>
      <NavBarList type={2} />
      <SubMenu
        dados={[{ name: "Avaliações" }, { name: "Avaliar" }]}
        setActive={setAbactive}
        active={abaActive}
      />
      {abaActive === 0 ? <AvaliacaoTable /> : <AvaliarTable />}
      
      
    </>
  );
};

export default Avaliacoes;
