import { useRef, useState } from "react"

const UseRefHookHome=()=>{

    // const [text,setText]=useState("sundari")
    // console.log("hii");


    const nameRef=useRef()
    // console.log(nameRef);

    const updateText=()=>{
        nameRef.current.innerText="leela"
    }

    console.log("hiii");
    
    
    
    return(
        <div>
            {/* <h1>{text}</h1>
            <button onClick={()=>setText("leela")}>Update Name</button> */}

            <h1 ref={nameRef}>Sundari</h1>
            <button onClick={updateText}>Update name</button>
        </div>
    )
} 


export default UseRefHookHome