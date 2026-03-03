import { useState } from "react"

const UseStateHook=()=>{

    const [count,setCount]=useState(0)

    const updateValue=()=>{
        setCount(count+1)
    }

    const sub=()=>{
        setCount(count-1)
    }

    const reset=()=>{
        setCount(0)
    }

    console.log("hello");
    

    return(
        <div> 
            <h1>{count}</h1>
            <button onClick={updateValue}> +</button>
            <button onClick={sub}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}


export default UseStateHook