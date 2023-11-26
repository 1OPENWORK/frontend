import React, { useEffect, useState } from "react";
import Styled from "./InfoJob.styled";
import { useSelector } from "react-redux";
import { selectedInfoJob } from "../../../store/reducers/JobInfoSlice";
import { MdStarBorder } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { get, post } from "../../../services/Generected";
import { AmbienteBackend } from "../../../hooks/Ambiente";
import { selectedPerfil } from "../../../store/reducers/PerfilSlice";
import { JobsPath } from "../../../constants/Path";
import { toast } from "react-toastify";

const InfoJob = () => {
  const navigate = useNavigate();
  const { infoJob } = useSelector(selectedInfoJob);
  const { dadosPerfil } = useSelector(selectedPerfil);
  const [dadosJob, setDadosJob] = useState({});
  console.log("🚀 ~ file: InfoJob.js:18 ~ InfoJob ~ dadosJob:", dadosJob)
  const [tools, setTools] = useState([]);
  const { id } = useParams();



  useEffect(() => {
    if (id === undefined) {
      setDadosJob(infoJob.dados);
      setTools(infoJob.dados.tools);
    }
  }, [infoJob]);

  const fetchInformationJob = () => {
    get(AmbienteBackend() + `/api/projetos/projeto/${id}`)
      .then((response) => {
        const data = response.data;
        setDadosJob(data);
        setTools(data.tools);
      })
      .catch((error) => console.log(error));
  };

  const sendAcceptyProposta = async () => {
    try {
      const response = await post(
        AmbienteBackend() +
          `/api/propostas/desenvolvedor/proposta/${dadosPerfil.perfil.id}`,
        {
          idProject: dadosJob.id,
          tipo: "BIG",
        }
      );

      if (response.code === "ERR_BAD_REQUEST") {
        toast.error('Você já enviou uma proposta para esse serviço.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: false,
          theme: "light",
        });
      }else {
        toast.success('Você enviou a proposta para esse serviço.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: false,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error('Ocorreu um erro com o sistema, tente novamente mais tarde!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: false,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      fetchInformationJob();
    }
  }, [id]);

  return (
    <>
      <Styled.ButtonCallbackURL onClick={() => navigate(JobsPath)}>
        {" "}
        Voltar
      </Styled.ButtonCallbackURL>
      <Styled.Container>
        <Styled.Content>
          <Styled.SpaceBetween>
            <Styled.Row style={{ alignItems: "center", gap: "0.5rem" }}>
              <Styled.Column>
                <Styled.Name>{dadosJob?.nameCompany}</Styled.Name>
                <Styled.Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MdStarBorder size={20} />
                  <Styled.TextGrade>
                    {Math.fround(dadosJob?.grade).toFixed(1)}
                  </Styled.TextGrade>
                </Styled.Row>
              </Styled.Column>
            </Styled.Row>

            <Styled.Row style={{ alignItems: "center", gap: "0.5rem" }}>
              <Styled.Column>
                <Styled.Title>Total de participantes</Styled.Title>
                <Styled.Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Styled.Text>{dadosJob?.maxDevelopers}</Styled.Text>
                </Styled.Row>
              </Styled.Column>
            </Styled.Row>
          </Styled.SpaceBetween>
          <Styled.SpaceBetween>
            <Styled.Row style={{ alignItems: "center", gap: "0.5rem" }}>
              <Styled.NameProjected>{dadosJob?.title}</Styled.NameProjected>
            </Styled.Row>

            <Styled.Row style={{ alignItems: "center", gap: "0.5rem" }}>
              <Styled.Column>
                <Styled.Title>Prazo de conclusão</Styled.Title>
                <Styled.Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Styled.Text>{dadosJob?.timeExpected} Dias</Styled.Text>
                </Styled.Row>
              </Styled.Column>
            </Styled.Row>
          </Styled.SpaceBetween>
          <Styled.Column style={{ marginTop: 20 }}>
            <Styled.Title>Descrição:</Styled.Title>
            <Styled.Description>{dadosJob?.description}</Styled.Description>
            <Styled.Options.Container>
              <Styled.Title>Conhecimento nescessário:</Styled.Title>
              <Styled.Row>
                {tools.map((dados) => (
                  <Styled.Options.Card>{dados?.name}</Styled.Options.Card>
                ))}
              </Styled.Row>
            </Styled.Options.Container>
            <Styled.ContentValor>
              <Styled.Title>Valor do projeto:</Styled.Title>
              <Styled.Valor>R$ {parseFloat(dados?.value).toLocaleString('pt-BR')}</Styled.Valor>
            </Styled.ContentValor>
            <Styled.ContentButton>
              <Styled.ButtonSend onClick={sendAcceptyProposta}>
                Enviar Proposta
              </Styled.ButtonSend>
            </Styled.ContentButton>
          </Styled.Column>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};

export default InfoJob;
