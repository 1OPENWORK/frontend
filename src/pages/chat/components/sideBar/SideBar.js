import { Avatar } from "@mui/material";
import React from "react";
import CardPerson from "../cardPerson/CardPerson";
import Styled from "./SideBar.styled";

const SideBar = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Avatar
          src="https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
          sx={{ width: 60, height: 60 }}
          style={{
            cursor: "pointer",
          }}
        />
      </Styled.Header>
      <Styled.ListPersons>
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
        <CardPerson />
      </Styled.ListPersons>
    </Styled.Container>
  );
};
export default SideBar;
