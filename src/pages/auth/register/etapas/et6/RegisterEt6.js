import * as React from "react";
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

const RegisterEt6 = ({ checked }) => {
  const [sports] = ["Badminton", "Cricket", "Football", "Golf", "Tennis"];

  return (
    <>
      <Container>
        <DivFlowScroll>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </DivFlowScroll>
        <Flex gap={"2rem"}>
          <Divider>
            <FilledButton
              // onClick={() => nextEtapa()}

              color={"black"}
              width={100}
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
