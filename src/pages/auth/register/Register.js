import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarProgress from "../../../components/barProgress/BarProgress";
import InputForm from "../../../components/input/InputForm";
import { FilledButton } from "../../../components/UI/buttons/Button";
import Colors from "../../../constants/Colors";
import InformationsAuth from "../components/Container/Informations";
import Styled from "./Register.styled";
const Register = () => {
  const [initial, setInitial] = useState(1);



  return (
    <Styled.Container>
      <Styled.Container>
        <InformationsAuth
          title="Etapa 1"
          descricao="Primeiro passos. Cadastre informações pessoais para conhecermos você melhor."
          textButton="Home"
        />
        <Styled.ContainerForm position="start">
          <Styled.Divisor align={"center"}>
            <Styled.TitleForm>{"Comece sua jornada!"}</Styled.TitleForm>
          </Styled.Divisor>
          <Styled.Form>
            <Styled.Row>
              <InputForm
                label="Nome Completo"
                value=""
                handle={() => ""}
                space={"20px"}
                mr={"20px"}
              />
              <InputForm
                label="Email"
                value=""
                handle={() => ""}
                space={"20px"}
              />
            </Styled.Row>
            <Styled.Row>
              <InputForm
                label="Telefone"
                value=""
                handle={() => ""}
                space={"20px"}
                mr={"20px"}
              />
              <InputForm
                label="CPF / CNPJ"
                value=""
                handle={() => ""}
                space={"20px"}
              />
            </Styled.Row>
            <Styled.Row>
              <InputForm
                label="Senha"
                value=""
                handle={() => ""}
                space={"20px"}
                mr={"20px"}
              />
              <InputForm
                label="Confirmar Senha"
                value=""
                handle={() => ""}
                space={"20px"}
              />
            </Styled.Row>

            <Styled.Row></Styled.Row>
          </Styled.Form>
          <Styled.Divisor>
            <BarProgress qtdMax={7} atualEtapa={initial} />
          </Styled.Divisor>
          <Styled.Divisor align={"flex-end"} style={{
            paddingRight: 20
          }}>
            <FilledButton
              onClick={() => setInitial(initial + 1)}
              color={Colors.black}
              width={190}
              heigth={60}
            >
              {"Próximo"}
            </FilledButton>
          </Styled.Divisor>
        </Styled.ContainerForm>
      </Styled.Container>
    </Styled.Container>
  );
};

export default Register;
