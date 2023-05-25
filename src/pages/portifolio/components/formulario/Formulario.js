import React, { useEffect, useState } from "react";
import Styled from "./Formulario.styled";
import { object, string, ref } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputMask from "react-input-mask";
import { cpf as validateCpf } from "cpf-cnpj-validator";
import InputForm from "../../../../components/input/InputForm";
import { cleanMask } from "../../../../helpers/HelperFunctions";
import { FilledButton } from "../../../../components/UI/buttons/Button";
import Colors from "../../../../constants/Colors";
import { get } from "react-hook-form";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cpfOrCnpj, setCpfOrCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [isNext, setIsNext] = useState(false);
  const [verified, setVerified] = useState(false);

  const validRegister = object({
    comfirmed_password: string()
      .required("Preencha o campo confirmar senha.")
      .oneOf([ref("password")], "Senhas diferentes"),
    password: string()
      .required("Preencha o campo senha.")
      .min(8, "A senha deve ter pelo menos 8 caracteres"),
    cfp_cnpj: string()
      .required("Preencha o campo CPF.")
      .min(11, "O CPF deve ter pelo menos 11 caracteres")
      .test("valid-cpf", "CPF inválido", value => validateCpf.isValid(value)),
    tel: string().required("Preencha o campo telefone."),
    email: string()
      .email("E-mail inválido")
      .required("Preencha o campo Email."),
    fullname: string().required("Preencha o campo nome."),
  });

  async function handleForm() {
    const dados = {
      comfirmed_password: passwordConfirmed,
      password: password,
      cfp_cnpj: cleanMask(cpfOrCnpj),
      tel: tel,
      email: email,
      fullname: nome,
    };

    try {
      await validRegister.validate(dados);

      setVerified(true);
      setIsNext(true);
    } catch (err) {
      toast.error(err.errors[0], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
      });
    }
  }

  const fetchInformation = async () => {
    const information = await get("");
  };

  return (
    <Styled.Form>
      <ToastContainer />
      <Styled.Row>
        <InputForm
          label="Nome Completo"
          value={nome}
          handle={setNome}
          space={"1.25rem"}
          mr={"1.25rem"}
          disabled={verified}
        />
        <InputForm
          label="Email"
          value={email}
          handle={setEmail}
          space={"1.25rem"}
          disabled={verified}
        />
      </Styled.Row>
      <Styled.Row>
        <Styled.Column>
          <Styled.Text>{"Telefone"}</Styled.Text>
          <InputMask
            className="InputMask"
            mask="(99) 99999-9999"
            value={tel}
            onChange={e => setTel(e.target.value)}
            onKeyPress={event => {
              if (event.key === "Enter") {
                event.preventDefault();
              }
            }}
            disabled={verified}
          />
        </Styled.Column>

        <Styled.Column>
          <Styled.Text>{"CPF"}</Styled.Text>
          <InputMask
            className="InputMask2"
            mask="999.999.999-99"
            value={cpfOrCnpj}
            onChange={e => setCpfOrCnpj(e.target.value)}
            onKeyPress={event => {
              if (event.key === "Enter") {
                event.preventDefault();
              }
            }}
            disabled={true}
          />
        </Styled.Column>
      </Styled.Row>

      <Styled.Divisor align={"flex-end"} style={{ width: "770px" }}>
        <FilledButton
          onClick={() => ""}
          marginRight={"0px"}
          color={Colors.PRIMARY_COLOR}
          width={190}
          heigth={60}
        >
          {"Atualizar"}
        </FilledButton>
      </Styled.Divisor>
    </Styled.Form>
  );
};

export default Formulario;