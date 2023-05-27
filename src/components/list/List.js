// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import { React, useState } from "react";
import Styled from "./List.styled";
import ListJobs from "./ListJobs";
import ListAvaliacao from "./listAvaliacao/ListAvaliacao";
import { useNavigate } from "react-router-dom";
import { AvaliarPath } from "../../constants/Path";
import ModalDev from "../../components/UI/modal/modal-desenvolvedores/ModalDev";
import Modal from "react-modal";
import CustomModal from "../../components/UI/modal/Modal";
import {
  ModalHeader,
  ModalTitle,
  ModalClosedButton,
} from "../../components/UI/modal/Modal.styled.js";
// -----------------------------------------------------

// --------------------------------------------------------
// NavBar INTERFACE
// --------------------------------------------------------

/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const List = ({ type }) => {
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const desenvolvedoresList = [
    { label: "Nome", value: "Nome" },
    { label: "Valor Hora", value: "ValorHora" },
    { label: "Avaliação", value: "Avaliacao" },
  ];

  const avaliacoesList = [
    { label: "Empresa", value: "Empresa" },
    { label: "Data projeto", value: "FimDoProjeto" },
    { label: "Avaliação", value: "Avaliacao" },
  ];

  const jobsList = [
    { label: "Empresa", value: "Empresa" },
    { label: "Tempo", value: "TempoAproximado" },
    { label: "Devs", value: "Devs" },
    { label: "Valor", value: "Valor" },
  ];

  function handleCellClick() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Styled.ContainerList>
        <Styled.TitleList>
          <Styled.ContainerButtonTitleList>
            {type === 1 ? (
              <Styled.Button1TitleList index={0}>
                Usuários
              </Styled.Button1TitleList>
            ) : type === 2 ? (
              <>
                <Styled.Button1TitleList index={0}>
                  Avaliações
                </Styled.Button1TitleList>

                <Styled.Button1TitleList index={1}>
                  Avaliar
                </Styled.Button1TitleList>
              </>
            ) : type === 3 ? (
              <>
                <Styled.Button1TitleList
                  index={0}
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  Dashboard
                </Styled.Button1TitleList>

                <Styled.Button1TitleList
                  index={1}
                  onClick={() => {
                    navigate("/financeira");
                  }}
                >
                  Financeira
                </Styled.Button1TitleList>
              </>
            ) : (
              <Styled.Button1TitleList
                index={0}
                onClick={() => {
                  navigate(AvaliarPath);
                }}
              >
                Jobs
              </Styled.Button1TitleList>
            )}

            {type !== 3 ? (
              <Styled.Button1TitleList index={1} onClick={handleCellClick}>
                Filtros
              </Styled.Button1TitleList>
            ) : (
              ""
            )}
          </Styled.ContainerButtonTitleList>
        </Styled.TitleList>

        {type === 1 ? (
          <ListJobs type={1}></ListJobs>
        ) : type === 2 ? (
          <ListAvaliacao type={1}></ListAvaliacao>
        ) : (
          ""
        )}
      </Styled.ContainerList>
      <CustomModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        tamanho={"500px"}
      >
        <ModalHeader>
          <ModalTitle>Filtros</ModalTitle>
          <ModalClosedButton onClick={handleCloseModal}>x</ModalClosedButton>
        </ModalHeader>
        <ModalDev
          list={
            type == 1
              ? desenvolvedoresList
              : type == 2
              ? avaliacoesList
              : jobsList
          }
        />
      </CustomModal>
    </>
  );
};

export default List;
