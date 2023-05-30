import React, { useState, useEffect } from "react";
import { ContainerMain, ContainerContent } from "./Projects.styled";
import CardProject from "./components/cardProject/CardProject";
import SidebarProjecteds from "./components/sideBar/SidebarProjecteds";
import axios from "axios";
import { AmbienteBackend } from "../../hooks/Ambiente";

function Projects() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDev = true;
  const id = 1;

  const fetchChange = isDev
    ? AmbienteBackend() + `/projetos-aceitos/completos/desenvolvedor/${id}`
    : AmbienteBackend() + `/projetos-aceitos/completos/empresa/${id}`;

  // Exemplo
  //   axios({
  //     method: "get",
  //     url: "http://bit.ly/2mTM3nY",
  //     responseType: "stream",
  //   }).then(function (response) {
  //     response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
  //   });

  useEffect(() => {
    async function fetchProjetos() {
      await axios
        .get(fetchChange)
        .then((response) => {
          setProjetos(response.data);

          setLoading(false);
        })
        .catch((error) => {
        });
    }

    fetchProjetos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SidebarProjecteds type={2} />
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
                canceled={false}
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

export default Projects;
