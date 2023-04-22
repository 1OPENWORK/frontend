import React, {useState, useEffect}from "react";
import InputForm from "../../../../../components/input/InputForm";
import { Container, Flex, ColumCount, Divider } from "./RegisterEt4.styled";
import { ButtonRegisterEt4 } from "./components/buttons/ButtonRegisterEt4";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
// import listLoad from "../../../../../constants/json/selectProf.json";

// import {
//   changeEtapa4,
//   changeEtapaAll,
// } from "../../../../../../store/reducers/RegisterSlice";

const RegisterEt4 = () => {
  const [proefiency, setProeficiency] = useState([]);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  let array = [];

  const handleRemoveItemList = React.useCallback((proefiency) => {
    const newProefiency = [...list];
    newProefiency.splice(list.indexOf(proefiency), 1);
    setList(newProefiency);
  });

  const Tools = (title) => {
    proefiency
      .filter((list) => list.name === title)
      .map((d) => {
        const tools = d.tools;

        array.push(...tools);
      });
  };

  const handleAdicionarLista = (title, checked) => {
    if (!checked) {
      handleRemoveItemList(title);
    } else {
      Tools(title);
    }
  };

  const listar = async () => {
    const dados = await handleProeficiency();
    setProeficiency(dados.data);
  };

  const handleSubmitReducer = () => {
    dispatch(
      changeEtapa4({
        lista: array,
      })
    );
  };

  useEffect(() => {
    listar();
  }, []);

  return (
    <>
      <Container>
        <Flex>
          <ColumCount count={4} gap={"2rem"}>
            {list?.map((title) => (
              <ButtonRegisterEt4
                width={"160px"}
                heigth={"4px"}
                title={title.title}
              />
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
