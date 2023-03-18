import { Avatar } from "@mui/material";
import Styled from "./CardPerson.styled";

const CardPerson = () => {
  return (
    <Styled.Container>
      <Styled.Divisor>
        <Avatar
          src="https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <Styled.Divisor isColumn={true} style={{width: "70%", marginLeft: 10}}>
          <Styled.Name>Jefferson Junior</Styled.Name>
          <Styled.PrevMessage>Essa é uma mensagem grande que foi enviada para você.</Styled.PrevMessage>
        </Styled.Divisor>
      </Styled.Divisor>
    </Styled.Container>
  );
};

export default CardPerson;
