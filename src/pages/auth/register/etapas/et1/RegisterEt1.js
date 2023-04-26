import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../../../../components/input/InputForm";
import Styled from "../../Register.styled";
import { object, string, ref } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import Colors from "../../../../../constants/Colors";
import {changeEtapa1, changeEtapaAll} from "../../../../../store/reducers/RegisterSlice"

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

      dispatch(
        changeEtapa1({
          ...dados,
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
        <InputForm
          label="Telefone"
          value={tel}
          handle={setTel}
          space={"1.25rem"}
          mr={"1.25rem"}
          disabled={verified}
        />
        <InputForm
          label="CPF / CNPJ"
          value={cpfOrCnpj}
          handle={setCpfOrCnpj}
          space={"1.25rem"}
          disabled={verified}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Senha"
          value={password}
          handle={setPassword}
          space={"1.25rem"}
          mr={"1.25rem"}
          type={"password"}
          disabled={verified}
        />
        <InputForm
          label="Confirmar Senha"
          value={passwordConfirmed}
          handle={setPasswordConfirmed}
          space={"1.25rem"}
          type={"password"}
          disabled={verified}
        />
      </Styled.Row>
      <Styled.Divisor align={"flex-end"} style={{ width: "770px"}}>
        {!isNext ? (
          <FilledButton onClick={handleForm} marginRight={"0px"} color={Colors.BLACK} width={190} heigth={60}> {"Verificar"}</FilledButton>
        ) : (
          <FilledButton onClick={nextEtapa} marginRight={"0px"} color={Colors.PRIMARY_COLOR} width={190} heigth={60}> {"Cadastrar"} </FilledButton>
        )}
      </Styled.Divisor>
    </Styled.Form>
  );
};

export default RegisterEt1;
