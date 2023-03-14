import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "register",
  initialState: {
    etapaAtual: 0,
    etapa1: {
      fullname: "",
      email: "",
      tel: "",
      cfp_cnpj: "",
      password: "",
      comfirmed_password: "",
    },
    etapa2: {
      cep: "",
      estado: "",
      cidade: "",
      bairro: "",
      rua: "",
      numero: "",
      complemento: "",
    },
    etapa3: {
      isDesenvolvedor: false
    }
  },

  reducers: {

    changeEtapaAll(state, {payload}){
      return {...state, etapaAtual: payload.etapa}
    },

    changeEtapa1(state, { payload }) {
      return {
        ...state,
        etapa1: {
          fullname: payload.fullname,
          email: payload.email,
          tel: payload.tel,
          cfp_cnpj: payload.cfp_cnpj,
          password: payload.password,
          comfirmed_password: payload.comfirmed_password,
        },
      };
    },

    changeEtapa2(state, { payload }) {
      return {
        ...state,
        etapa2: {
          cep: payload.cep,
          estado: payload.estado,
          cidade: payload.cidade,
          bairro: payload.bairro,
          rua: payload.rua,
          numero: payload.numero,
          complemento: payload.complemento,
        },
      };
    },

    changeEtapa3(state, { payload }) {
      return {
        ...state,
        etapaAtual: 3,
        etapa3: {
          isDesenvolvedor: payload.isDev,
        },
      };
    },




  },
});

export const {changeEtapa1, changeEtapa2, changeEtapa3, changeEtapaAll } = slice.actions;
export const selectRegister = (state) => state;
export default slice.reducer;
