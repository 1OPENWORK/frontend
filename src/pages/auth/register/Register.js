import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

// import RegisterCompany from "./etapas/etCompany/RegisterCompany";
import RegisterEt4 from "./etapas/et4/RegisterEt4";
import RegisterEt5 from "./etapas/et5/RegisterEt5";
import RegisterCompany from "./etapas/etCompany/RegisterCompany";
import { selectRegister } from "../../../store/reducers/RegisterSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import RegisterEt4 from "./etapas/et4/RegisterEt4";
import RegisterEt5 from "./etapas/et5/RegisterEt5";

import { Userlog } from "./etapas/et4/components/loged/UserLog";

const Register = () => {
  const [etapas] = useState(...[etapasRegister.etapas]);

  const { register } = useSelector(selectRegister);

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
              <Userlog name={"T"} desc={"Olá, Tarifa"} />
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
                {etapas[register.etapaAtual].title}
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
              <RegisterEt1 />
            ) : (
              register.etapaAtual === 4 && <RegisterEt6 />
            )}

            <Styled.Divisor>
              <BarProgress qtdMax={7} atualEtapa={register.etapaAtual + 1} />
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
