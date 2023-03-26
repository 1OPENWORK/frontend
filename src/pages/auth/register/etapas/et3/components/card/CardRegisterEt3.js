import React from "react";
import Styled from "../../RegisterEt3.styled";
import { Container, Information } from "./CardRegisterEt3.styled";
import { FilledButton } from "../../../../../../../components/UI/buttons/Button";
import Colors from "../../../../../../../constants/Colors";

const CardRegisterEt3 = ({
  handleClick,
  value,
  img,
  title,
  description,
  isDark,
}) => {
  return (
    <Container isDark={isDark} img={img}>
      <Information>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <FilledButton
          onClick={() => handleClick(value)}
          color={isDark ? Colors.WHITE : Colors.BLACK}
          inverted={isDark ? true : false}
          width={194}
          isDark={isDark}
        >
          Próximo
        </FilledButton>
      </Information>
    </Container>
  );
};

export default CardRegisterEt3;
