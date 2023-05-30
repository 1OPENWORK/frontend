import { createSlice } from "@reduxjs/toolkit";

export const slicePerfil = createSlice({
  name: "dadosUser",
  initialState: {
    perfil: {},
    address: {},
    tools: [],
  },
  reducers: {
    changeSave(state, { payload }) {
      return {
        ...state,
        perfil: payload.perfil,
        address: payload.address,
        tools: payload.tools,
      };
    },

    changeUpdatePerfil(state, { payload }) {
      return {
        ...state,
        perfil: payload.perfil,
      };
    },

    changeUpdateAddress(state, { payload }) {
      return {
        ...state,
        address: payload.address,
      };
    },
  },
});

export const { changeSave, changeUpdatePerfil, changeUpdateAddress } = slicePerfil.actions;
export const selectedPerfil = (state) => state;
export default slicePerfil.reducer;
