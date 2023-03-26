// --------------------------------------------------------
// BePartTtoo - BePartToo
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useState } from "react";
import { TitleDivInformation } from "../../Home.styled";
import {
  BePartTooCards,
  BePartTooParagrafo,
  ContainerBePartToo,
} from "./BePartToo.styled";
import CardBePartToo from "./Card/CardBePartToo";
import DadosDep from "../../../../constants/json/Informations.json";
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// BePartTtoo INTERFACE
// --------------------------------------------------------


/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const BePartToo = () => {

  const [list] = useState(DadosDep.benefits);


  return (
    <ContainerBePartToo>
      <TitleDivInformation style={{ margin: 0, width: "100%", textAlign: "center", marginTop:"64px"}}>
        {"Faça parte Também"}
      </TitleDivInformation>
      <BePartTooParagrafo>
        {
          "Seja uma empresa parceira nossa, e publique algum Job para os nossos Devs"
        }
      </BePartTooParagrafo>
      <BePartTooCards>
        {list?.map((d, index) => {
          return (
            <div>
              <CardBePartToo index={index} benefit={d.benefit} />
            </div>
          );
        })}

      </BePartTooCards>
    </ContainerBePartToo>
  );
  // --------------------------------------------------------
};

export default BePartToo;
