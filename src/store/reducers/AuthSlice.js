import { createSlice } from "@reduxjs/toolkit";


export const sliceAuth = createSlice({
    name: "auth",
    initialState: {
        token: ''
    },
    reducers: {

        changeActiveToken(stateAuth, {payload}){
            return {...stateAuth, token: payload.token}
        }

    }
})

export const {changeActiveToken} = sliceAuth.actions;
export const selectedAuth = (stateAuth) => stateAuth;
export default sliceAuth.reducer;