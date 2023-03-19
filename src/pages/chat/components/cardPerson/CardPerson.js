import { Avatar } from "@mui/material";
import Styled from "./CardPerson.styled";

const CardPerson = ({dados, handleClick}) => {
  return (
    <Styled.Container onClick={() => handleClick(dados)}>
      <Styled.Divisor>
        <Avatar
          src={dados.img}
          sx={{ width: 60, height: 60 }}
        />
        <Styled.Divisor isColumn={true} style={{width: "70%", marginLeft: 10}}>
          <Styled.Name>{dados.nome}</Styled.Name>
          <Styled.PrevMessage>Essa é uma mensagem grande que foi enviada para você.</Styled.PrevMessage>
        </Styled.Divisor>
      </Styled.Divisor>
    </Styled.Container>
  );
};

export default CardPerson;
