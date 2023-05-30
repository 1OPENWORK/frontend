import React from "react";
import SidebarProjecteds from "../../components/sideBar/SidebarProjecteds";
import { ContainerContent, ContainerMain } from "../../Projects.styled";
import CardProject from "../../components/cardProject/CardProject";
import axios from "axios";
import { useState, useEffect } from "react";
import { AmbienteBackend } from "../../../../hooks/Ambiente";

// import Cookies from "js-cookie";
function Canceled({ developers }) {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDev = true;
  const id = 1;

  const fetchChange = isDev
    ? AmbienteBackend() + `/projetos-aceitos/cancelados/desenvolvedor/${id}`
    : AmbienteBackend() + `/projetos-aceitos/cancelados/empresa/${id}`;

  useEffect(() => {
    async function fetchProjetos() {
      await axios
        .get(fetchChange)
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            setLoading(false);
            setProjetos(response.data);
          }
        })
        .catch((error) => {
          console.log("Deu erro: " + error);
        });
    }

    fetchProjetos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <SidebarProjecteds type={3} />
      <ContainerMain>
        <ContainerContent>
          <h1>Projetos</h1>

          {loading ? (
            <div className="loading">
              <h3>Carregando...</h3>
            </div>
          ) : (
            projetos.map((projeto) => (
              <CardProject
                key={projeto.id}
                title={projeto.titleProject}
                describe={projeto.descriptionProject}
                progress={projeto.progress}
                now={projeto.progress}
                canceled={true}
                initDate={projeto.beginDate}
                finishDate={projeto.finishDate}
                company={projeto.nameCompany}
                logoCompany={projeto.imageCompany}
                developers={projeto.developers}
              />
            ))
          )}
        </ContainerContent>
      </ContainerMain>
    </>
  );
}

export default Canceled;
