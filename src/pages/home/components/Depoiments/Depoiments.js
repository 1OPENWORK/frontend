// --------------------------------------------------------
// Depoiments - Depoiments
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useEffect, useState } from "react";
import { TitleLarge } from "../../../../components/UI/generalLayout/Layout.styled";
import Colors from "../../../../constants/Colors";
import { TitleDivInformation } from "../../Home.styled";
import {ContainerDepoiments, ContainerImags, Paragrafo} from "./Depoiments.styled";
import ImagePerson from "../../../../assets/imgs/imagePerson.svg";
import CardPerson from "./components/CardPerson/CardPerson";
import DadosDep from "../../../../constants/json/Informations.json";
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// Depoiments INTERFACE
// --------------------------------------------------------

/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const Depoiments = ({}) => {
  // --------------------------------------------------------
  // Depoiments PRIVATE DECLARATIONS
  // --------------------------------------------------------

  const [list] = useState(DadosDep.depoiments);

  const [personSelected, setPersonSelected] = useState(2);

  // --------------------------------------------------------



  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <ContainerDepoiments>
      <TitleDivInformation style={{textAlign: "center", marginTop: "80px", height: "65px"}} color={Colors.PRIMARY_COLOR}>
        {"Depoimentos"}
      </TitleDivInformation>
      
      <Paragrafo fw={0} style={{marginTop: "16px"}}>
        {
          "Dê uma olhada nas histórias de nossos membros e suas jornadas interessantes para o Open  Work."
        }
      </Paragrafo>
      <ContainerImags>
        {list?.map((d, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardPerson
                img={d.img}
                key={index}
                disabled={index === personSelected ? false : true}
                handClick={() => setPersonSelected(index)}
              />
            </div>
          );
        })}
      </ContainerImags>
      {list?.map((d, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",}}>

            {personSelected === index && (
              <Paragrafo
                style={{
                  position: "relative",
                  width: "490px",
                  lineHeight: "25px",
                  top: 80,
                  bottom: 40,
                }}
                fw={700}
              >
                {d.description}
              </Paragrafo>
            )}
          </div>
        );
      })}
    </ContainerDepoiments>
  );
  // --------------------------------------------------------
};

export default Depoiments;
