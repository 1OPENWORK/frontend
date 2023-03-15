import React, { useEffect, useState } from "react";
import InputForm from "../../../../../components/input/InputForm";
import { Container, Flex, ColumCount, Divider } from "./RegisterEt4.styled";
import { ButtonRegisterEt4 } from "./components/buttons/ButtonRegisterEt4";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import listLoad from "../../../../../constants/json/selectProf.json";
import { handleProeficiency } from "../../../../../store/actions/Proeficiency";
// import {
//   changeEtapa4,
//   changeEtapaAll,
// } from "../../../../../../store/reducers/RegisterSlice";

const RegisterEt4 = ({}) => {
  const [list] = React.useState(listLoad.proeficiency);
  const [proefiency, setProeficiency] = useState([]);


  // const dispatch = useDispatch();

  // function nextEtapa() {
  //   dispatch(
  //     changeEtapa4({
  //       etapa: 4,
  //     })
  //   );
  // }

  const listar = async () => {
      const dados = await handleProeficiency();
      setProeficiency(dados.data);
  }

useEffect(() => {
  listar();
},[])

  return (
    <>
      <Container>
        <Flex>
          <ColumCount>
            {proefiency?.map((dados) => (
              <ButtonRegisterEt4 title={dados.name} />
            ))}
          </ColumCount>
          <InputForm
            label="outros"
            value=""
            handle={() => ""}
            space={"20px"}
            width={"750px"}
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
