import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./Table.styled";
import { Container } from "./Table.styled";
import { MdStarBorder, MdStar } from "react-icons/md";
import { get } from "../../services/Generected";
import { useEffect } from "react";
import moment from "moment";

const AvaliacaoTeste = ({ type }) => {
  const URI =
    process.env.REACT_APP_BACKEND_LOCAL_HOST + "/avaliacoes/desenvolvedor/1";
  const [avaliacao, setAvaliacao] = useState([]);

  async function handleFetchAvaliacao() {
    const response = await get(URI);
    setAvaliacao(response.data.myAvaliations);
  }

  useEffect(() => {
    handleFetchAvaliacao();
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
                <td className="date">
                  {moment(dados.timeExpected).format("DD/MM/YYYY")}
                </td>
                <td>
                  <div className="evaluate">
                    <div className="stars">
                      <MdStar size={24} />
                      <MdStar size={24} />
                      <MdStarBorder size={24} />
                      <MdStarBorder size={24} />
                      <MdStarBorder size={24} />
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
