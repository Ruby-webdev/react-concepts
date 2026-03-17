import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:"",
    age:"",
    email:""
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        setUser:(state,action) => {
            state.username = action.payload.username
            state.age = action.payload.age
            state.email = action.payload.email
        },
        resetUser: (state) => {
            state.username =""
            state.age = ""
            state.email =""
        }
    }
})

export const {setUser , resetUser} = loginSlice.actions
export default loginSlice.reducer