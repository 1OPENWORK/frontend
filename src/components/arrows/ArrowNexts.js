// --------------------------------------------------------
// ArrowNexts - ArrowNexts
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import styled from "styled-components";
import ArrowLeft from "../../assets/icons/iconArrowLeft.svg";
import ArrowRigth from "../../assets/icons/iconArrowRigth.svg";
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// ArrowNexts INTERFACE
// --------------------------------------------------------


/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const ArrowNexts = ({ length, selected, handleSelected }) => {
  // --------------------------------------------------------
  // ArrowNexts PRIVATE DECLARATIONS
  // --------------------------------------------------------

  const ContainerArrows = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    height: 34px;
  `;

  const DivisorArrow = styled.div``;

  const IconImage = styled.img`
    cursor: pointer;
  `;

  // --------------------------------------------------------

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <ContainerArrows>
      <DivisorArrow
        onClick={() => handleSelected( selected - 1 )}
      >
        <IconImage src={ArrowLeft} />
      </DivisorArrow>
      <DivisorArrow
        onClick={() =>
          handleSelected( selected + 1 )
        }
      >
        <IconImage src={ArrowRigth} />
      </DivisorArrow>
    </ContainerArrows>
  );
  // --------------------------------------------------------
};

export default ArrowNexts;
