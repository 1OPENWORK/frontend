import React, { useEffect, useState } from "react";

import Styled from "../Portifolio.style";
import { useDispatch } from "react-redux";
import { get } from "../../../services/Generected";
import { object, string } from "yup";
import { ToastContainer, toast } from "react-toastify";
import InputForm from "../../../components/input/InputForm";
import { FilledButton } from "../../../components/UI/buttons/Button";
import Colors from "../../../constants/Colors";
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../../store/reducers/PerfilSlice";

const Address = () => {
  const { dadosPerfil } = useSelector(selectedPerfil);
  const [dadosAddress] = useState(dadosPerfil.address);

  const [cep, setCep] = useState(dadosAddress.zipcode);
  const [estado, setEstado] = useState(dadosAddress.state);
  const [cidade, setCidade] = useState(dadosAddress.city);
  const [bairro, setBairro] = useState(dadosAddress.district);
  const [rua, setRua] = useState(dadosAddress.address);
  const [numero, setNumero] = useState(dadosAddress.number);
  const [complemento, setComplemento] = useState(dadosAddress.complement);



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

      // Atualizar



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
      <Styled.RowJustifyEnd align={"flex-end"} style={{ width: "770px" }}>
        <FilledButton
          onClick={() => ""}
          marginRight={"0px"}
          color={Colors.PRIMARY_COLOR}
          width={190}
          heigth={60}
        >
          {"Atualizar"}
        </FilledButton>
      </Styled.RowJustifyEnd>
    </Styled.Form>
  );
};

export default Address;
