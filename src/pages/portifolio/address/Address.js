import React, { useEffect, useState } from "react";

import Styled from "../Portifolio.style";
import { useDispatch } from "react-redux";
import { get } from "../../../services/Generected";
import { object, string } from "yup";
import { toast } from "react-toastify";
import InputForm from "../../../components/input/InputForm";
import { FilledButton } from "../../../components/UI/buttons/Button";
import Colors from "../../../constants/Colors";
import { useSelector } from "react-redux";
import {
  changeUpdateAddress,
  selectedPerfil,
} from "../../../store/reducers/PerfilSlice";
import PortifolioService from "../service/PortifolioService";
import { selectedAuth } from "../../../store/reducers/AuthSlice";

const Address = () => {
  const { auth } = useSelector(selectedAuth);
  const { dadosPerfil } = useSelector(selectedPerfil);
  const [dadosAddress] = useState(dadosPerfil.address);

  const dispatch = useDispatch();

  const [zipcode, setZipcode] = useState(dadosAddress.zipcode);
  const [state, setState] = useState(dadosAddress.state);
  const [city, setCity] = useState(dadosAddress.city);
  const [district, setDistrict] = useState(dadosAddress.district);
  const [address, setAddress] = useState(dadosAddress.address);
  const [number, setNumber] = useState(dadosAddress.number);
  const [complement, setComplement] = useState(dadosAddress.complement);

  async function searchZipcode() {
    if (zipcode !== undefined && zipcode.length > 7) {
      const dados = await get(`http://viacep.com.br/ws/${zipcode}/json/`);

      if (dados !== undefined) {
        setZipcode(dados.data.cep);
        setAddress(dados.data.logradouro);
        setState(dados.data.uf);
        setDistrict(dados.data.bairro);
        setCity(dados.data.localidade);
      }
    }
  }

  const validRegister = object({
    complement: string().notRequired(),
    number: string().required("Preencha o campo número."),
    address: string().required("Preencha o campo rua."),
    district: string().required("Preencha o campo bairro."),
    city: string().required("Preencha o campo cidade."),
    state: string().required("Preencha o campo estado."),
    zipcode: string().required("Preencha o campo CEP."),
  });

  async function handleForm() {
    const dados = {
      complement,
      number,
      address,
      district,
      city,
      state,
      zipcode,
    };

    try {
      await validRegister.validate(dados);

      // Atualizar
      const response = await PortifolioService.updadeAddress(
        dadosPerfil.perfil.id,
        dados,
        auth.token
      );

      if (response.status === 200) {
        dispatch(
          changeUpdateAddress({
            address: dados,
          })
        );

        toast.success("Infomações atualizadas com sucesso.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: false,
          theme: "light",
        });
      }
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
    searchZipcode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zipcode]);

  return (
    <Styled.Form>
      <Styled.Row>
        <InputForm
          label="CEP"
          value={zipcode}
          handle={setZipcode}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm
          label="Estado"
          value={state}
          handle={() => ""}
          space={"20px"}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Cidade"
          value={city}
          handle={() => ""}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm
          label="Bairro"
          value={district}
          handle={() => ""}
          space={"20px"}
        />
      </Styled.Row>
      <Styled.Row>
        <InputForm
          label="Rua"
          value={address}
          handle={() => ""}
          space={"20px"}
          mr={"20px"}
        />
        <InputForm
          label="Número"
          value={number}
          handle={setNumber}
          space={"20px"}
        />
      </Styled.Row>
      <InputForm
        label="Complemento ou outros"
        value={complement}
        handle={setComplement}
        space={"20px"}
        width={"770px"}
      />
      <Styled.RowJustifyEnd align={"flex-end"} style={{ width: "770px" }}>
        <FilledButton
          onClick={() => handleForm()}
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
