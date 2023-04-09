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
import { Button, DivInput, H3Input, Input } from "./RegisterEt6.styled";
import { ComboBox } from "./components/ComboBox";

const RegisterEt6 = ({ checked }) => {
  const [sports] = ["Badminton", "Cricket", "Football", "Golf", "Tennis"];

  return (
    <>
      <Container>
        <Flex gap={"2rem"}>
          <ColumCount count={3} gap={"4rem"}>
            <Button
              color={"#fff"}
              backGround={"#20ac69"}
              width={"199px"}
              height={"53px"}
              title={"React"}
            >
              {"React"}
            </Button>

            <DivInput>
              <Input
                w={"58px"}
                type="number"
                min="0"
                max="100"
                placeholder="0"
              />
              <H3Input>{"Anos"}</H3Input>
            </DivInput>
            <ComboBox />
          </ColumCount>

          <ColumCount count={3} gap={"4rem"}>
            <Button
              color={"#fff"}
              backGround={"#20ac69"}
              width={"199px"}
              height={"53px"}
              title={"React"}
            >
              {"CSS"}
            </Button>

            <DivInput>
              <Input
                w={"58px"}
                type="number"
                min="0"
                max="100"
                placeholder="0"
              />
              <H3Input>{"Anos"}</H3Input>
            </DivInput>
            <ComboBox />
          </ColumCount>

          <ColumCount count={3} gap={"4rem"}>
            <Button
              color={"#fff"}
              backGround={"#20ac69"}
              width={"199px"}
              height={"53px"}
              title={"React"}
            >
              {"html"}
            </Button>

            <DivInput>
              <Input
                w={"58px"}
                type="number"
                min="0"
                max="100"
                placeholder="0"
              />
              <H3Input>{"Anos"}</H3Input>
            </DivInput>
            <ComboBox />
          </ColumCount>

          <Divider>
            <FilledButton
              // onClick={() => nextEtapa()}

              color={"black"}
              width={190}
              heigth={60}
              disabled={true}
            >
              {"Próximo"}
            </FilledButton>
          </Divider>
        </Flex>
      </Container>
    </>
  );
};

export default RegisterEt6;
