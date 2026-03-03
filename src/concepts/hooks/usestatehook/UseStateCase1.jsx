import { useState } from "react"

const UseStateCase1=()=>{

    const[count,setCount]=useState(0)

    // const updateCount=()=>{
    //     setCount(count+1)
    // }

    // updateCount()

    return(
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}


export default UseStateCase1