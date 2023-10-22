import React, { useState } from "react";
import SideBar from "../../../components/sidebar/SideBar";
import {
  Container,
  ContainerModelContract,
  ContainerImgModelContract,
  ContainerButton,
  ContainerButtons,
} from "./AsignedContract.style";
import {
  ContainerComponents,
  ContainerNameProject,
  ContentText,
  Title,
} from "../SendContract.styled";
import ImgContratoModelo from "../../../assets/imgs/img-contrato-modelo.svg";
import { FilledButton } from "../../../components/UI/buttons/Button";
import Colors from "../../../constants/Colors";
import { AmbienteBackend } from "../../../hooks/Ambiente";
import axios from "axios";
import emailjs from "@emailjs/browser";
import axiosInstance from "../../../services/Axios";

const ModeloContrado = async () => {
  const response = await axiosInstance.get(
    AmbienteBackend() + `/fileS3/download/${"contrato-prestacao 3.pdf"}`
  );

  return response;
};

function AsignedContract() {
  const [emailEnviado, setEmailEnviado] = useState(false);

  function enviarEmail(assunto, descricao) {
    const templateParams = {
      email: "yuri.martins@sptech.school",
      from_name: "openworkAnalista@gmail.com",
      Cc: "yuri68437@gmail.com",
      subject: assunto,
      message: descricao,
    };

    emailjs
      .send(
        "service_xmllsz6",
        "template_7y306sn",
        templateParams,
        "RFDBRsIDOfvwI7OR-"
      )
      .then(
        (response) => {
          console.log("Email enviado com sucesso!");
          console.log(response);
          setEmailEnviado(true);
        },
        (err) => {
          console.error("Erro ao enviar o email:", err);
        }
      );
  }

  function iniciarProjeto() {
    // ... lógica para iniciar o projeto ...
  }

  const EnviarContratoEmail = async () => {
    try {
      // Obter o topo da pilha
      const assuntoEmail = "Contrato de Prestação de Serviços";
      const descricaoEmail = "Por favor assinar contrato!";

      // Enviar o email com o assunto e descrição
      enviarEmail(assuntoEmail, descricaoEmail);
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    }
  };

  function SendContrato() {
    const filename = "contrato-prestacao 3.pdf";
    const uri =
      AmbienteBackend() + `/fileS3/download/${encodeURIComponent(filename)}`;

    axios
      .get(uri, { responseType: "blob" })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        // Trate o erro caso ocorra
        console.error("Erro ao fazer o download do arquivo:", error);
      });
  }

  return (
    <>
      <Container>
        <SideBar />
        <ContainerComponents>
          <Title>Projeto aceito por ambas as partes</Title>
          <ContainerNameProject>
            <ContentText>ola otário</ContentText>
          </ContainerNameProject>

          <ContainerModelContract>
            <ContainerImgModelContract src={ImgContratoModelo} />
            <ContainerButton>
              <FilledButton
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={"2rem"}
                color={Colors.BLACK}
                width={212}
                heigth={41}
                onClick={ModeloContrado()}
              >
                Contrato modelo
              </FilledButton>
            </ContainerButton>
          </ContainerModelContract>

          <ContainerButtons>
            {emailEnviado ? (
              <>
                <FilledButton
                  marginLeft={"0px"}
                  marginRight={"0px"}
                  color={Colors.PRIMARY_COLOR}
                  width={190}
                  height={41}
                  onClick={iniciarProjeto}
                >
                  Iniciar Projeto
                </FilledButton>
              </>
            ) : (
              <FilledButton
                marginLeft={"0px"}
                marginRight={"0px"}
                color={Colors.PRIMARY_COLOR}
                width={190}
                height={41}
                onClick={EnviarContratoEmail}
              >
                Enviar contrato
              </FilledButton>
            )}
          </ContainerButtons>
        </ContainerComponents>
      </Container>
    </>
  );
}

export default AsignedContract;
