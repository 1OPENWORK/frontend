import React from "react";
import SidebarProjecteds from "../../components/sideBar/SidebarProjecteds";
import { ContainerContent, ContainerMain } from "../../Projects.styled";
import CardProject from "../../components/cardProject/CardProject";
import axios from "axios";
import { useState, useEffect } from "react";

function Canceled({ developers }) {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjetos() {
      await axios
        .get("http://localhost:8004/api/projetos-aceitos/assinados")
        .then((response) => {
          setProjetos(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Deu erro: " + error);
        });
    }

    fetchProjetos();
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
