import React, { useEffect, useState } from "react";
import Styled from "./Experiencia.styled";
import Colors from "../../../constants/Colors";
import { MdAdd, MdStarBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../../store/reducers/PerfilSlice";
import { selectedAuth } from "../../../store/reducers/AuthSlice";
import { FilledButton } from "../../../components/UI/buttons/Button";
import PortifolioService from "../service/PortifolioService";
import { toast } from "react-toastify";

const Experiencia = () => {
  const { dadosPerfil } = useSelector(selectedPerfil);
  const { auth } = useSelector(selectedAuth);
  const [experience, setExperiencie] = useState("");

  const fetchMyExperiencies = async () => {
    const { data } = await PortifolioService.fetchMyExperiencie(
      dadosPerfil.perfil.id,
      auth.token
    );

    setExperiencie(data.experience);
  };

  const updateMyExperiencies = async () => {
    try {
      const response = await PortifolioService.updateExperiencie(
        dadosPerfil.perfil.id,
        { experience: experience },
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
      toast.error("Não foi possível salvar as informações.", {
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
    fetchMyExperiencies();
  }, []);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.ImgUser img={dadosPerfil.perfil.image}>
          {dadosPerfil.perfil.image === null && (
            <MdAdd size={24} color={Colors.WHITE} />
          )}
        </Styled.ImgUser>
        <Styled.ContainerHeader>
          <Styled.NameUser>{dadosPerfil.perfil.name}</Styled.NameUser>
        </Styled.ContainerHeader>
      </Styled.Header>

      <Styled.ContainerData>
        <Styled.ContainerAboutMe>
          <Styled.Title>Experiência</Styled.Title>
          <Styled.Text style={{ fontWeight: 400, marginTop: 30 }}>
            Dê o primeiro passo para compartilhar sua valiosa experiência
            conosco. Cadastre suas informações pessoais e permita-nos conhecer o
            profissional talentoso e experiente que você se tornou. Cada detalhe
            fornecido nos ajudará a criar um ambiente onde suas habilidades e
            conquistas serão valorizadas. Juntos, vamos construir um espaço onde
            sua expertise poderá contribuir para o sucesso coletivo. Seja
            bem-vindo(a) aos primeiros passos para compartilhar sua história de
            sucesso!
          </Styled.Text>
        </Styled.ContainerAboutMe>

        <Styled.DivRow>
          <Styled.ContainerWhatLook>
            <Styled.ContentBox
              value={experience}
              onChange={(e) => setExperiencie(e.target.value)}
              placeholder="Exemplo: Minha jornada profissional é marcada por uma paixão inabalável pela inovação e busca constante por desafios. Ao longo dos anos, tive o privilégio de trabalhar em projetos desafiadores, onde pude aprimorar minhas habilidades técnicas e liderança. Cada experiência vivida foi um degrau na escada do meu crescimento profissional, me proporcionando insights valiosos e a oportunidade de colaborar com equipes talentosas. Estou entusiasmado(a) em compartilhar meu conhecimento e contribuir para um ambiente onde o sucesso é alcançado através da criatividade, colaboração e determinação."
            ></Styled.ContentBox>
          </Styled.ContainerWhatLook>
        </Styled.DivRow>
      </Styled.ContainerData>

      <Styled.ContainerButtons>
        <FilledButton
          color={Colors.BLACK}
          width={190}
          heigth={60}
          onClick={() => updateMyExperiencies()}
        >
          Salvar
        </FilledButton>
      </Styled.ContainerButtons>
    </Styled.Container>
  );
};

export default Experiencia;
