import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import "../avaliacoes/Table.styled";
import { Container } from "../avaliacoes/Table.styled";
import { MdStarBorder } from "react-icons/md";
import { get } from "../../services/Generected";
import { AmbienteBackend } from "../../hooks/Ambiente";
import { getCompanyId } from "../../hooks/Cookies";
import styled from "styled-components";
import Colors from "../../constants/Colors";
import axiosInstance from "../../services/Axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../store/reducers/PerfilSlice";
import { useNavigate } from "react-router-dom";
import { ProgressPath } from "../../constants/Path";
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
 *
 */

const Button = styled.button`
  width: 200px;
  height: 60px;
  font-size: 20px;
  background-color: ${Colors.PRIMARY_COLOR};
  color: #ffffff;
  border: none;
`;

const ButtonClose = styled.button`
  width: 100px;
  height: 60px;
  background-color: ${Colors.BLACK};
  font-size: 20px;
  color: #ffffff;
  border: none;
  margin-left: 20px;
`;

const PropostaDesenvolvedores = () => {
  const idCompany = getCompanyId();
  const [modalShow, setModalShow] = useState(false);
  const [dadosProposta, setDadosProposta] = useState({});

  const URI = AmbienteBackend();
  const navigate = useNavigate();

  const { dadosPerfil } = useSelector(selectedPerfil);

  const [devs, setDevs] = useState([]);

  async function handleFetchDesenvolvedores() {
    const response = await get(URI + `/api/propostas/empresa/${idCompany}`);
    setDevs(response.data);
  }

  const handleCloseModal = () => setModalShow(false);

  useEffect(() => {
    handleFetchDesenvolvedores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ModalAccepty = ({ show, onHide, dados, handleAccepty }) => {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Proposta do {dados.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => handleAccepty(dados.idProject)}>
            Aceitar Proposta
          </Button>
          <ButtonClose onClick={handleCloseModal}>Fechar</ButtonClose>
        </Modal.Body>
      </Modal>
    );
  };

  const handleAccpted = async idProject => {
    try {
      const response = await axiosInstance.post(
        URI + "/api/projetos-aceitos/projetos-grandes",
        { idBigProject: idProject, usersId: [parseInt(dadosPerfil.perfil.id)] }
      );

      if (response.status === 201) {
        toast.success("Proposta aceita com sucesso!", {
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

      setModalShow(false);

      navigate(ProgressPath);
    } catch (error) {
      console.log(
        "🚀 ~ file: PropostasTableDev.js:119 ~ handleAccpted ~ error:",
        error
      );
    }
  };

  return (
    <>
      <Container>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Projetos concluídos</th>
              <th scope="col">Valor hora</th>
            </tr>
          </thead>

          <tbody>
            {devs ? (
              devs.map((dados, index) => (
                <tr
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setModalShow(true);
                    setDadosProposta(dados);
                  }}
                  key={dados.id}
                  className={index % 2 === 0 ? "gray-row" : "white-row"}
                >
                  <td>
                    <div className="containerCompany">
                      <img
                        className="img"
                        src={dados.image}
                        alt="imagem usuário"
                      />
                      <div className="profileInformation">
                        <h1>{dados.name}</h1>
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
                  <td className="date">{dados.completedProjects} projetos</td>
                  <td className="date">R$ {dados.hourValue},00</td>
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
        <ModalAccepty
          show={modalShow}
          onHide={handleCloseModal}
          dados={dadosProposta}
          handleAccepty={handleAccpted}
        />
      </Container>
    </>
  );
};

export default PropostaDesenvolvedores;
