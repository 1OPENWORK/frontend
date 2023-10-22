import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import "../avaliacoes/Table.styled";
import { Container } from "../avaliacoes/Table.styled";
import { MdStarBorder } from "react-icons/md";
import { get } from "../../services/Generected";
import { AmbienteBackend } from "../../hooks/Ambiente";
import { getId, getToken } from "../../hooks/Cookies";
import { FilledButton } from "../../components/UI/buttons/Button";
import Colors from "../../constants/Colors";
import axios from "axios";
import axiosInstance from "../../services/Axios";
import { toast } from "react-toastify";
import { ToastSuccess } from "../../helpers/Toast";
// --------------------------------------------------------
// Devs INTERFACE
// --------------------------------------------------------
/**
 * A component that renders a Screen.
 *
 * @param props Properties
 * @param props.route The route
 * @param props.navigation The navigator
 * @returns The component JSX.
 */

const JobsPropostas = () => {
  const id = getId();
  const token = getToken();
  const URI = AmbienteBackend();

  const [jobs, setJobs] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [idProject, setIdProject] = useState(0);

  async function handleFetchDesenvolvedores() {
    const response = await get(URI + `/api/propostas/desenvolvedor/${id}`);
    setJobs(response.data);
  }

  const handleShowModal = () => setShowModal(true);
  const hideShowModal = () => setShowModal(false);

  const handleAccpted = async () => {
    const response = await axiosInstance.post(
      URI + "/api/projetos-aceitos/projetos-grandes",
      { idBigProject: idProject, usersId: [parseInt(id)] }
    );

    if (response.status === 201) {
      ToastSuccess("Proposta aceita com sucesso!");
    }

    hideShowModal();
  };

  useEffect(() => {
    handleFetchDesenvolvedores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Modal
          size="lg"
          show={showModal}
          onHide={hideShowModal}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Proposta de projeto</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ fontSize: 20 }}>
            Deseja aceitar essa proposta?
          </Modal.Body>
          <Modal.Footer>
            <FilledButton
              onClick={handleAccpted}
              marginTop={"20px"}
              marginRight={"0px"}
              color={Colors.PRIMARY_COLOR}
              width={190}
              heigth={60}
              semHouver={true}
            >
              {"Aceitar"}
            </FilledButton>
          </Modal.Footer>
        </Modal>

        <Table striped borderless hover>
          <thead>
            <tr>
              <th scope="col">Empresa</th>
              <th scope="col">Descrição</th>
              <th scope="col">Tempo aproximado</th>
              <th scope="col">Devs necessários</th>
              <th scope="col">Valor estimado</th>
            </tr>
          </thead>

          <tbody>
            {jobs ? (
              jobs.map((dados, index) => (
                <tr
                  onClick={() => {
                    handleShowModal();
                    setIdProject(dados.idProject);
                  }}
                  style={{ cursor: "pointer" }}
                  key={`${dados.id}-${index}`}
                  data={dados}
                  className={index % 2 === 0 ? "gray-row" : "white-row"}
                >
                  <td>
                    <div className="containerCompany">
                      <img
                        className="img"
                        src={dados.imageCompany}
                        alt="logo"
                      />
                      <div className="profileInformation">
                        <h1>{dados.nameCompany}</h1>
                        <div className="grade">
                          <MdStarBorder size={16} />
                          <h2>{Math.fround(dados.grade).toFixed(1)}</h2>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{dados.description}</p>
                  </td>
                  <td className="date">{dados.timeExpected} dias</td>
                  <td className="date">{dados.maxDevelopers} devs</td>
                  <td className="date">R$ {dados.value},00</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="date" colSpan="5">
                  Nenhuma proposta foi enviada...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default JobsPropostas;
