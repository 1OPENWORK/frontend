import React from "react";
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

const ModeloContrado = async () => {
  const response = await axios.get(AmbienteBackend() + `/fileS3/download/${"contrato-prestacao 3.pdf"}`, {
  });

  return response;
};

const AsignedContract = () => {
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
            <FilledButton
              marginLeft={"0px"}
              marginRight={"0px"}
              color={Colors.BLACK}
              width={130}
              heigth={41}
            >
              Voltar
            </FilledButton>
            <FilledButton
              marginLeft={"0px"}
              marginRight={"0px"}
              color={Colors.PRIMARY_COLOR}
              width={190}
              heigth={41}
            >
              Enviar contrato
            </FilledButton>
          </ContainerButtons>
        </ContainerComponents>
      </Container>
    </>
  );
};

export default AsignedContract;
