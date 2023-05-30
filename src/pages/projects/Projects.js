import React, { useState, useEffect } from "react";
import { ContainerMain, ContainerContent } from "./Projects.styled";
import CardProject from "./components/cardProject/CardProject";
import SidebarProjecteds from "./components/sideBar/SidebarProjecteds";
import axios from "axios";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { getId, getIsDev } from "../../hooks/Cookies";

function Projects() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noProject, setNoProject] = useState(false);

  const isDev = getIsDev();
  const id = getId();

  const fetchDev = `http://localhost:8004/projetos-aceitos/completos/desenvolvedor/${id}`;
  const fetchCompany = `http://localhost:8004/projetos-aceitos/completos/empresa/${id}`;

  // Exemplo
  //   axios({
  //     method: "get",
  //     url: "",
  //     responseType: "stream",
  //   }).then(function (response) {
  //     response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
  //   });

  async function fetchProjetos() {
    await axios
      .get(isDev === "true" ? fetchDev : fetchCompany)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setProjetos(response.data);
          console.log(response);
        } else if (response.status === 204) {
          setLoading(false);
          setNoProject(true);
          console.log("caiu aqui", response);
        }
      })
      .catch((error) => {
        setLoading(false);
        setNoProject(true);
        console.log("Deu erro: " + error);
      });
  }

  useEffect(() => {
    fetchProjetos();
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
          ) : noProject ? (
            <div className="loading">
              <AiOutlineFundProjectionScreen size={64} />
              <h3>Sem projetos...</h3>
            </div>
          ) : (
            projetos.map((projeto) => (
              <CardProject
                key={projeto.id}
                title={projeto.titleProject}
                describe={projeto.descriptionProject}
                progress={100}
                now={100}
                canceled={false}
                initDate={projeto.beginDate}
                finishDate={projeto.finishDate}
                company={projeto.nameCompany}
                logoCompany={projeto.imageCompany}
                developers={projeto.developers}
                isDev={isDev}
              />
            ))
          )}
        </ContainerContent>
      </ContainerMain>
    </>
  );
}

export default Projects;
