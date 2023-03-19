// --------------------------------------------------------
// Auth - Auth
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
import React, { useState } from "react";
import { GeneralContainer } from "../../components/UI/generalLayout/Layout.styled";
import InformationsAuth from "./components/Container/Informations";
import Styled from "./Auth.styled";
import InputForm from "../../components/input/InputForm";
import { FilledButton } from "../../components/UI/buttons/Button";
import Colors from "../../constants/Colors";
import { useNavigate } from "react-router-dom";
import { post } from "../../services/Generected";
import { useDispatch } from "react-redux";
import UserAuth, { handleLogin } from "../../store/actions/UserAuth";
import { changeActiveToken } from "../../store/reducers/AuthSlice";
import { ToastContainer, toast } from "react-toastify";
// --------------------------------------------------------
// Auth INTERFACE
// --------------------------------------------------------
/**
 * A component that renders a Screen.
 *
 * @param props Properties
 * @param props.route The route
 * @param props.navigation The navigator
 * @returns The component JSX.
 */
function Auth() {
  // --------------------------------------------------------
  // Auth PRIVATE DECLARATIONS
  // --------------------------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  async function handle() {
    try {
      const response = await handleLogin({
        email,
        password,
      });
      const token = response.data.token;

      toast.success("Logado com sucesso.", {
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
        changeActiveToken({
          token: token,
        })
      );
    } catch (error) {
      toast.error("Credências incorretas.", {
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
    <GeneralContainer>
      <ToastContainer />
      <Styled.Container>
        <InformationsAuth
          title="Entre e faça História"
          descricao="Faça login e comece a experiência "
          textButton="Home"
        />
        <Styled.ContainerForm position="center">
          <Styled.Form>
            <Styled.TitleForm style={{ marginBottom: 30 }}>
              {"Login"}
            </Styled.TitleForm>
            <InputForm
              label="E-mail"
              value={email}
              handle={setEmail}
              space={"42px"}
            />
            <InputForm
              label="Senha"
              value={password}
              handle={setPassword}
              type={"password"}
            />
            <Styled.Row
              style={{
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <Styled.Label>Não possui conta?</Styled.Label>
              <Styled.Link> Cadastre-se</Styled.Link>
            </Styled.Row>
            <Styled.Row>
              <Styled.CheckBox type={"checkbox"} />
              <Styled.Label>Lembrar Senha</Styled.Label>
              <Styled.Link> Esqueci minha senha</Styled.Link>
            </Styled.Row>
            <Styled.Row
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <FilledButton
                onClick={() => handle()}
                color={Colors.black}
                width={190}
                heigth={60}
              >
                {" Entrar"}
              </FilledButton>
            </Styled.Row>
          </Styled.Form>
        </Styled.ContainerForm>
      </Styled.Container>
    </GeneralContainer>
  );
}

export default Auth;
