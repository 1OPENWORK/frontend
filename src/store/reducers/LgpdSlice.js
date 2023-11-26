import { createSlice } from "@reduxjs/toolkit";


export const sliceLGPD = createSlice({
    name: "lgpd",
    initialState: {
        accepty: false
    },
    reducers: {

        changeLGPD(state, {payload}){
            return {...state, accepty: payload.accepty}
        }

    }
})

export const {changeLGPD} = sliceLGPD.actions;
export const selectedLGPD = (state) => state;
export default sliceLGPD.reducer;