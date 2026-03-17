import { configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features2/counterslice2"

export const stores= configureStore({
    reducer:{
        counting : counterReducer
    }
}) 