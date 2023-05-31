// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import { React, useState } from "react";
import Styled from "./CardList.styled";
import ListJobs from "./ListJobs";
import { useNavigate } from "react-router-dom";
import {
  AvaliarPath,
  DashboardFinanceiraPath,
  FinanceiraPath,
} from "../../constants/Path";

import ListAvaliacao from "./listAvaliar/ListAvaliar";
import ModalDev from "../../components/UI/modal/modal-desenvolvedores/ModalDev";
import CustomModal from "../../components/UI/modal/Modal";
import {
  ModalHeader,
  ModalTitle,
  ModalClosedButton,
} from "../../components/UI/modal/Modal.styled.js";
import ModalStatus from "../UI/modal/modal-status/ModalStatus";
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
  const [modalStatusIsOpen, setmodalStatusIsOpen] = useState(false);

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

  function handleOpenModalStatus() {
    setmodalStatusIsOpen(true);
  }

  function handleCloseModalStatus() {
    setmodalStatusIsOpen(false);
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

                <Styled.Button1TitleList
                  index={1}
                  onClick={() => {
                    navigate(AvaliarPath);
                  }}
                >
                  Avaliar
                </Styled.Button1TitleList>
              </>
            ) : type === 3 ? (
              <>
                <Styled.Button1TitleList
                  index={0}
                  onClick={() => {
                    navigate(DashboardFinanceiraPath);
                  }}
                >
                  Dashboard
                </Styled.Button1TitleList>

                <Styled.Button1TitleList
                  index={1}
                  onClick={() => {
                    navigate(FinanceiraPath);
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

      <CustomModal
        isOpen={modalStatusIsOpen}
        onClose={handleCloseModalStatus}
        tamanho={"545px"}
        altura={"250px"}
        children={
          <ModalStatus
            status={"success"}
            texto={"Acerto em bla bla bla"}
            onClose={handleCloseModalStatus}
          />
        }
      ></CustomModal>
    </>
  );
};

export default List;
