// --------------------------------------------------------
// CardMetrica - CardMetrica
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import { CardMetricaContainer, CardMetricaDivisor, CardMetricaIcon } from "./CardMetrica.styled";
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// CardMetrica INTERFACE
// --------------------------------------------------------


/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const CardMetrica = ({metrica, title, icon}) => {
  // --------------------------------------------------------
  // CardMetrica PRIVATE DECLARATIONS
  // --------------------------------------------------------

  // --------------------------------------------------------

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return <CardMetricaContainer>
    <CardMetricaDivisor>
        <CardMetricaIcon src={icon} />
    </CardMetricaDivisor>
    <CardMetricaDivisor>
        + {metrica}
        <br />
        {title}
    </CardMetricaDivisor>
  </CardMetricaContainer>;
  // --------------------------------------------------------
};

export default CardMetrica;
