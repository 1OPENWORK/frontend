import React from "react";
import { Container, Header, GroupUser, Desc } from "./CardProject.styled";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

function CardProject({ type, selected, onSelect }) {
  const [isSelected, setIsSelected] = useState(selected);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onSelect();
  };

  return (
    <>
      <Container onClick={handleClick} color={isSelected ? "#20AC69" : "none"}>
        <Header>
          <BsFillQuestionSquareFill size={18} />
        </Header>

        <GroupUser color={isSelected ? "#20AC69" : "none"}>
          {type === 1 ? (
            <>
              <HiUserGroup size={66} />
            </>
          ) : (
            <>
              <FaUser size={50} />
            </>
          )}
        </GroupUser>
        <Desc>
          {type === 1 ? (
            <>
              <h3>Projeto Grande</h3>
              <br />
              <p>
                Projetos grandes, são projetos que terão uma duração maior que 1
                mês, e será gerenciado por Sprints as tarefas{" "}
              </p>
            </>
          ) : (
            <>
              <h3>Projeto pequeno</h3>
              <br />
              <p>
                Projetos pequenos, são projetos que terão uma duração menor que
                1 mês, e será gerenciado por entregas as tarefas
              </p>
            </>
          )}
        </Desc>
      </Container>
    </>
  );
}

export default CardProject;
