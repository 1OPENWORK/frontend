import React, { useState, useEffect } from "react";
import { Container } from "./CardOverviewOne.styled";
import { HiUserGroup } from "react-icons/hi";
import Colors from "../../../../../../constants/Colors";
import moment from "moment";
import { NumericFormat } from "react-number-format";
import { FaUser } from "react-icons/fa";

function CardOverviewOne({ debouncedInputValues, selectedOptions, type }) {
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
          {type === 1 ? (
            <>
              <HiUserGroup size={66} color={`${Colors.PRIMARY_COLOR}`} />
              <br />
              <label>Projeto grande</label>
            </>
          ) : (
            <>
              <FaUser size={66} color={`${Colors.PRIMARY_COLOR}`} />
              <br />
              <label>Projeto pequeno</label>
            </>
          )}

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
              Fim estimado:{" "}
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
              {selectedOptions.map((option) => (
                <div key={option.id} className="card-tool">
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CardOverviewOne;
