// --------------------------------------------------------
// InputForm - InputForm
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import Styled from "./InputForm.styled";
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// InputForm INTERFACE
// --------------------------------------------------------


/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const InputForm = ({ label, value, handle, space }) => {
  // --------------------------------------------------------
  // InputForm PRIVATE DECLARATIONS
  // --------------------------------------------------------

  // --------------------------------------------------------

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <Styled.Container spaceBottom={space}>
      <Styled.Text>{label}</Styled.Text>
      <Styled.Input value={value} onChange={(e) => handle(e.target.value)} />
    </Styled.Container>
  );
  // --------------------------------------------------------
};

export default InputForm;
