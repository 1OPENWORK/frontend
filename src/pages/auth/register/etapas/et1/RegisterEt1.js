import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../../../../components/input/InputForm";
import {
  changeEtapa,
  changeEtapa1,
  selectRegister,
} from "../../../../../store/reducers/RegisterSlice";
import Styled from "../../Register.styled";
import { object, string, email, ref } from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterEt1 = () => {
  const { register } = useSelector(selectRegister);
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cpfOrCnpj, setCpfOrCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [isInvalid, setIsInvalid] = useState("");

  const validRegister = object({
    comfirmed_password: string()
      .required("Preencha o confirmar senha.")
      .oneOf([ref("password")], "Senhas diferentes"),
    password: string().required("Preencha a senha."),
    cfp_cnpj: string().required("Preencha o CPF/CNPJ."),
    tel: string().required("Preencha o telefone."),
    email: string().email("E-mail inválido").required("Preencha o Email."),
    fullname: string().required("Preencha o nome."),
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
        changeEtapa({
          etapa: 1,
        })
      );

      dispatch(
        changeEtapa1({
          ...dados,
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

  useEffect(() => {
    console.log(isInvalid);
  }, [isInvalid]);

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
          isInvalid={false}
        />
        <InputForm
          label="Email"
          value={email}
          handle={setEmail}
          space={"20px"}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Telefone"
          value={tel}
          handle={setTel}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm
          label="CPF / CNPJ"
          value={cpfOrCnpj}
          handle={setCpfOrCnpj}
          space={"20px"}
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
        />
        <InputForm
          label="Confirmar Senha"
          value={passwordConfirmed}
          handle={setPasswordConfirmed}
          space={"20px"}
          type={"password"}
        />
      </Styled.Row>
      <button onClick={() => handleForm()}>Ver dados</button>
    </Styled.Form>
  );
};

export default RegisterEt1;
