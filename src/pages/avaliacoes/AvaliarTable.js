import React from "react";
import { Table } from "react-bootstrap";
import "./Table.styled";
import { Container } from "./Table.styled";
import { MdStarBorder, MdStar } from "react-icons/md";
import { FilledButton } from "../../components/UI/buttons/Button";
import Colors from "../../constants/Colors";
import { useState } from "react";
import { get, post } from "../../services/Generected";
import { useEffect } from "react";
import moment from "moment";
import { getId } from "../../hooks/Cookies";
import { AmbienteBackend } from "../../hooks/Ambiente";
import ModalStatus from "../../components/UI/modal/modal-status/ModalStatus";

const AvaliarTeste = () => {
  const [avaliar, setAvaliar] = useState("");
  const [avaliacao, setAvaliacao] = useState([]);
  const [avaliacaoAtual, setAvaliacaoAtual] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const idUser = getId();
  const URIGet = AmbienteBackend() + `/avaliacoes/desenvolvedor/${idUser}`;

  function handleFetchOnClose() {
    setSucesso(false);
  }

  async function handleFetchAvaliacao() {
    const response = await get(URIGet);

    const myAvalacoes = [...response.data.myAvaliations];
    const evaluates = [...response.data.evaluates];

    const newEvaluates = evaluates.filter(
      (e) => !myAvalacoes.find((m) => m.id === e.id)
    );

    setAvaliacao(newEvaluates);
  }

  async function handleFetchAvaliar(id) {
    const URI =
      AmbienteBackend() +
      `/avaliacoes/desenvolvedor/${id}/${avaliar}/${idUser}`;
    const response = await post(URI);
    console.log(avaliar);

    if (response.status === 201) handleAvaliacaoAtual();
    setAvaliar(response);
    setSucesso(true);
  }

  function handleAvaliacaoAtual(itemId, index) {
    setAvaliar(index + 1);

    setAvaliacaoAtual((prevAvaliacaoAtual) => ({
      ...prevAvaliacaoAtual,
      [itemId]: index + 1,
    }));
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
              <th scope="col">Avaliar</th>
            </tr>
          </thead>

          <tbody>
            {avaliacao.map((dados, index) => {
              const idAvaliacao = dados.id;
              return (
                <tr
                  key={index}
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
                        {[...Array(5)].map((_, i) => (
                          <MdStar
                            key={i}
                            size={24}
                            color={
                              i < avaliacaoAtual[idAvaliacao]
                                ? "yellow"
                                : "gray"
                            }
                            onClick={() => handleAvaliacaoAtual(idAvaliacao, i)}
                          />
                        ))}
                      </div>

                      <FilledButton
                        width={140}
                        height={41}
                        marginRight={"0px"}
                        marginLeft={"0px"}
                        color={Colors.BLACK}
                        onClick={() => handleFetchAvaliar(idAvaliacao)}
                      >
                        Avaliar
                      </FilledButton>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {sucesso ? (
          <ModalStatus
            status={"sucess"}
            texto={"Avaliado com sucesso"}
            onClose={handleFetchOnClose}
            modalError={sucesso}
          />
        ) : (
          <ModalStatus
            status={"error"}
            texto={"Não foi possível avaliar"}
            onClose={handleFetchOnClose}
            modalError={sucesso}
          />
        )}
      </Container>
    </>
  );
};

export default AvaliarTeste;
