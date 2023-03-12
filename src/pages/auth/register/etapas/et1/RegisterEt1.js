import React, { useEffect, useState } from "react";
import InputForm from "../../../../../components/input/InputForm";
import Styled from "../../Register.styled";


const RegisterEt1 = () => {


  



  return (
    <Styled.Form>
      <Styled.Row>
        <InputForm
          label="Nome Completo"
          value=""
          handle={() => ""}
          space={"20px"}
          mr={"20px"}
          isInvalid={true}
        />
        <InputForm label="Email" value="" handle={() => ""} space={"20px"} />
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
    </Styled.Form>
  );
};

export default RegisterEt1;
