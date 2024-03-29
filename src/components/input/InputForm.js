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
const InputForm = ({ label, value, handle, space, ml, mr, mt, mb, width, disabled, type, maxLength }) => {
  // --------------------------------------------------------
  // InputForm PRIVATE DECLARATIONS
  // --------------------------------------------------------

  // --------------------------------------------------------

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <Styled.Container spaceBottom={space}>
      <Styled.Text >{label}</Styled.Text>
      <Styled.Input
        w={width}
        value={value}
        maxLength={maxLength}
        onChange={(e) => handle(e.target.value)}
        ml={ml}
        mr={mr}
        mt={mt}
        mb={mb}
        disabled={disabled}
        type={type}
      />
    </Styled.Container>
  );
  // --------------------------------------------------------
};

export default InputForm;
