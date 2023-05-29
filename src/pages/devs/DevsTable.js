/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../avaliacoes/Table.styled";
import { Container } from "../avaliacoes/Table.styled";
import { MdStarBorder } from "react-icons/md";
import { get } from "../../services/Generected";
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

const Desenvolvedores = () => {
  const URI =
    process.env.REACT_APP_BACKEND_LOCAL_HOST + "/api/usuarios/desenvolvedores";

  const [devs, setDevs] = useState([]);

  async function handleFetchDesenvolvedores() {
    const response = await get(URI);
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
            {devs.map((dados, index) => (
              <tr
                key={dados.id}
                className={index % 2 === 0 ? "gray-row" : "white-row"}
              >
                <td>
                  <div className="containerCompany">
                    <img className="img" src={dados.image} />
                    <div className="profileInformation">
                      <h1>{dados.name}</h1>
                      <div className="grade">
                        <MdStarBorder size={16} />
                        <h2>{dados.grade}</h2>
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
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Desenvolvedores;
