import React, { useEffect, useState } from "react";
import Styled from "./CompletedProjects.styled";
import { useNavigate } from "react-router-dom";
import ImageDev from "../../../assets/imgs/imageInitial.svg";
import Colors from "../../../constants/Colors";
import { PortfolioPath } from "../../../constants/Path";
import { MdAdd, MdStarBorder } from "react-icons/md";
import { FilledButton } from "../../../components/UI/buttons/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectedPerfil } from "../../../store/reducers/PerfilSlice";
import { selectedAuth } from "../../../store/reducers/AuthSlice";
import PortifolioService from "../service/PortifolioService";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import moment from "moment/moment";

const CompletedProjects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { dadosPerfil } = useSelector(selectedPerfil);
  const { auth } = useSelector(selectedAuth);
  const [projects, setProject] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenExp, setmodalIsOpenExp] = useState(false);
  const [tools] = useState([...dadosPerfil.tools]);

  function handleCellClick() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleCellClickExperience() {
    setmodalIsOpenExp(true);
  }

  function handleCloseModalExperience() {
    setmodalIsOpenExp(false);
  }

  const fetchMyProjects = async () => {
    const { data } = await PortifolioService.buscarMyProjectsDev(
      dadosPerfil.perfil.id,
      auth.token
    );

    setProject(data);
  };

  useEffect(() => {
    fetchMyProjects();
  }, []);

  return (
    <Styled.Container>
      <Styled.ContainerContent>
        <Styled.Header>
          <Styled.ImgUser img={dadosPerfil.perfil.image}>
            {dadosPerfil.perfil.image === null && (
              <MdAdd size={24} color={Colors.WHITE} />
            )}
          </Styled.ImgUser>

          <Styled.ContainerHeader>
            <Styled.NameUser>{dadosPerfil.perfil.name}</Styled.NameUser>
            <Styled.ContainerNoteArea>
              <Styled.Specializations>
                <Styled.Text>
                  {tools.map(
                    (dados, index) =>
                      dados.name + (index < tools.length - 1 ? ", " : "")
                  )}
                </Styled.Text>
              </Styled.Specializations>
            </Styled.ContainerNoteArea>
          </Styled.ContainerHeader>
        </Styled.Header>

        <Styled.Title>
          {projects.length > 0 ? "Meus projetos concluídos" : "Você não tem nenhum projeto concluído."}
        </Styled.Title>
        {projects.length > 0 &&
          projects.map((dados, index) => (
            <Styled.ContainerData>
              <h3 style={{ letterSpacing: "0.22em", fontWeight: "bold" }}>
                {dados.nameCompany}
              </h3>
              <h5>{dados.titleProject}</h5>
              <AvatarGroup max={5}>
                {dados.developers.map((d) => (
                  <Avatar alt={d.nameUser} src={d.imageUser} />
                ))}
              </AvatarGroup>

              <Styled.Content>
                <Styled.ContainerText>
                  <Styled.Text>{dados.descriptionProject}</Styled.Text>
                </Styled.ContainerText>

                <Styled.ContainerImg
                  isImg={true}
                  background={
                    dados.imageCompany !== null ? dados.imageCompany : ImageDev
                  }
                />
              </Styled.Content>
              <Styled.ContainerCalendary>
                {moment(dados.beginDate).calendar()} -{" "}
                {moment(dados.finishDate).calendar()}
              </Styled.ContainerCalendary>
            </Styled.ContainerData>
          ))}

        {/*  */}
      </Styled.ContainerContent>
    </Styled.Container>
  );
};

export default CompletedProjects;
