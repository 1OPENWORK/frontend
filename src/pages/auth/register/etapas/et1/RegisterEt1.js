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
} from "../../../../../store/reducers/RegisterSlice";

const RegisterEt1 = () => {
  const dispatch = useDispatch();

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
    password: string().required("Preencha o campo senha."),
    cfp_cnpj: string().required("Preencha o campo CPF/CNPJ."),
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
      cfp_cnpj: cpfOrCnpj,
      tel: tel,
      email: email,
      fullname: nome,
    };

    try {
      await validRegister.validate(dados);

      toast.success("Informações verificadas e salvas.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
      });

      dispatch(
        changeEtapa1({
          ...dados,
          etapa: 1,
        })
      );
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

  function nextEtapa() {
    dispatch(
      changeEtapaAll({
        etapa: 1,
      })
    );
  }

  return (
    <Styled.Form>
      <ToastContainer />
      <Styled.Row>
        <InputForm
          label="Nome Completo"
          value={nome}
          handle={setNome}
          space={"20px"}
          mr={"20px"}
          disabled={verified}
        />
        <InputForm
          label="Email"
          value={email}
          handle={setEmail}
          space={"20px"}
          disabled={verified}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Telefone"
          value={tel}
          handle={setTel}
          space={"20px"}
          mr={"20px"}
          disabled={verified}
        />
        <InputForm
          label="CPF / CNPJ"
          value={cpfOrCnpj}
          handle={setCpfOrCnpj}
          space={"20px"}
          disabled={verified}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Senha"
          value={password}
          handle={setPassword}
          space={"20px"}
          mr={"20px"}
          type={"password"}
          disabled={verified}
        />
        <InputForm
          label="Confirmar Senha"
          value={passwordConfirmed}
          handle={setPasswordConfirmed}
          space={"20px"}
          type={"password"}
          disabled={verified}
        />
      </Styled.Row>
      <Styled.Divisor
        align={"flex-end"}
        style={{ marginRight: "20px", width: "770px" }}
      >
        {!isNext ? (
          <FilledButton
            onClick={handleForm}
            color={Colors.PRIMARY_COLOR}
            width={190}
            heigth={60}
          >
            {"Verificar"}
          </FilledButton>
        ) : (
          <FilledButton
            onClick={nextEtapa}
            color={Colors.black}
            width={190}
            heigth={60}
          >
            {"Próximo"}
          </FilledButton>
        )}
      </Styled.Divisor>
    </Styled.Form>
  );
};

export default RegisterEt1;
