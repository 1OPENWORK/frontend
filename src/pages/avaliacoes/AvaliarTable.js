import React from "react";
import { Table } from "react-bootstrap";
import "./Table.styled";
import { Container } from "./Table.styled";
import { MdStarBorder } from "react-icons/md";
import { FilledButton } from "../../components/UI/buttons/Button";
import Colors from "../../constants/Colors";
import { useState } from "react";
import { get, post } from "../../services/Generected";
import { useEffect } from "react";
import moment from "moment";

const AvaliarTeste = () => {
  const URI =
    process.env.REACT_APP_BACKEND_LOCAL_HOST + "/avaliacoes/empresa/1/4";
  const URIGet =
    process.env.REACT_APP_BACKEND_LOCAL_HOST + "/avaliacoes/desenvolvedor/1";

  const [avaliar, setAvaliar] = useState([]);
  const [avaliacao, setAvaliacao] = useState([]);

  async function handleFetchAvaliacao() {
    const response = await get(URIGet);
    setAvaliacao(response.data.evaluates);
  }

  async function handleFetchAvaliar() {
    const response = await post(URI);
    setAvaliar(response);
  }

  useEffect(() => {
    handleFetchAvaliacao();
  }, []);

  useEffect(() => {
    handleFetchAvaliar();
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
              <th scope="col">Avaliar</th>
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
                      <MdStarBorder size={24} />
                      <MdStarBorder size={24} />
                      <MdStarBorder size={24} />
                      <MdStarBorder size={24} />
                      <MdStarBorder size={24} />
                    </div>

                    <FilledButton
                      width={140}
                      heigth={41}
                      marginRight={"0px"}
                      marginLeft={"0px"}
                      color={Colors.BLACK}
                      onClick={handleFetchAvaliar}
                    >
                      Avaliar
                    </FilledButton>
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

export default AvaliarTeste;