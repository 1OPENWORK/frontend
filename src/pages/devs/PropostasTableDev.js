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
  color: #FFFFFF;
  border: none;
`;

const ButtonClose = styled.button`
  width: 100px;
  height: 60px;
  background-color: ${Colors.BLACK};
  font-size: 20px;
  color: #FFFFFF;
  border: none;
  margin-left: 20px;

`;

const ModalAccepty = ({ show, onHide, dados }) => {
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
      <Modal.Body style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Button>Aceitar Proposta</Button>
        <ButtonClose onClick={onHide}>Fechar</ButtonClose>
      </Modal.Body>
    </Modal>
  );
};

const PropostaDesenvolvedores = () => {
  const idCompany = getCompanyId();
  const [modalShow, setModalShow] = useState(false);
  const URI = AmbienteBackend() + `/api/propostas/empresa/${idCompany}`;

  const [devs, setDevs] = useState([]);
 

  async function handleFetchDesenvolvedores() {
    const response = await get(URI);
    console.log(response);
    setDevs(response.data);
  }

  useEffect(() => {
    handleFetchDesenvolvedores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  onClick={() => setModalShow(true)}
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
                  <ModalAccepty
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    dados={dados}
                  />
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

export default PropostaDesenvolvedores;
