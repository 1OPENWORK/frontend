import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../../../../components/input/InputForm";
import Styled from "../../Register.styled";
import { object, string, ref } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import Colors from "../../../../../constants/Colors";
import {changeEtapa7, changeEtapaAll,} from "../../../../../store/reducers/RegisterSlice";

const RegisterCompany = () => {
  const dispatch = useDispatch();

  const [nomeEmpresa, setnomeEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [setor, setSetor] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [isNext, setIsNext] = useState(false);
  const [verified, setVerified] = useState(false);

  const validRegister = object({
    comfirmed_password: string().required("Preencha o campo confirmar senha.").oneOf([ref("password")], "Senhas diferentes"),
    password: string().required("Preencha o campo senha."),
    cnpj: string().required("Preencha o campo CNPJ."),
    setor: string().required("Preencha o campo setor."),
    email: string().email("E-mail inválido").required("Preencha o campo Email."),
    fullname: string().required("Preencha o campo nome empresa."),
  });


  async function handleForm() {
    const dados = {
      comfirmed_password: passwordConfirmed,
      password: password,
      cnpj: cnpj,
      setor: setor,
      email: email,
      fullname: nomeEmpresa,
    };

    try {
      await validRegister.validate(dados);

      dispatch(
        changeEtapa7({
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
        etapa: 7,
      })
    );
  }

  return (
    <Styled.Form>
      <ToastContainer />
      <Styled.Row>
        <InputForm
          label="Nome Empresa"
          value={nomeEmpresa}
          handle={setnomeEmpresa}
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
          label="Setor"
          value={setor}
          handle={setSetor}
          space={"20px"}
          mr={"20px"}
          disabled={verified}
        />
        <InputForm
          label="CPF / CNPJ"
          value={cnpj}
          handle={setCnpj}
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
            color={Colors.BLACK}
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

export default RegisterCompany;