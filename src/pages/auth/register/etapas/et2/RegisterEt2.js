import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputForm from "../../../../../components/input/InputForm";
import Styled from "../../Register.styled";
import { object, string, ref } from "yup";
import { ToastContainer, toast } from "react-toastify";
import { FilledButton } from "../../../../../components/UI/buttons/Button";
import Colors from "../../../../../constants/Colors";
import { get } from "../../../../../services/Generected";
import axios from "axios";
import {
  changeEtapa2,
  changeEtapaAll,
} from "../../../../../store/reducers/RegisterSlice";

const RegisterEt2 = () => {
  const dispatch = useDispatch();

  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const [isNext, setIsNext] = useState(false);
  const [verified, setVerified] = useState(false);

  async function searchCEP() {
    if (cep.length > 7) {
      const dados = await get(`http://viacep.com.br/ws/${cep}/json/`);

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

      setVerified(true);
      setIsNext(true);
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

  function nextEtapa() {
    dispatch(
      changeEtapaAll({
        etapa: 2,
      })
    );
  }

  return (
    <Styled.Form
      style={{
        paddingTop: "2rem",
      }}
    >
      <ToastContainer />
      <Styled.Row>
        <InputForm
          label="CEP"
          value={cep}
          handle={setCep}
          space={"20px"}
          mr={"20px"}
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
      <Styled.Divisor
        align={"flex-end"}
        style={{ width: "770px" }}
      >
        {!isNext ? (
          <FilledButton
            onClick={handleForm}
            color={Colors.PRIMARY_COLOR}
            width={190}
            heigth={60}
          >
            {"Verificar"}
          </FilledButton>
        ) : (
          <FilledButton
            onClick={() => nextEtapa()}
            color={Colors.BLACK}
            width={190}
            heigth={60}
          >
            {"Próximo"}
          </FilledButton>
        )}
      </Styled.Divisor>
    </Styled.Form>
  );
};

export default RegisterEt2;
