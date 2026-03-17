import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterslice"
import loginReducer from "../features/loginSlice"
import registerReducer from "../features/registerSlice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        login: loginReducer,
        register: registerReducer
    }
})