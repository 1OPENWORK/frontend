// --------------------------------------------------------
// InformationsAuth - InformationsAuth
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import Styled from "./Informations.styled";
import Logo from "../../../../assets/imgs/logo.svg";
import ArrowLeftWhite from "../../../../assets/icons/iconWhiteArrowLeft.svg";
import { useNavigate } from "react-router-dom";
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// InformationsAuth INTERFACE
// --------------------------------------------------------

/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const InformationsAuth = ({
  title,
  descricao,
  textButton,
  textButtonVoltar,
}) => {
  // --------------------------------------------------------
  // InformationsAuth PRIVATE DECLARATIONS
  // --------------------------------------------------------

  // --------------------------------------------------------
  const navigate = useNavigate();

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <Styled.Container>
      <Styled.DivInformation>
        <Styled.DivInformationCenter>
          <Styled.Imglogo
            src={Logo}
            width={150}
          />
          <Styled.DivInformationCenter
            style={{
              justifyContent: "center",
              height: "11.25rem",
            }}
          >
            <Styled.Title>{title}</Styled.Title>
          </Styled.DivInformationCenter>
          <Styled.DivInformationCenter>
            <Styled.SubTitle>{descricao}</Styled.SubTitle>
          </Styled.DivInformationCenter>
          <Styled.DivInformationCenter
            style={{
              height: "8.75rem",
              justifyContent: "flex-end",
            }}
          >
            <Styled.DivHomeBack>
              <Styled.BtnRetorno onClick={() => navigate("/")}>
                <img src={ArrowLeftWhite} alt="" />
                {textButton}
              </Styled.BtnRetorno>
              <Styled.BtnRetorno onClick={() => navigate("/")}>
                <img src={ArrowLeftWhite} alt="" />
                {textButtonVoltar}
              </Styled.BtnRetorno>
            </Styled.DivHomeBack>
          </Styled.DivInformationCenter>
        </Styled.DivInformationCenter>
      </Styled.DivInformation>
    </Styled.Container>
  );
  // --------------------------------------------------------
};

export default InformationsAuth;
