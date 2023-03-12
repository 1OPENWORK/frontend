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
  },

  reducers: {
    changeEtapa(state, { payload }) {
      return { ...state, etapaAtual: payload.etapa };
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
  },
});

export const { changeEtapa, changeEtapa1 } = slice.actions;
export const selectRegister = (state) => state;
export default slice.reducer;
