import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputForm from "../../../../../components/input/InputForm";
import CargoEnum from "../../../../../constants/CargoEnum";
import { changeEtapa3 } from "../../../../../store/reducers/RegisterSlice";
import CardRegisterEt3 from "./components/card/CardRegisterEt3";
import Styled from "./RegisterEt3.styled";
const RegisterEt3 = () => {
  const dispatch = useDispatch();

  function handle(isDev) {
    dispatch(
      changeEtapa3({
        isDev: isDev === CargoEnum.DEVELOPER ? true : false,
      })
    );
  }

  return (
    <Styled.Container>
      <CardRegisterEt3
        index={1}
        isDark={true}
        handleClick={handle}
        value={CargoEnum.DEVELOPER}
        img={
          "https://www.p1technology.com.au/uploads/117/107/upgrade-home-office.jpg"
        }
        title={"Desenvolvedor"}
        description={
          "As pessoas que se preocupam em resolver problemas. Profissionais focados, que trabalham com liberdade e qualidade"
        }
      />
      <CardRegisterEt3
        index={2}
        handleClick={handle}
        value={CargoEnum.COMPANY}
        img={
          "https://www.eurodicas.com.br/wp-content/uploads/2021/01/como-abrir-empresa-na-espanha.jpg"
        }
        title={"Empresa"}
        description={
          "Buscando os melhores desenvolvedores para integração dos projetos, com profissionalismo e responsabilidade"
        }
      />
    </Styled.Container>
  );
};

export default RegisterEt3;
