import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'WebSocket',
    initialState: {
        id: ''
    },
    reducers: {

        changeOn(state, {payload}){
            return {...state, id: payload.id}
        },

        changeOff(state){
            return {...state, id: ''}
        }
    },
})

export const {changeOn, changeOff} = slice.actions;
export const selectedWebSocket = state => state;
export default slice.reducer;