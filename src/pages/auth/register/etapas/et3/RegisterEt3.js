import React, { useEffect, useState } from "react";
import InputForm from "../../../../../components/input/InputForm";
import CargoEnum from "../../../../../constants/CargoEnum";
import CardRegisterEt3 from "./components/card/CardRegisterEt3";
import Styled from "./RegisterEt3.styled";
const RegisterEt3 = ({next}) => {
  const [selected, setSelected] = useState("");



  return (
    <Styled.Container>
      <CardRegisterEt3
        index={1}
        isDark={true}
        handleClick={next}
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
        handleClick={next}
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
