import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"
import loginReducer from "../features/loginSlice"


export const store = configureStore({
    reducer:{
        counter : counterReducer,
        login : loginReducer
    }
})