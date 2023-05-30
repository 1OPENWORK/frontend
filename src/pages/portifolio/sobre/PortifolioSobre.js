import React, { useEffect, useState } from "react";
import Styled from "./PortifolioSobre.styled";
import { FilledButton } from "../../../components/UI/buttons/Button";
import { MdAdd, MdCircle, MdStarBorder } from "react-icons/md";
import Colors from "../../../constants/Colors";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../../store/reducers/PerfilSlice";
import { selectedAuth } from "../../../store/reducers/AuthSlice";
import PortifolioService from "../service/PortifolioService";
import { toast } from "react-toastify";

const PortifolioSobre = () => {
  const dispatch = useDispatch();

  const { dadosPerfil } = useSelector(selectedPerfil);
  const { auth } = useSelector(selectedAuth);

  const [grade, setGrade] = useState("");
  const [description, setDescription] = useState("");
  const [searchFor, setSearchFor] = useState("");
  const [specialization, setSpecialization] = useState([]);

  const fetchInformation = async () => {
    const { data } = await PortifolioService.fetchMyInformations(
      dadosPerfil.perfil.id,
      auth.token
    );

    setGrade(data.grade);
    setDescription(data.description);
    setSearchFor(data.searchFor);
    setSpecialization(data.specialization);
  };

  const handleUpdateInformations = async () => {
    try {
      const dados = {
        aboutMe: description,
        searchFor: searchFor,
      };

      const response = await PortifolioService.updateAboutMe(
        dadosPerfil.perfil.id,
        dados,
        auth.token
      );

      if (response.status === 200) {
        toast.success("Infomações atualizadas com sucesso.", {
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
      toast.error(error.errors[0], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.ImgUser>
          <MdAdd size={24} color={Colors.WHITE} />
        </Styled.ImgUser>

        <Styled.ContainerHeader>
          <Styled.NameUser>{dadosPerfil.perfil.name}</Styled.NameUser>
          <Styled.ContainerNoteArea>
            <Styled.Note>
              <MdStarBorder size={24} />
              <Styled.Text>{grade}</Styled.Text>
            </Styled.Note>

            <Styled.Specializations>
              <Styled.Text>
                {specialization.map(
                  (dados, index) =>
                    index < 2 &&
                    dados.nameSpecilization +
                      (index !== specialization.length - 1 ? ", " : "")
                )}
              </Styled.Text>
            </Styled.Specializations>
          </Styled.ContainerNoteArea>
        </Styled.ContainerHeader>
      </Styled.Header>

      <Styled.ContainerData>
        <Styled.ContainerAboutMe>
          <Styled.Title>Sobre mim</Styled.Title>
          <Styled.ContentBox
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Exemplo: De origens humildes, enfrentei adversidades com determinação e coragem, transformando cada obstáculo em oportunidade de aprendizado. Hoje, carrego a experiência de uma história de vida resiliente e inspiradora, pronta para conquistar novos horizontes."
          >
            {description}
          </Styled.ContentBox>
        </Styled.ContainerAboutMe>

        <Styled.DivRow>
          <Styled.ContainerWhatLook>
            <Styled.Title>O que procuro</Styled.Title>
            <Styled.ContentBox
              value={searchFor}
              onChange={(e) => setSearchFor(e.target.value)}
              placeholder="Exemplo: Comprometido em impulsionar o crescimento e alcançar resultados excepcionais, sempre buscando novos desafios para evoluir no mundo profissional."
              style={{ height: 200 }}
            >
              {searchFor}
            </Styled.ContentBox>
          </Styled.ContainerWhatLook>

          <Styled.ContainerPreferences>
            <Styled.Title>Especializações</Styled.Title>

            <Styled.ContentPreferences>
              {specialization.map((dados, index) => (
                <Styled.ItemContent>
                  <MdCircle size={16} />
                  <Styled.Itens>{dados.nameSpecilization}</Styled.Itens>
                </Styled.ItemContent>
              ))}
            </Styled.ContentPreferences>
          </Styled.ContainerPreferences>
        </Styled.DivRow>
      </Styled.ContainerData>

      <Styled.ContainerButtons>
        <FilledButton
          marginLeft={"0px"}
          color={Colors.BLACK}
          width={190}
          heigth={60}
          onClick={handleUpdateInformations}
        >
          Salvar
        </FilledButton>
      </Styled.ContainerButtons>
    </Styled.Container>
  );
};

export default PortifolioSobre;
