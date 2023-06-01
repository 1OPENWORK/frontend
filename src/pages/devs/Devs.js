import React, { useState } from "react";
import NavBarList from "../../components/navBarList/NavBarList";
import Desenvolvedores from "./DevsTable";
import SubMenu from "../../components/subMenu/subMenu";
import PropostaDesenvolvedores from "./PropostasTableDev";

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
  const [abaActive, setAbactive] = useState(0);

  return (
    <>
      <NavBarList type={1} />
      <SubMenu
        dados={[{ name: "Usuários" }, { name: "Propostas" }]}
        setActive={setAbactive}
        active={abaActive}
      />
      {abaActive === 0 ? <Desenvolvedores /> : <PropostaDesenvolvedores />}
    </>
  );
};

export default Devs;
