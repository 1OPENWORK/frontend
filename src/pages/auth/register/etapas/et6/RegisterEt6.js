import React, { useEffect, useState } from "react";
import { Container, Flex, Divider } from "../et4/RegisterEt4.styled";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import { DivFlowScroll } from "./RegisterEt6.styled";
import Item from "./components/item/Item";
import { useSelector } from "react-redux";
import { selectRegister } from "../../../../../store/reducers/RegisterSlice";
import { post } from "../../../../../services/Generected";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { HomeDevPath } from "../../../../../constants/Path";

const RegisterEt6 = ({ checked }) => {
  const { register } = useSelector(selectRegister);
  const [itens, setItens] = useState([]);
  const navigate = useNavigate();

  const URI = process.env.REACT_APP_BACKEND_LOCAL_HOST;

  const editCompotencias = (dados) => {
    const prevItens = [...itens];
    const newItens = prevItens.map((i) => {
      if (i.id === dados.id) {
        return {
          ...i,
          years: dados.years,
          proficiency: dados.proficiency,
        };
      } else {
        return i;
      }
    });

    setItens(newItens);
  };

  const handleFinished = async () => {
    const dados = {
      user: {
        name: register.etapa1.fullname,
        email: register.etapa1.email,
        cpfCnpj: register.etapa1.cfp_cnpj,
        cellphone: register.etapa1.tel,
        password: register.etapa1.password,
        autentication: false,
      },
      address: {
        zipcode: register.etapa2.cep,
        state: register.etapa2.estado,
        city: register.etapa2.cidade,
        district: register.etapa2.bairro,
        address: register.etapa2.rua,
        number: register.etapa2.numero,
        complement: register.etapa2.complemento,
      },
      userTool: {
        userTools: [...[...itens]],
      },
    };

    const response = await post(`${URI}/api/cadastros/dev`, dados);

    if(response.status === 201){
      Cookies.set('token', response.data, { expires: 1 });
      navigate(HomeDevPath);
    }

    
  };

  useEffect(() => {
    setItens(register.etapa5);
  }, []);

  return (
    <>
      <Container>
        <DivFlowScroll>
          {itens.map((dados, index) => (
            <Item
              key={index}
              dados={dados}
              handleProeficiencia={editCompotencias}
            />
          ))}
        </DivFlowScroll>
        <Flex gap={"2rem"}>
          <Divider>
            <FilledButton
              onClick={() => handleFinished()}
              color={"black"}
              width={200}
              heigth={60}
              disabled={false}
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
