import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    username:"",
    age:"",
    email:""
}
const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        handleinput:(state,action)=>{
            return{...state,...action.payload}
        },
        loginsubmit:(state)=>{
            //write backend logic to submit the form
            console.log("login done");
            return initialState
            
        },
        resetform:()=>{
            return initialState
        }
    }
})

export const {handleinput,loginsubmit,resetform} = loginSlice.actions
export default loginSlice.reducer