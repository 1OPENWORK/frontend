import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputForm from "../../../../../components/input/InputForm";
import Styled from "../../Register.styled";
import { object, string, ref } from "yup";
import { toast } from "react-toastify";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import Colors from "../../../../../constants/Colors";
import { get } from "../../../../../services/Generected";
import {
  changeEtapa2,
  changeEtapaAll,
  selectRegister,
} from "../../../../../store/reducers/RegisterSlice";
import { useSelector } from "react-redux";
import { cleanMask } from "../../../../../helpers/HelperFunctions";

const RegisterEt2 = () => {
  const dispatch = useDispatch();
  const { register } = useSelector(selectRegister);
  
  const [cep, setCep] = useState(register.etapa2.cep);
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");



  async function searchCEP() {
    if (cleanMask(cep).length === 8) {
      const dados = await get(`http://viacep.com.br/ws/${cleanMask(cep)}/json/`);

      setCep(dados.data.cep);
      setRua(dados.data.logradouro);
      setEstado(dados.data.uf);
      setBairro(dados.data.bairro);
      setCidade(dados.data.localidade);
    }
  }

  const validRegister = object({
    complemento: string().notRequired(),
    numero: string().required("Preencha o campo numero."),
    rua: string().required("Preencha o campo rua."),
    bairro: string().required("Preencha o campo bairro."),
    cidade: string().required("Preencha o campo cidade."),
    estado: string().required("Preencha o campo estado."),
    cep: string().required("Preencha o campo CEP."),
  });

  async function handleForm() {
    const dados = {
      complemento,
      numero,
      rua,
      bairro,
      cidade,
      estado,
      cep,
    };

    try {
      await validRegister.validate(dados);

      dispatch(
        changeEtapa2({
          ...dados,
        })
      );
      dispatch(
        changeEtapaAll({
          etapa: 2,
        })
      );

    } catch (err) {
      toast.error(err.errors[0], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
      });
    }
  }

  useEffect(() => {
    searchCEP();
  }, [cep]);



  return (
    <Styled.Form>
      <Styled.Row>
        <InputForm
          label="CEP"
          value={cep}
          handle={setCep}
          space={"20px"}
          mr={"20px"}
          maxLength={8}
          
        />
        <InputForm
          label="Estado"
          value={estado}
          handle={() => ""}
          space={"20px"}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Cidade"
          value={cidade}
          handle={() => ""}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm
          label="Bairro"
          value={bairro}
          handle={() => ""}
          space={"20px"}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Rua"
          value={rua}
          handle={() => ""}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm
          label="Número"
          value={numero}
          handle={setNumero}
          space={"20px"}
        />
      </Styled.Row>
      <InputForm
        label="Complemento  ou outros"
        value={complemento}
        handle={setComplemento}
        space={"20px"}
        width={"770px"}
      />
      <Styled.Divisor align={"flex-end"} style={{ width: "770px" }}>
    
          <FilledButton
            onClick={handleForm}
            color={Colors.BLACK}
            width={190}
            heigth={60}
            marginRight={"0px"}
          >
            {"Próximo"}
          </FilledButton>
        
      </Styled.Divisor>
    </Styled.Form>
  );
};

export default RegisterEt2;
