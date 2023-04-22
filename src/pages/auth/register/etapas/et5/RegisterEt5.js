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
          <ColumCount count={4} gap={"1.9rem"}>
            <ButtonRegisterEt4
              width={"160px"}
              height={"44px"}
              title={"React"}
            handleClick={() => ("")}/>
            <ButtonRegisterEt4
              width={"160px"}
              height={"44px"}
              title={"Angular"}
            handleClick={() => ("")}/>
            <ButtonRegisterEt4 width={"160px"} height={"44px"} title={"HTML"} handleClick={() => ("")}/>
            <ButtonRegisterEt4 width={"160px"} height={"44px"} title={"CSS"} handleClick={() => ("")}/>
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
