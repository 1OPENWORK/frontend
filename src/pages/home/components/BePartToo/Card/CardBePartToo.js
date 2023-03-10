// --------------------------------------------------------
// CardBePartToo - CardBePartToo
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import {
  ContainerBodyCardBePartToo,
  ContainerCardBePartToo,
  DescriptionCardBePartTo,
  TagCardBePartTo,
  TitleCardBePartTo,
} from "./CardBePartToo.styled";
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// CardBePartToo INTERFACE
// --------------------------------------------------------

/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const CardBePartToo = ({}) => {
  // --------------------------------------------------------
  // CardBePartToo PRIVATE DECLARATIONS
  // --------------------------------------------------------

  // --------------------------------------------------------

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <ContainerCardBePartToo>
      <ContainerBodyCardBePartToo>
        <TagCardBePartTo>
            {"Etapa 1"}
        </TagCardBePartTo>
        <TitleCardBePartTo>
            Vantagem 1
        </TitleCardBePartTo>
        <DescriptionCardBePartTo>
        {"Seja uma empresa parceira nossa, e publique algum Job para os nossos Devs"}
        </DescriptionCardBePartTo>
      </ContainerBodyCardBePartToo>
    </ContainerCardBePartToo>
  );
  // --------------------------------------------------------
};

export default CardBePartToo;
