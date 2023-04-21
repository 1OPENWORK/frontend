import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import InputForm from "../../../../../components/input/InputForm";
import {
  Container,
  Flex,
  ColumCount,
  Divider,
} from "../et4/RegisterEt4.styled";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import { ButtonRegisterEt4 } from "../et4/components/buttons/ButtonRegisterEt4";
import {
  Button,
  DivFlowScroll,
  DivInput,
  H3Input,
  Input,
} from "./RegisterEt6.styled";
import { ComboBox } from "./components/ComboBox";
import Item from "./components/item/Item";
import { useSelector } from "react-redux";
import { selectRegister } from "../../../../../store/reducers/RegisterSlice";

const RegisterEt6 = ({ checked }) => {
  const { register } = useSelector(selectRegister);
  const [itens, setItens] = useState([]);
  const [compotencias, setCompetencias] = useState([]);

  const [sports] = ["Badminton", "Cricket", "Football", "Golf", "Tennis"];

  const handleAdd = competencia => {
    setCompetencias(prev => [...prev, competencia]);
  };

  useEffect(() => {
    console.log("🚀 ~ file: RegisterEt6.js:36 ~ RegisterEt6 ~ itens:", itens);
  }, [itens]);

  useEffect(() => {
    setItens(register.etapa5);
  }, []);

  return (
    <>
      <Container>
        <DivFlowScroll>
          {itens.map((dados, index) => (
            <Item key={index} dados={dados} />
          ))}
        </DivFlowScroll>
        <Flex gap={"2rem"}>
          <Divider>
            <FilledButton
              // onClick={() => nextEtapa()}
              color={"black"}
              width={200}
              heigth={60}
              disabled={true}
            >
              {"Finalizar"}
            </FilledButton>
          </Divider>
        </Flex>
      </Container>
    </>
  );
};

export default RegisterEt6;
