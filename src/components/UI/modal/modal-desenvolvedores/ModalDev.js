import React, { useState } from "react";
import Styled from "./ModalDev.styled";

const ModalDev = ({ list }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDiv, setSelectedDiv] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getDivColor = (option) => {
    return selectedDiv === option ? "#20ac69" : "#4DFF7E";
  };

  const getDivContent = (option) => {
    return selectedDiv === option ? (
      <Styled.SpanIcons onClick={handleDivClick}>X</Styled.SpanIcons>
    ) : (
      <Styled.SpanIcons>+</Styled.SpanIcons>
    );
  };

  const handleDivClick = () => {
    setSelectedDiv(selectedOption);
    setSelectedOption("");
  };

  const handleButtonClick = () => {
    setSelectedDiv(selectedOption);
  };

  return (
    <>
      <Styled.DivSearch>
        <Styled.SelectSearch
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Selecionar filtros</option>
          {list.map((option) => (
            <option key={option} value={option.value}>
              {option.label}
            </option>
          ))}
        </Styled.SelectSearch>
        <Styled.InputSearch
          type="search"
          placeholder={"Digite o que deseja encontrar"}
        />
        <Styled.ButtonSearch onClick={handleButtonClick}>
          Selecionar Filtros
        </Styled.ButtonSearch>
      </Styled.DivSearch>
      <Styled.DivSearch>
        <hr></hr>
        <Styled.DivFilters>
          {list.map((option) => (
            <Styled.DivFiltreds cor={getDivColor(option.value)}>
              {option.label} {getDivContent(option.value)}
            </Styled.DivFiltreds>
          ))}
        </Styled.DivFilters>
        <hr></hr>
      </Styled.DivSearch>
      <Styled.DivButton>
        <Styled.ButtonSearch tamanho={"248px"}>Filtrar</Styled.ButtonSearch>
      </Styled.DivButton>
    </>
  );
};

export default ModalDev;
