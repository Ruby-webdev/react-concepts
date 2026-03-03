import { useState } from "react"
import Child1 from "./Child1";


const Parent1=()=>{

    const [count,setCount]=useState(0)
    console.log("parent");
    
    return(
        <div>
           <h1>{count} in parent</h1>
           <button onClick={()=>{setCount(count+1)}}>update in Parent</button>
           <hr />
           <Child1 count={count} setCount={setCount}/>
        </div>
    )
}


export default Parent1