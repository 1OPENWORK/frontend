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
const CardBePartToo = ({benefit, index}) => {
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
            {"Etapa "}{index+1}
        </TagCardBePartTo>
        <TitleCardBePartTo>
            Vantagem {index+1}
        </TitleCardBePartTo>
        <DescriptionCardBePartTo>
        {benefit}
        </DescriptionCardBePartTo>
      </ContainerBodyCardBePartToo>
    </ContainerCardBePartToo>
  );
  // --------------------------------------------------------
};

export default CardBePartToo;
