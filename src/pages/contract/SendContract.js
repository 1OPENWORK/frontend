import React, { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import {
  ContainerComponents,
  Container,
  Header,
  Img,
  NameGrade,
  Name,
  ContainerGrade,
  Grade,
  ContainerNameProject,
  ContentText,
  CardProject,
  NameProject,
  HourDificulty,
  Title,
  SubTitle,
  Content,
  ContainerLanguages,
  Languages,
  IconAndName,
  Aside,
  Article,
  ContainerCard,
  ContainerProposal,
  ContainerImgEnviarProposta,
  ContentTextSobre,
  HeaderContainer,
} from "./SendContract.styled";
import { MdHome, MdStarBorder } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FilledButton } from "../../components/UI/buttons/Button";
import ImgEnviarProposta from "../../assets/imgs/img-enviar-proposta.svg";
import Colors from "../../constants/Colors";
import { get, post } from "../../services/Generected";
import { AmbienteBackend } from "../../hooks/Ambiente";
import { getId, getToken } from "../../hooks/Cookies";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../store/reducers/PerfilSlice";
import axios from "axios";
import { ChatPath, HomeCompanyPath } from "../../constants/Path";
import axiosInstance from "../../services/Axios";
import { ToastError, ToastSuccess } from "../../helpers/Toast";
import ModalStatus from "../../components/UI/modal/modal-status/ModalStatus.styled";
import { ToastContainer } from "react-toastify";

const SendContract = () => {
  const id = getId();
  const { dadosPerfil } = useSelector(selectedPerfil);
  const URI = AmbienteBackend();
  const params = useParams();
  const [perfil, setPerfil] = useState({});
  const [aboutMe, setAboutMe] = useState({});
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  async function SendProposta(idProject) {
    try {
      const response = await axiosInstance.post(
        URI + `/api/propostas/empresa/proposta/${dadosPerfil.perfil.idCompany}`,
        { idProject: idProject, idUser: params.id, tipo: "BIG" }
      );

      if (response.status === 201) {
        navigate(HomeCompanyPath);
      }
    } catch (error) {
      ToastError("Error");
    }
  }

  useEffect(() => {
    ToastSuccess("Proposta enviada com sucesso!");
  }, []);

  const handleInformationUser = async () => {
    try {
      const { data, status } = await axiosInstance.get(
        URI + "/api/usuarios/perfil/" + params.id
      );

      if (status === 200) {
        setPerfil(data.perfil);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAboutMe = async () => {
    try {
      const { data, status } = await axiosInstance.get(
        URI + "/api/usuarios/sobre-mim/" + params.id
      );

      if (status === 200) {
        setAboutMe(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleProjects = async () => {
    try {
      const { data, status } = await axiosInstance.get(
        URI + "/api/projetos/" + dadosPerfil.perfil.idCompany
      );

      if (status === 200) {
        setProjects(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInformationUser();
    handleAboutMe();
    handleProjects();
  }, []);

  return (
    <>
      <Container>
        <ContainerComponents>
          <HeaderContainer>
            <Header>
              <Img src={perfil.image} />
              <NameGrade>
                <Name>{perfil.name}</Name>
                <ContainerGrade>
                  <MdStarBorder size={24} />
                  <Grade>{aboutMe.grade}</Grade>
                </ContainerGrade>
              </NameGrade>
            </Header>

            <FaArrowLeft
              onClick={() => navigate(HomeCompanyPath)}
              style={{ cursor: "pointer" }}
              size={40}
            />
          </HeaderContainer>

          <ContentTextSobre>{aboutMe.description}</ContentTextSobre>

          <ContainerNameProject>
            <ContentText>Meus projetos</ContentText>
          </ContainerNameProject>

          {projects.length > 0 &&
            projects.map((dados, index) => (
              <CardProject>
                <NameProject>{dados.title}</NameProject>
                <ContainerCard>
                  <Aside>
                    <HourDificulty>
                      <Content>
                        <Title>Nível de dificuldade</Title>
                        <SubTitle>{dados.maxDevelopers}</SubTitle>
                      </Content>
                      <Content>
                        <Title>Carga horária</Title>
                        <SubTitle>{dados.timeExpected} dias</SubTitle>
                      </Content>
                    </HourDificulty>

                    <ContainerLanguages>
                      <Title>Linguagens</Title>
                      <Languages>
                        {dados.tools.map((d) => (
                          <IconAndName>
                            <MdStarBorder size={40} />
                            <SubTitle>{d.name}</SubTitle>
                          </IconAndName>
                        ))}
                      </Languages>
                    </ContainerLanguages>

                    <FilledButton
                      heigth={41}
                      width={106}
                      marginTop={"2.5rem"}
                      marginLeft={"0px"}
                      color={Colors.PRIMARY_COLOR}
                      onClick={() => navigate(ChatPath)}
                    >
                      Chat
                    </FilledButton>
                  </Aside>

                  <Article>
                    <ContainerProposal>
                      <ContainerImgEnviarProposta src={ImgEnviarProposta} />
                      <FilledButton
                        color={Colors.BLACK}
                        heigth={41}
                        width={180}
                        marginTop={"1.5rem"}
                        onClick={() => SendProposta(dados.id)}
                      >
                        Enviar proposta
                      </FilledButton>
                    </ContainerProposal>
                  </Article>
                </ContainerCard>
              </CardProject>
            ))}
        </ContainerComponents>
      </Container>
    </>
  );
};

export default SendContract;
