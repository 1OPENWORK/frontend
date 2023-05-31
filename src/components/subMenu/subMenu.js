import React, { useState } from "react";
import "./subMenu.styled";
import { Container } from "./subMenu.styled";
import {
  DevsPath,
  JobsPath,
  AvaliacoesPath,
  AvaliarPath,
  DashboardFinanceiraPath,
  FinanceiraPath,
} from "../../constants/Path";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate;

const goToDevs = () => {
  navigate(DevsPath);
};

const goToJobs = () => {
  navigate(JobsPath);
};

const goToAvaliacoes = () => {
  navigate(AvaliacoesPath);
};

const goToAvaliar = () => {
  navigate(DevsPath);
};

function SubMenu({ type }) {
  const [click, setClick] = useState("");

  return (
    <>
      <Container>
        <div className="containerItemSubMenu">
          <div className="header">
            <nav aria-label="primaria">
              <ul className="header-menu cor-0">
                {type === 1 ? (
                  <>
                    <li>
                      <a
                        href="/desenvolvedores"
                        className={`${click === 1 ? "display" : ""}`}
                        onClick={() => setClick(1)}
                      >
                        USUÁRIOS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/desenvolvedores/propostas"
                        className={`${click === 2 ? "display" : ""}`}
                        onClick={() => setClick(2)}
                      >
                        PROPOSTAS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`${click === 3 ? "display" : ""}`}
                        onClick={() => setClick(3)}
                      >
                        FILTROS
                      </a>
                    </li>
                  </>
                ) : type === 2 ? (
                  <>
                    <li>
                      <a
                        href="/jobs"
                        className={`${click === 1 ? "display" : ""}`}
                        onClick={() => setClick(1)}
                      >
                        JOBS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`${click === 2 ? "display" : ""}`}
                        onClick={() => setClick(2)}
                      >
                        PROPOSTAS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className={`${click === 3 ? "display" : ""}`}
                        onClick={() => setClick(3)}
                      >
                        FILTROS
                      </a>
                    </li>
                  </>
                ) : type === 3 ? (
                  <>
                    <li>
                      <a
                        href="/avaliacoes"
                        className={`${click === 1 ? "display" : ""}`}
                        onClick={() => setClick(1)}
                      >
                        AVALIAÇÕES
                      </a>
                    </li>
                    <li>
                      <a
                        href="avaliacoes/avaliar"
                        className={`${click === 2 ? "display" : ""}`}
                        onClick={() => setClick(2)}
                      >
                        AVALIAR
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a
                        href="/dashboard"
                        className={`${click === 1 ? "display" : ""}`}
                        onClick={() => setClick(1)}
                      >
                        DASHBOARD
                      </a>
                    </li>
                    <li>
                      <a
                        href="/financeira"
                        className={`${click === 2 ? "display" : ""}`}
                        onClick={() => setClick(2)}
                      >
                        FINANÇAS
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SubMenu;
