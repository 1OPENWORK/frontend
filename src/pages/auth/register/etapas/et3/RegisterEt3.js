import React from "react";
import { useDispatch } from "react-redux";
import CargoEnum from "../../../../../constants/CargoEnum";
import { changeEtapa3 } from "../../../../../store/reducers/RegisterSlice";
import CardRegisterEt3 from "./components/card/CardRegisterEt3";
import Styled from "./RegisterEt3.styled";
import ImgEmpresa from "../../../../../assets/imgs/empresa.svg";
import ImgDesenvolvedor from "../../../../../assets/imgs/desenvolvedor.svg";

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
        img={ImgDesenvolvedor}
        title={"Desenvolvedor"}
        description={
          "As pessoas que se preocupam em resolver problemas. Profissionais focados, que trabalham com liberdade e qualidade"
        }
      />
      <CardRegisterEt3
        index={2}
        isDark={false}
        handleClick={handle}
        value={CargoEnum.COMPANY}
        img={ImgEmpresa}
        title={"Empresa"}
        description={
          "Buscando os melhores desenvolvedores para integração dos projetos, com profissionalismo e responsabilidade"
        }
      />
    </Styled.Container>
  );
};

export default RegisterEt3;
