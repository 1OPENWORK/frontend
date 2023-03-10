// --------------------------------------------------------
// Auth - Auth
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
import React from "react";
import { GeneralContainer } from "../../components/UI/generalLayout/Layout.styled";
import InformationsAuth from "./components/Container/Informations";
import Styled from "./Auth.styled";
import InputForm from "../../components/input/InputForm";
import { FilledButton } from "../../components/UI/buttons/Button";
import Colors from "../../constants/Colors";
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
  return (
    <GeneralContainer>
      <Styled.Container>
        <InformationsAuth
          title="Entre e faça História"
          descricao="Faça login e comece a experiência "
          textButton="Home"
        />
        <Styled.ContainerForm position="center">
          <Styled.Form>
            <Styled.TitleForm>{"Login"}</Styled.TitleForm>
            <InputForm label="Nome" value="" handle={() => ""} space={"42px"} />
            <InputForm label="Senha" value="" handle={() => ""} />
            <Styled.Row style={{
              marginBottom: 20,
              marginTop: 10
            }}>
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
                marginTop: 30,
              }}
            >
              <FilledButton color={Colors.black} width={190} heigth={60}>
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
