import React, { useEffect, useState } from "react";
import Styled from "./Formulario.styled";
import { object, string } from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputMask from "react-input-mask";
import { cpf as validateCpf } from "cpf-cnpj-validator";
import InputForm from "../../../../components/input/InputForm";
import { cleanMask } from "../../../../helpers/HelperFunctions";
import { FilledButton } from "../../../../components/UI/buttons/Button";
import Colors from "../../../../constants/Colors";
import {
  changeSave,
  changeUpdatePerfil,
  selectedPerfil,
} from "../../../../store/reducers/PerfilSlice";
import PortifolioService from "../../service/PortifolioService";
import {
  changeActiveToken,
  selectedAuth,
} from "../../../../store/reducers/AuthSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthPath } from "../../../../constants/Path";
import axios from "axios";
import { AmbienteBackend } from "../../../../hooks/Ambiente";

const Formulario = () => {
  const dispatch = useDispatch();

  const { dadosPerfil } = useSelector(selectedPerfil);
  const { auth } = useSelector(selectedAuth);

  const navigate = useNavigate();

  const [dadosPessoais] = useState(dadosPerfil.perfil);
  const [nome, setNome] = useState(dadosPessoais.name);
  const [email, setEmail] = useState(dadosPessoais.email);
  const [tel, setTel] = useState(dadosPessoais.cellphone);
  const [cpfOrCnpj, setCpfOrCnpj] = useState(dadosPessoais.cpfCnpj);
  const [password, setPassword] = useState("");

  // MODAL

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const fetchInformation = async () => {
    const response = await axios.get(
      AmbienteBackend() + "/api/usuarios/perfil/" + dadosPerfil.perfil.id
    );
    console.log("🚀 ~ file: Formulario.js:72 ~ fetchInformation ~ response:", response)

    if (response.status === 200) {
      dispatch(
        changeUpdatePerfil({
          perfil: { ...response.data.perfil },
        })
      );
    }
  };

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

      const response = await PortifolioService.updade(
        dadosPessoais.id,
        dados,
        auth.token
      );

      if (response.status === 200) {
        fetchInformation();

        dispatch(
          changeActiveToken({
            token: response.data.token,
          })
        );

        Cookies.set("token", response.data.token, { expires: 1 });

        toast.success("Infomações atualizadas com sucesso.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: false,
          theme: "light",
        });
      }
    } catch (err) {
      if (password.length < 9) {
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
      } else {
        toast.error(err.response.data.message, {
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
    setPassword("");
  }

  const handleExcluirConta = async () => {
    try {
      const response = await PortifolioService.deleteContaUser(
        dadosPerfil.perfil.id,
        auth.token
      );

      if (response.status === 200) {
        toast.success(
          "Você deletou sua conta, estamos te redirecionando para o login.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: false,
            theme: "light",
          }
        );

        Cookies.set("token", "");
        Cookies.set("id", "");
        Cookies.set("isDev", "");

        dispatch(
          changeActiveToken({
            token: "",
          })
        );

        dispatch(
          changeSave({
            perfil: {},
            address: {},
            tools: [],
          })
        );

        navigate(AuthPath);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: Formulario.js:182 ~ handleExcluirConta ~ error:",
        error
      );
    }
  };

  useEffect(() => {
    fetchInformation();
  }, [])

  return (
    <Styled.Form>
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
        />
        <FilledButton
          onClick={handleUpdate}
          marginTop={"20px"}
          marginRight={"0px"}
          color={Colors.PRIMARY_COLOR}
          width={190}
          heigth={60}
        >
          {"Atualizar"}
        </FilledButton>
        <FilledButton
          onClick={handleShow}
          marginTop={"20px"}
          marginRight={"0px"}
          color={Colors.RED}
          width={190}
          heigth={60}
          semHouver={true}
        >
          {"Excluir Conta"}
        </FilledButton>
      </Styled.Divisor>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Você está prestes a excluir sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            fontSize: "1.3rem",
            fontWeight: "500",
          }}
        >
          <p
            style={{
              textAlign: "center",
            }}
          >
            Tem certeza de que deseja excluir sua conta? Esta ação é
            irreversível e todos os seus dados e informações serão
            permanentemente apagados.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <FilledButton
            onClick={handleExcluirConta}
            marginTop={"20px"}
            marginRight={"0px"}
            color={Colors.RED}
            width={190}
            heigth={60}
            semHouver={true}
          >
            {"Excluir"}
          </FilledButton>
        </Modal.Footer>
      </Modal>
    </Styled.Form>
  );
};

export default Formulario;
