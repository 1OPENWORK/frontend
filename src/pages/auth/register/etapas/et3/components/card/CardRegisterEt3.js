import React from "react";
import Styled from "../../RegisterEt3.styled"
import ImgDev from "../../../../../../../assets/imgs/imagePerson.svg"
import { Container, Information } from "./CardRegisterEt3.styled";
import { FilledButton } from "../../../../../../../components/UI/buttons/Button";
import Colors from "../../../../../../../constants/Colors";

const CardRegisterEt3 = ({index, handleClick, value, img, title, description, isDark}) => {

    // "https://blog.unis.edu.br/hubfs/como-esta-o-mercado-para-um-analista-e-desenvolvedor-de-sistemas.png"

    return(
        <Container isDark={isDark} img={img}>
            <Information>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Description>
                {description}
                </Styled.Description>
                <FilledButton onClick={() => handleClick(value)} color={isDark ? Colors.white : Colors.black} inverted={isDark ? true : false} width={194}>Próximo</FilledButton>
            </Information>
        </Container>
    )
}

export default CardRegisterEt3;