import React, { useEffect, useState } from "react";
import InputForm from "../../../../../components/input/InputForm";
import { Container, Flex, ColumCount, Divider } from "./RegisterEt4.styled";
import { ButtonRegisterEt4 } from "./components/buttons/ButtonRegisterEt4";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import { handleProeficiency } from "../../../../../store/actions/Proeficiency";
import { useDispatch } from "react-redux";
import { changeEtapa4 } from "../../../../../store/reducers/RegisterSlice";
import Colors from "../../../../../constants/Colors";

const RegisterEt4 = () => {
  const [proefiency, setProeficiency] = useState([]);
  const dispatch = useDispatch();
  const [arrayTools, setTools] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRemoveItemList = React.useCallback((proefiency) => {
    const tools = proefiency.tools;

    const newProefiency = [...arrayTools];
    for (const tool of tools) {
      newProefiency.splice(arrayTools.indexOf(tool.id), 1);
    }

    setTools(newProefiency);
  });

  const tools = (dados, checked) => {
    if (checked) {
      proefiency
        .filter((list) => list.name === dados.name)
        // eslint-disable-next-line array-callback-return
        .map((d) => {
          const tools = d.tools;

          setTools([...arrayTools, ...tools]);
        });
    } else {
      handleRemoveItemList(dados);
    }
  };

  const listar = async () => {
    const dados = await handleProeficiency();
    setProeficiency(dados.data);
  };

  const handleSubmitReducer = () => {
    dispatch(
      changeEtapa4({
        lista: arrayTools,
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
            {proefiency?.map((dados) => (
              <ButtonRegisterEt4
                width={"160px"}
                heigth={"4px"}
                dados={dados}
                handleClick={tools}
              />
            ))}
          </ColumCount>
          <InputForm
            label="Outros"
            value=""
            handle={() => ""}
            space={"20px"}
            width={"740px"}
          />
          <Divider>
            <FilledButton
              onClick={handleSubmitReducer}
              color={Colors.BLACK}
              width={190}
              heigth={60}
              disabled={false}
              marginRight={"0px"}
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
