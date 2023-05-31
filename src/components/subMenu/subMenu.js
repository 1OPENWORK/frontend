import React, { useEffect, useState } from "react";
import "./subMenu.styled";
import { Container } from "./subMenu.styled";

function SubMenu({ dados, setActive, active }) {
  const [abas, setAbas] = useState([]);

 

  useEffect(() => {
    setAbas(dados);
  }, []);

  const SubMenuComponent = () => {
    return (
      <>
        {abas !== undefined &&
          abas.map((d, index) => (
            <li>
              <div
                className={`${active === index ? "display" : ""}`}
                onClick={() => setActive(index)}
              >
                {d.name}
              </div>
            </li>
          ))}
      </>
    );
  };

  return (
    <>
      <Container>
        <div className="containerItemSubMenu">
          <div className="header">
            <nav aria-label="primaria">
              <ul className="header-menu cor-0">
                <SubMenuComponent />
             
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SubMenu;
