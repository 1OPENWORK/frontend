import React, { useState, useEffect } from "react";
import { Container } from "./CardOverviewOne.styled";
import { HiUserGroup } from "react-icons/hi";
import Colors from "../../../../../../constants/Colors";
import moment from "moment";
import { NumericFormat } from "react-number-format";

function CardOverviewOne({ debouncedInputValues }) {
  const [startDate, setStartDate] = useState(moment()); // Data inicial, pode ser atualizada conforme necessário
  const [durationInMonths, setDurationInMonths] = useState(
    debouncedInputValues.estimatedTime
  ); // Duração em meses, pode ser atualizada conforme necessário
  const [endDate, setEndDate] = useState(null); // Data final calculada

  function formatNumber(value, prefix, thousandSeparator, decimalSeparator) {
    const parts = value.toString().split(decimalSeparator);
    const formattedValue = parts[0].replace(
      /\B(?=(\d{3})+(?!\d))/g,
      thousandSeparator
    );

    if (parts.length === 2) {
      return `${prefix}${formattedValue}${decimalSeparator}${parts[1]}`;
    } else {
      return `${prefix}${formattedValue}`;
    }
  }

  const formattedValue = formatNumber(
    debouncedInputValues.value,
    "R$",
    ".",
    ","
  );

  useEffect(() => {
    // Função para calcular a data final com base na data inicial e na duração em meses
    const calculateEndDate = () => {
      const calculatedEndDate = moment(startDate).add(
        durationInMonths,
        "months"
      );
      setEndDate(calculatedEndDate);
    };

    calculateEndDate();
  }, [startDate, durationInMonths]);
  return (
    <>
      <Container>
        <h2>{debouncedInputValues.nameProject}</h2>

        <div className="content-desc-over">
          <HiUserGroup size={66} color={`${Colors.PRIMARY_COLOR}`} />
          <br />
          <label>Projeto grande</label>
          <br />
          <p
            style={{
              wordBreak: "break-all",
              maxHeight: "150px",
              overflowY: "scroll",
            }}
          >
            {debouncedInputValues.describe}
          </p>
        </div>
        <br />
        <br />

        <div className="content-desc-over">
          <label>{debouncedInputValues.qntdPeople} Integrantes</label>
          <br />
          <div className="content-data">
            <h3>
              Data Inicio: <span>{startDate.format("DD/MM/YYYY")}</span>
            </h3>
            <h3>
              Data Final:{" "}
              <span>{endDate ? endDate.format("DD/MM/YYYY") : "-"}</span>
            </h3>
            <h3>
              Valor Bruto: <span>{formattedValue}</span>
            </h3>

            <h3>
              N° Parcelas: <span>{debouncedInputValues.estimatedTime}</span>
            </h3>
          </div>
        </div>
        <div className="content-desc-over">
          <div className="content-display">
            <label>{"Linguagens e Softwares"}</label>
            <br />
            <div className="content-tools">
              <div className="card-tool">
                <p>React</p>
              </div>
              <div className="card-tool">
                <p>Java</p>
              </div>
              <div className="card-tool">
                <p>C#</p>
              </div>
              <div className="card-tool">
                <p>Python</p>
              </div>
              <div className="card-tool">
                <p>PHP</p>
              </div>
              <div className="card-tool">
                <p>Ruby</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CardOverviewOne;
