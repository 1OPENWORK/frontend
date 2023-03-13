import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarProgress from "../../../components/barProgress/BarProgress";
import InputForm from "../../../components/input/InputForm";
import { FilledButton } from "../../../components/UI/buttons/Button";
import Colors from "../../../constants/Colors";
import InformationsAuth from "../components/Container/Informations";
import Styled from "./Register.styled";
import etapasRegister from "../../../constants/json/register.json";
import RegisterEt1 from "./etapas/et1/RegisterEt1";
import RegisterEt2 from "./etapas/et2/RegisterEt2";
import RegisterEt3 from "./etapas/et3/RegisterEt3";
import { selectRegister } from "../../../store/reducers/RegisterSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

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
          />
          <Styled.ContainerForm position="start">
            <Styled.Divisor align={"center"} style={{
              marginTop: "30px"
            }}>
              <Styled.TitleForm>{etapas[register.etapaAtual].title}</Styled.TitleForm>
            </Styled.Divisor>

            {/* ETAPAS */}
            {register.etapaAtual === 0 ? (
              <RegisterEt1 />
            ) : (
              <RegisterEt2 />
            )}

            <Styled.Divisor>
              <BarProgress qtdMax={7} atualEtapa={register.etapaAtual + 1} />
            </Styled.Divisor>
            <Styled.Divisor
              align={"flex-end"}
              style={{
                paddingRight: 20,
              }}
            ></Styled.Divisor>
          </Styled.ContainerForm>
        </>
      ) : (
        <RegisterEt3  />
      )}
    </Styled.Container>
  );
};

export default Register;
