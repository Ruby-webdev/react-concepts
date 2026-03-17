import React, { useReducer } from 'react'

const UseReducerHook = () => {

    const reducer=( state, action)=>{
      switch (action) {
        case "INCRE":
          return state+1;

        case "DECRE":
          return state-1;

        case "RESET":
          return 0;
    
      
        default:
         return state;
      }
      
    }
    const[count,dispatch] = useReducer(reducer,0)
    // console.log(count);
    
  return (
    <div>
      <h1>UseReducerHook</h1>
      <h1>{count}</h1>
      <button onClick={()=> dispatch("INCRE")}>Increment</button>
      <button onClick={()=> dispatch("DECRE")}>Decrement</button>
      <button onClick={()=> dispatch("RESET")}>Reset</button>
    </div>
  )
}

export default UseReducerHook
//to store and update complex data we use usereducer hook 