import { createSlice } from "@reduxjs/toolkit";

export const sliceInfoJob = createSlice({
  name: "jobInfo",
  initialState: {
    dados: [],
  },
  reducers: {
    changeDadosJobInfo(state, { payload }) {
      return { ...state, dados: payload.dados };
    },
  },
});

export const { changeDadosJobInfo } = sliceInfoJob.actions;
export const selectedInfoJob = (state) => state;
export default sliceInfoJob.reducer;
