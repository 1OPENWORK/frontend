import React from "react";
import InputForm from "../../../../../components/input/InputForm";
import Styled from "../../Register.styled";


const RegisterEt2 = () => {
  return (
    <Styled.Form>
      <Styled.Row>
        <InputForm
          label="CEP"
          value=""
          handle={() => ""}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm label="Estado" value="" handle={() => ""} space={"20px"} />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Cidade"
          value=""
          handle={() => ""}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm
          label="Bairro"
          value=""
          handle={() => ""}
          space={"20px"}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Rua"
          value=""
          handle={() => ""}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm
          label="Número"
          value=""
          handle={() => ""}
          space={"20px"}
        />
      </Styled.Row>
      <InputForm
          label="Complemento  ou outros"
          value=""
          handle={() => ""}
          space={"20px"}
          width={"750px"}
          
        />
    </Styled.Form>
  );
};

export default RegisterEt2;
