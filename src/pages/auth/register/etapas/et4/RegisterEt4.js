import React from "react";
import InputForm from "../../../../../components/input/InputForm";
import { Container, Flex, ColumCount, Divider } from "./RegisterEt4.styled";
import { ButtonRegisterEt4 } from "./components/buttons/ButtonRegisterEt4";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import listLoad from "../../../../../constants/json/selectProf.json";
// import {
//   changeEtapa4,
//   changeEtapaAll,
// } from "../../../../../../store/reducers/RegisterSlice";

const RegisterEt4 = ({}) => {
  const [list] = React.useState(listLoad.proeficiency);
  // const dispatch = useDispatch();

  // function nextEtapa() {
  //   dispatch(
  //     changeEtapa4({
  //       etapa: 4,
  //     })
  //   );
  // }

  return (
    <>
      <Container>
        <Flex>
          <ColumCount count={4} gap={"2rem"}>
            {list?.map((title) => (
              <ButtonRegisterEt4 
              width={"160px"}
              heigth={"4px"}

              title={title.title} />
            ))}
          </ColumCount>
          <InputForm
            label="outros"
            value=""
            handle={() => ""}
            space={"20px"}
            width={"740px"}
          />
          <Divider>
            <FilledButton
              // onClick={() => nextEtapa()}

              color={"black"}
              width={190}
              heigth={60}
              disabled={false}
            >
              {"Próximo"}
            </FilledButton>
          </Divider>
        </Flex>
      </Container>
    </>
  );
};

export default RegisterEt4;
