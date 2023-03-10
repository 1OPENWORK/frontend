// --------------------------------------------------------
// BePartTtoo - BePartToo
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import { TitleDivInformation } from "../../Home.styled";
import {
  BePartTooCards,
  BePartTooParagrafo,
  ContainerBePartToo,
} from "./BePartToo.styled";
import CardBePartToo from "./Card/CardBePartToo";
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
const BePartToo = ({}) => {
  // --------------------------------------------------------
  // BePartTtoo PRIVATE DECLARATIONS
  // --------------------------------------------------------

  // --------------------------------------------------------

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <ContainerBePartToo>
      <TitleDivInformation
        style={{ margin: 0, width: "100%", textAlign: "center" }}
      >
        {"Faça parte Também"}
      </TitleDivInformation>
      <BePartTooParagrafo>
        {
          "Seja uma empresa parceira nossa, e publique algum Job para os nossos Devs"
        }
      </BePartTooParagrafo>
      <BePartTooCards>
        <CardBePartToo />
        <CardBePartToo />
        <CardBePartToo />
        <CardBePartToo />
        <CardBePartToo />
        <CardBePartToo />
      </BePartTooCards>
    </ContainerBePartToo>
  );
  // --------------------------------------------------------
};

export default BePartToo;
