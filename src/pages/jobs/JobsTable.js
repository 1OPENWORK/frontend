import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../avaliacoes/Table.styled";
import { Container } from "../avaliacoes/Table.styled";
import { MdStarBorder } from "react-icons/md";
import { get } from "../../services/Generected";
import { AmbienteBackend } from "../../hooks/Ambiente";
import { useDispatch } from "react-redux";
import { changeDadosJobInfo } from "../../store/reducers/JobInfoSlice";
import { useNavigate } from "react-router-dom";
import { InfoJobPath } from "../../constants/Path";

const JobsTeste = () => {
  const URI = AmbienteBackend() + "/api/projetos";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [devs, setDevs] = useState([]);

  const handleInfoJobs = (dados) => {
    dispatch(changeDadosJobInfo({ dados: dados }));
    navigate(InfoJobPath);
  };

  async function handleFetchJobs() {
    const response = await get(URI);
    setDevs(response.data);
  }

  useEffect(() => {
    handleFetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th scope="col">Empresa</th>
              <th scope="col">Título</th>
              <th scope="col">Descrição</th>
              <th scope="col">Tempo aproximado</th>
              <th scope="col">Devs necessários</th>
              <th scope="col">Valor estimado</th>
            </tr>
          </thead>

          <tbody>
            {devs.map((dados, index) => (
              <tr
                onClick={() => handleInfoJobs(dados)}
                style={{ cursor: "pointer" }}
                key={`${dados.id}-${index}`}
                data={dados}
                className={index % 2 === 0 ? "gray-row" : "white-row"}
              >
                <td>
                  <div className="containerCompany">
                    <img className="img" src={dados.imageCompany} alt="logo" />
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
                  <p>{dados.title}</p>
                </td>
                <td>
                  <p style={{}}>
                    {dados.description.length > 50
                      ? dados.description.slice(0, 50) + "..."
                      : dados.description}
                  </p>
                </td>
                <td className="date">{dados.timeExpected} dias</td>
                <td className="date">{dados.maxDevelopers} devs</td>
                <td className="date">R$ {dados.value},00</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default JobsTeste;
