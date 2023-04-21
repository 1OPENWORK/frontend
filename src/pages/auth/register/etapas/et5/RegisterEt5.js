import React, { useEffect, useState } from "react";
import InputForm from "../../../../../components/input/InputForm";
import Styled from "./RegisterEt5.styled";
import {
  Container,
  Flex,
  ColumCount,
  Divider,
} from "../et4/RegisterEt4.styled";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import ButtonRegisterEt5 from "./components/ButtonRegisterEt5";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEtapa5,
  selectRegister,
} from "../../../../../store/reducers/RegisterSlice";
import { Register5Divisor } from "./components/ButtonRegisterEt5.styled";

const RegisterEt5 = () => {
  const { register } = useSelector(selectRegister);
  const [tools, setTools] = useState([]);
  const [toolSelected, setToolSelected] = useState([]);
  const [searchTools, setSearchTools] = useState("");

  const dispatch = useDispatch();

  const handleClick = (dados, checked) => {
    const newDados = { ...dados, anos: 0, proficiencia: 0 };

    if (checked) {
      const index = toolSelected.findIndex(tool => tool.id === dados.id);
      const newToolSelected = [...toolSelected];
      newToolSelected.splice(index, 1);
      setToolSelected(newToolSelected);
      setTools([...tools, newDados]);
    } else {
      const index = tools.findIndex(tool => tool.id === dados.id);
      const newTools = [...tools];
      newTools.splice(index, 1);
      setTools(newTools);
      setToolSelected([...toolSelected, newDados]);
    }
    setSearchTools("");
  };

  useEffect(() => {
    setTools(register.etapa4);
  }, []);

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTools.toLowerCase())
  );

  const handleNext = () => {
    dispatch(
      changeEtapa5({
        lista: toolSelected,
      })
    );
  };

  return (
    <>
      <Container>
        <Flex>
          <InputForm
            label="Pesquisar"
            value={searchTools}
            handle={setSearchTools}
            space={"24px"}
            width={"734px"}
          />

          <Styled.DivScroll>
            <ColumCount count={4} gap={"1.9rem"}>
              {toolSelected?.map((dados, index) => {
                return (
                  <ButtonRegisterEt5
                    key={dados.id}
                    width={"160px"}
                    height={"44px"}
                    dados={dados}
                    selected={true}
                    handleClick={handleClick}
                  />
                );
              })}
            </ColumCount>

            <ColumCount count={4} gap={"1.9rem"}>
              {filteredTools.slice(0, 4).map((dados, index) => {
                if (index <= 3) {
                  return (
                    <ButtonRegisterEt5
                      key={dados.id}
                      width={"160px"}
                      height={"44px"}
                      dados={dados}
                      handleClick={handleClick}
                    />
                  );
                }
              })}
            </ColumCount>
          </Styled.DivScroll>

          <Divider>
            <FilledButton
              onClick={() => handleNext()}
              color={"black"}
              width={190}
              heigth={60}
              disabled={toolSelected.length > 0 ? false : true}
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
