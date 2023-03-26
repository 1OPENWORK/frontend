import React from 'react';
import {
    ContainerBodyFooter,
    ContainerFooter,
    TitleDivInformation,
    Paragrafo,
    DivSocialMedia
} from "./Footer.styled";
import Colors from "../../../../constants/Colors";
import Logo from "../../../../assets/imgs/logo.svg";
import Facebook from "../../../../assets/imgs/fb.svg";
import Instagram from "../../../../assets/imgs/insta.svg";
import linkedin from "../../../../assets/imgs/linkedin.svg";
import Styled from "../../../../components/navBar/NavBar.styled";

const Footer = () => {
    return (
        <ContainerFooter>
            <ContainerBodyFooter>
                <TitleDivInformation
                >
                    <Styled.LogoImg src={Logo} />
                </TitleDivInformation>
                <Paragrafo fontSize={"16px"} width={"300px"}>
                    Nós da Open Work temos o objetivo de desenvolver, uma aplicação que ajude, tanto desenvolvedores a achar uma plataforma confiável quanto empresas a acharem bons devs.
                    Por conta da demissão em massa queremos trazer em uma aplicação, um lugar onde devs podem usar como apoio para suas finanças e passar um tempo recebendo dinheiro e não apenas gastando. Assim podendo escolher seu próximo emprego com mais calma, escolhendo uma empresa pelos seus valores e não somente pelo salário.
                </Paragrafo>
            </ContainerBodyFooter>
            <ContainerBodyFooter>
                <TitleDivInformation
                    style={{
                        textAlign: "center",
                    }}
                    color={Colors.PRIMARY_COLOR}
                >
                    {"Contato"}
                </TitleDivInformation>
                <Paragrafo  >
                    <a href='google.com' style={{ color: "white" }}>suport@openWork.com</a>
                </Paragrafo>
                <Paragrafo  >
                    Siga nos
                </Paragrafo>
                <DivSocialMedia>
                        <Styled.LogoImg  src={Instagram} />                  
                        <Styled.LogoImg style={{paddingLeft:"10px"}} src={Facebook} />
                        <Styled.LogoImg style={{paddingLeft:"10px"}} src={linkedin} />
                </DivSocialMedia>
            </ContainerBodyFooter>
            <ContainerBodyFooter>
                <TitleDivInformation
                    style={{
                        textAlign: "center",
                    }}
                    color={Colors.PRIMARY_COLOR}
                >
                    {"Empresa"}
                </TitleDivInformation>
                <Paragrafo  >
                    Missão
                </Paragrafo>
                <Paragrafo  >
                    Objetivo
                </Paragrafo>
                <Paragrafo  >
                    Sobre
                </Paragrafo>
            </ContainerBodyFooter>
            <ContainerBodyFooter>
                <TitleDivInformation
                    style={{
                        textAlign: "center",
                    }}
                    color={Colors.PRIMARY_COLOR}
                >
                    {"Endereço"}
                </TitleDivInformation>
                <Paragrafo ta={"center"}>
                    Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001
                </Paragrafo>
            </ContainerBodyFooter>
        </ContainerFooter>
    );
}

export default Footer;