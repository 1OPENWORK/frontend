import React from "react";
import InputForm from "../../../../../components/input/InputForm";
import { Container, Flex, ColumCount, Divider } from "./RegisterEt4.styled";
import { ButtonRegisterEt4 } from "./components/ButtonRegisterEt4";
import { FilledButton } from "../../../../../components/UI/buttons/Button";

const RegisterEt4 = ({}) => {
  return (
    <>
      <Container>
        <Flex>
          <ColumCount>
            <ButtonRegisterEt4 title={"FrontEnd"} />
            <ButtonRegisterEt4 title={"BackEnd"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Devops"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Cyber Security"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Redes"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Jogos"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Mobile"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"QA"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Machine Learning"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Organizador"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Banco de dados"}></ButtonRegisterEt4>
            <ButtonRegisterEt4 title={"Design"}></ButtonRegisterEt4>
          </ColumCount>
          <InputForm
            label="outros"
            value=""
            handle={() => ""}
            space={"20px"}
            width={"750px"}
          />
          <Divider>
            <FilledButton
              // onClick={() => nextEtapa()}

              color={"black"}
              width={190}
              heigth={60}
              disabled={true}
            >
              {"Próximo"}
            </FilledButton>
          </Divider>
        </Flex>
      </Container>
    </>
  );
};

export default RegisterEt4;
