import { createSlice } from "@reduxjs/toolkit";

const initialState=0
const counterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state) =>{return state+5},
        decrement: (state) =>{return state-1},
        reset: (state) =>{return 0}
    }
})

export default counterSlice.reducer
export const {increment,decrement,reset} = counterSlice.actions 