import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../../../../components/input/InputForm";
import Styled from "../../Register.styled";
import { object, string, ref } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import Colors from "../../../../../constants/Colors";
import {
  changeEtapa1,
  changeEtapaAll,
  selectRegister,
} from "../../../../../store/reducers/RegisterSlice";
import InputMask from "react-input-mask";
import styled from "styled-components";
import { cpf as validateCpf } from "cpf-cnpj-validator";
import { cleanMask } from "../../../../../helpers/HelperFunctions";

const RegisterEt1 = () => {
  const dispatch = useDispatch();

  const { register } = useSelector(selectRegister);

  const [nome, setNome] = useState(register.etapa1.fullname);
  const [email, setEmail] = useState(register.etapa1.email);
  const [tel, setTel] = useState(register.etapa1.tel);
  const [cpfOrCnpj, setCpfOrCnpj] = useState(register.etapa1.cfp_cnpj);
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");

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
      .test("valid-cpf", "CPF inválido", (value) => validateCpf.isValid(value)),
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

      dispatch(
        changeEtapa1({
          ...dados,
        })
      );

      dispatch(
        changeEtapaAll({
          etapa: 1,
        })
      );

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

  const StyledInputMask = styled(InputMask)``;

 

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
        />
        <InputForm
          label="Email"
          value={email}
          handle={setEmail}
          space={"1.25rem"}
        />
      </Styled.Row>
      <Styled.Row>
        <Styled.Column>
          <Styled.Text>{"Telefone"}</Styled.Text>
          <InputMask
            className="InputMask"
            mask="(99) 99999-9999"
            // mask="999.999.999-99"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
              }
            }}
          />
        </Styled.Column>

        <Styled.Column>
          <Styled.Text>{"CPF"}</Styled.Text>
          <InputMask
            className="InputMask2"
            mask="999.999.999-99"
            value={cpfOrCnpj}
            onChange={(e) => setCpfOrCnpj(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
              }
            }}
          />
        </Styled.Column>
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Senha"
          value={password}
          handle={setPassword}
          space={"1.25rem"}
          mr={"1.25rem"}
          type={"password"}
        />
        <InputForm
          label="Confirmar Senha"
          value={passwordConfirmed}
          handle={setPasswordConfirmed}
          space={"1.25rem"}
          type={"password"}
        />
      </Styled.Row>
      <Styled.Divisor align={"flex-end"} style={{ width: "770px" }}>
        <FilledButton
          onClick={handleForm}
          marginRight={"0px"}
          color={Colors.BLACK}
          width={190}
          heigth={60}
        >
          {"Próximo"}
        </FilledButton>
      </Styled.Divisor>
    </Styled.Form>
  );
};

export default RegisterEt1;
