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
        ...state, perfil: payload.perfil,
      }

    }
  },
});

export const { changeSave, changeUpdatePerfil } = slicePerfil.actions;
export const selectedPerfil = (state) => state;
export default slicePerfil.reducer;
