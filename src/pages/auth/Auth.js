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
import { useDispatch } from "react-redux";
import {
  handleInformationsUser,
  handleLogin,
} from "../../store/actions/UserAuth";
import { changeActiveToken } from "../../store/reducers/AuthSlice";
import {  toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { HomeCompanyPath, HomeDevPath } from "../../constants/Path";
import { changeSave } from "../../store/reducers/PerfilSlice";
import { ToastSuccess } from "../../helpers/Toast";
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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  async function handle() {
    try {
      const response = await handleLogin({
        email,
        senha: password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        const id = response.data.userId;
        const email = response.data.email;
        const tipo = response.data.tipo;
        const companyId = response.data.companyId;

        Cookies.set("token", token, { expires: 1 });
        Cookies.set("id", id, { expires: 1 });
        Cookies.set("companyId", companyId, { expires: 1 });
        Cookies.set("isDev", tipo === "DESENVOLVEDOR", { expires: 1 });
        Cookies.set("email", email, { expires: 1 });

        const { data } = await handleInformationsUser(id);

        dispatch(
          changeSave({
            perfil: { ...data.perfil, idCompany: companyId, tipo: tipo },
            address: data.address,
            tools: data.tools,
          })
        );

        dispatch(
          changeActiveToken({
            token: token,
          })
        );

        tipo === "DESENVOLVEDOR"
          ? navigate(HomeDevPath)
          : navigate(HomeCompanyPath);

          ToastSuccess("Logado com sucesso.");
      } else {
        toast.error(response.response.data.message, {
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
      <Styled.Container>
        <InformationsAuth
          title="Entre e faça História"
          descricao="Faça login e comece a experiência "
          textButton="Home"
        />
        <Styled.ContainerForm>
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
            <Styled.Connection>
              <Styled.RememberPassword>
                <Styled.CheckBox type={"checkbox"} />
                <Styled.Label>Lembrar Senha</Styled.Label>
              </Styled.RememberPassword>
              <Styled.Link> Esqueci minha senha</Styled.Link>
            </Styled.Connection>
            <Styled.Row>
              <FilledButton
                onClick={() => handle()}
                color={Colors.BLACK}
                width={190}
                heigth={60}
                marginTop={"24px"}
              >
                {" Entrar"}
              </FilledButton>
            </Styled.Row>
            <Styled.Row>
              <Styled.Label>Não possui conta?</Styled.Label>
              <Styled.Link onClick={() => navigate("/cadastro")}>
                Cadastre-se
              </Styled.Link>
            </Styled.Row>
          </Styled.Form>
        </Styled.ContainerForm>
      </Styled.Container>
    </GeneralContainer>
  );
}

export default Auth;
