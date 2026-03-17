import { createSlice } from "@reduxjs/toolkit";


const initialState= {
     username:"",
    email:"",
    password:"",
    age:"",
    gender:""
}
const registerSlice = createSlice({
   name:"register",
   initialState,
   reducers:{
    handleinput:(state,action)=>{
        return {...state, ...action.payload}
    },
    handlesubmit:(state)=>{
        console.log("registration done");
        return initialState
    },
    resetRegister:()=>{
        return initialState
    }
   }
})


export const{handleinput,handlesubmit,resetRegister} = registerSlice.actions 
export default registerSlice.reducer
