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
  },
});

export const { changeSave } = slicePerfil.actions;
export const selectedPerfil = (state) => state;
export default slicePerfil.reducer;
