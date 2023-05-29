import React from "react";
import SidebarProjecteds from "../../components/sideBar/SidebarProjecteds";
import { ContainerContent, ContainerMain } from "../../Projects.styled";
import CardProject from "../../components/cardProject/CardProject";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { getId, getIsDev } from "../../../../hooks/Cookies";


// import Cookies from "js-cookie";
function Canceled({ developers }) {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noProject, setNoProject] = useState(false);

  const isDev = getIsDev();
  const id = getId();

  const fetchCompany = `${process.env.REACT_APP_BACKEND_LOCAL_HOST}/projetos-aceitos/cancelados/empresa/${id}`
  const fetchDev = `${process.env.REACT_APP_BACKEND_LOCAL_HOST}/projetos-aceitos/cancelados/desenvolvedor/${id}`




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
        console.log("Deu erro: " + error);
      });
  }

  useEffect(() => {
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

export default Canceled;
