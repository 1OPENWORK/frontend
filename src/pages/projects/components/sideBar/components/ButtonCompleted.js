import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineRunCircle } from "react-icons/md";
import { TiCancel } from "react-icons/ti";

import styled from "styled-components";
import Colors from "../../../../../constants/Colors";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : "#fff")};

  transition: all 0.15s ease-in;

  h2 {
    color: ${(props) => (props.color ? props.color : "#fff")};
    transition: all 0.15s ease-in;
  }

  :hover h2,
  :hover {
    color: ${Colors.SECONDARY_COLOR};
    text-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

function ButtonCompleted({ onClick, color, desc, type }) {
  return (
    <StyledButton type="button" onClick={onClick} color={color}>
      {type === 1 ? (
        <>
          <MdOutlineRunCircle size={40} color={color} />
        </>
      ) : type === 2 ? (
        <>
          <AiOutlineCheckCircle size={40} color={color} />
        </>
      ) : (
        <>
          <TiCancel size={40} color={color} />
        </>
      )}

      <h2>{desc}</h2>
    </StyledButton>
  );
}

export default ButtonCompleted;
