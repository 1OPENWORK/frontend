import React from "react";
import InputForm from "../../../../../components/input/InputForm";
import { Container, Flex, ColumCount } from "./RegisterEt4.styled";
import { ButtonRegisterEt4 } from "./components/ButtonRegisterEt4";

const RegisterEt4 = () => {
  return (
    <>
      <Container>
        <Flex>
          <ColumCount>
            <ButtonRegisterEt4>{"Front"}</ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
            <ButtonRegisterEt4></ButtonRegisterEt4>
          </ColumCount>
          <InputForm
            label="outros"
            value=""
            handle={() => ""}
            space={"20px"}
            width={"750px"}
          />
        </Flex>
      </Container>
    </>
  );
};

export default RegisterEt4;
