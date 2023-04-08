import React from "react";
import InputForm from "../../../../../components/input/InputForm";
import {
  Container,
  Flex,
  ColumCount,
  Divider,
} from "../et4/RegisterEt4.styled";
import { ButtonRegisterEt4 } from "../et4/components/buttons/ButtonRegisterEt4";
import { FilledButton } from "../../../../../components/UI/buttons/Button";

const RegisterEt5 = () => {

  return (
    <>
      <Container>
        <Flex>
          <InputForm
            label="Pesquisar"
            value=""
            handle={() => ""}
            space={"24px"}
            width={"734px"}
          />
          <ColumCount>
            <ButtonRegisterEt4 title={"React"} handleClick={() => ("")}/>
            <ButtonRegisterEt4 title={"Angular"} handleClick={() => ("")}/>
            <ButtonRegisterEt4 title={"HTML"} handleClick={() => ("")}/>
            <ButtonRegisterEt4 title={"CSS"} handleClick={() => ("")}/>
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

export default RegisterEt5;
