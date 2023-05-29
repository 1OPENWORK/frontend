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
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../../../store/reducers/PerfilSlice";
import PortifolioService from "../../service/PortifolioService";
import { selectedAuth } from "../../../../store/reducers/AuthSlice";

const Formulario = () => {
  const { dadosPerfil } = useSelector(selectedPerfil);
  const { auth } = useSelector(selectedAuth);

  const [dadosPessoais] = useState(dadosPerfil.perfil);
  const [nome, setNome] = useState(dadosPessoais.name);
  const [email, setEmail] = useState(dadosPessoais.email);
  const [tel, setTel] = useState(dadosPessoais.cellphone);
  const [cpfOrCnpj, setCpfOrCnpj] = useState(dadosPessoais.cpfCnpj);
  const [password, setPassword] = useState("");

  const [isNext, setIsNext] = useState(false);
  const [verified, setVerified] = useState(false);

  const validRegister = object({
    password: string()
      .required("Preencha o campo senha.")
      .min(8, "A senha deve ter pelo menos 8 caracteres"),
    cpfCnpj: string()
      .required("Preencha o campo CPF.")
      .min(11, "O CPF deve ter pelo menos 11 caracteres")
      .test("valid-cpf", "CPF inválido", (value) => validateCpf.isValid(value)),
    cellphone: string().required("Preencha o campo telefone."),
    email: string()
      .email("E-mail inválido")
      .required("Preencha o campo Email."),
    name: string().required("Preencha o campo nome."),
  });

  async function handleUpdate() {
    const dados = {
      cpfCnpj: cleanMask(cpfOrCnpj),
      cellphone: tel,
      email: email,
      name: nome,
      password: password,
    };

    try {
      await validRegister.validate(dados);

      await PortifolioService.updade(dadosPessoais.id, dados, auth.token);

      // Atualizar os dados do redux


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
            onChange={(e) => setTel(e.target.value)}
            onKeyPress={(event) => {
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
            onChange={(e) => setCpfOrCnpj(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
              }
            }}
            disabled={true}
          />
        </Styled.Column>
      </Styled.Row>

      <Styled.Divisor
        style={{
          width: "770px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <InputForm
          label="Digite sua senha"
          value={password}
          handle={setPassword}
          space={"1.25rem"}
          type={"password"}
          disabled={verified}
        />
        <FilledButton
          onClick={handleUpdate}
          marginTop={"20px"}
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
