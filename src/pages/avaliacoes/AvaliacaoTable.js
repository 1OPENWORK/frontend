import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./Table.styled";
import { Container } from "./Table.styled";
import { MdStarBorder, MdStar } from "react-icons/md";
import { get } from "../../services/Generected";
import { useEffect } from "react";
import moment from "moment";
import { getId } from "../../hooks/Cookies";
import { AmbienteBackend } from "../../hooks/Ambiente";

const AvaliacaoTeste = ({ type }) => {
  const id = getId();
  const URI = AmbienteBackend() + `/avaliacoes/desenvolvedor/${id}`;
  const [avaliacao, setAvaliacao] = useState([]);

  async function handleFetchAvaliacao() {
    const response = await get(URI);
    setAvaliacao(response.data.myAvaliations);
    console.log(response);
  }

  useEffect(() => {
    handleFetchAvaliacao();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th scope="col">Empresa</th>
              <th scope="col">Descrição</th>
              <th scope="col">Fim do projeto</th>
              <th scope="col">Minha nota</th>
            </tr>
          </thead>

          <tbody>
            {avaliacao.map((dados, index) => (
              <tr
                key={dados.id}
                className={index % 2 === 0 ? "gray-row" : "white-row"}
              >
                <td>
                  <div className="containerCompany">
                    <img className="img" src={dados.image} alt="logo" />
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
                <td className="date">
                  {moment(dados.timeExpected).format("DD/MM/YYYY")}
                </td>
                <td>
                  <div className="evaluate">
                    <div className="stars">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>
                          {index < dados.myGrade ? (
                            <MdStar color="yellow" size={24} />
                          ) : (
                            <MdStar color="gray" size={24} />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AvaliacaoTeste;
