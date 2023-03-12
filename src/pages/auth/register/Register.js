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

const Register = () => {
  const [initial, setInitial] = useState(0);
  const [etapas] = useState(...[etapasRegister.etapas]);

  const { 
    register
   } = useSelector(selectRegister);

  useEffect(() => {
    console.log(register);
  }, [register])

  return (
    <Styled.Container>
        {initial !== 2 ? (
          <>
            <InformationsAuth
              title={etapas[initial].titleInformation}
              descricao={etapas[initial].description}
              textButton="Home"
            />
            <Styled.ContainerForm position="start">
              <Styled.Divisor align={"center"}>
                <Styled.TitleForm>{etapas[initial].title}</Styled.TitleForm>
              </Styled.Divisor>

              {/* ETAPAS */}
              {initial === 0 ? <RegisterEt1 /> : <RegisterEt2 />}

              <Styled.Divisor>
                <BarProgress qtdMax={7} atualEtapa={initial + 1} />
              </Styled.Divisor>
              <Styled.Divisor
                align={"flex-end"}
                style={{
                  paddingRight: 20,
                }}
              >
                <FilledButton
                  onClick={() => {
                    setInitial(initial + 1);
                  }}
                  color={Colors.black}
                  width={190}
                  heigth={60}
                >
                  {"Próximo"}
                </FilledButton>
              </Styled.Divisor>
            </Styled.ContainerForm>
          </>
        ) : (
          <RegisterEt3 next={() => setInitial(initial + 1)} />
        )}
    </Styled.Container>
  );
};

export default Register;
