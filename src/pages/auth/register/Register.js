import React, { useState } from "react";
import BarProgress from "../../../components/barProgress/BarProgress";
import InformationsAuth from "../components/Container/Informations";
import Styled from "./Register.styled";
import etapasRegister from "../../../constants/json/register.json";
import RegisterEt1 from "./etapas/et1/RegisterEt1";
import RegisterEt2 from "./etapas/et2/RegisterEt2";
import RegisterEt3 from "./etapas/et3/RegisterEt3";
import RegisterEt4 from "./etapas/et4/RegisterEt4";
import RegisterEt5 from "./etapas/et5/RegisterEt5";
import RegisterEt6 from "./etapas/et6/RegisterEt6";

import { Userlog } from "./etapas/et4/components/loged/UserLog";
import { useSelector } from "react-redux";
import { selectRegister } from "../../../store/reducers/RegisterSlice";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";
import { Stepper } from "react-form-stepper";
import Colors from "../../../constants/Colors";
import RegisterCompany from "./etapas/etCompany/RegisterCompany";

const Register = () => {
  const [etapas] = useState(...[etapasRegister.etapas]);

  const { register } = useSelector(selectRegister);

  const FetchTitle = ({}) => {
    if (register.etapaAtual <= 3) {
      return register.etapa3.isDesenvolvedor
        ? etapas[register.etapaAtual].title
        : etapas[register.etapaAtual].titleEmpresa;
    } else {
      return etapas[register.etapaAtual].title;
    }
  };

  return (
    <Styled.Container>
      <ToastContainer />
      {register.etapaAtual !== 2 ? (
        <>
          <InformationsAuth
            title={etapas[register.etapaAtual].titleInformation}
            descricao={etapas[register.etapaAtual].description}
            textButton="Home"
            textButtonVoltar="Voltar"
          />
          <Styled.ContainerForm position="start">
            {register.etapaAtual >= 3 && (
              <Userlog
                name={register.etapa1.fullname.substr(0, 1)}
                desc={"Olá, " + register.etapa1.fullname}
              />
            )}
            <Styled.Divisor
              align={"start"}
              style={{
                marginTop: "1.25rem",
                marginLeft: "9.25rem",
                height: "5rem",
              }}
            >
              <Styled.TitleForm>
                <FetchTitle />
              </Styled.TitleForm>
            </Styled.Divisor>

            {/* ETAPAS */}

            {register.etapaAtual === 0 ? (
              <RegisterEt1 />
            ) : register.etapaAtual === 1 ? (
              <RegisterEt2 />
            ) : register.etapaAutal === 2 ? (
              <RegisterEt3 />
            ) : register.etapaAtual === 3 ? (
              register.etapa3.isDesenvolvedor ? (
                <RegisterEt4 />
              ) : (
                <RegisterCompany />
              )
            ) : register.etapaAtual === 4 ? (
              <RegisterEt5 />
            ) : (
              <RegisterEt6 />
            )}

            <Styled.Divisor>
              <Box sx={{ width: "100%" }}>
                <Stepper
                  styleConfig={{
                    activeBgColor: Colors.SECONDARY_COLOR,
                    completedBgColor: Colors.PRIMARY_COLOR,
                  }}
                  steps={
                    register.etapa3.isDesenvolvedor
                      ? [
                          { label: "Informações pessoais" },
                          { label: "Local de trabalho" },
                          { label: "Oque você é?" },
                          { label: "Suas especialidades" },
                          { label: "Ferramentas e Metodologias" },
                          { label: "Ajuste suas competências" },
                        ]
                      : [
                          { label: "Informações pessoais" },
                          { label: "Local de trabalho" },
                          { label: "Informações da empresa" },
                        ]
                  }
                  activeStep={parseInt(register.etapaAtual)}
                />
              </Box>
            </Styled.Divisor>
            <Styled.Divisor
              align={"flex-end"}
              style={{
                paddingRight: "1.25rem",
              }}
            ></Styled.Divisor>
          </Styled.ContainerForm>
        </>
      ) : (
        <RegisterEt3 />
      )}
    </Styled.Container>
  );
};

export default Register;
