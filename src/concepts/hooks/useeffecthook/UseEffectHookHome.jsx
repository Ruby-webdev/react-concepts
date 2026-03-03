import React, { useEffect, useState } from 'react'

const UseEffectHookHome = () => {

    const [count,setCount] = useState(0)
    const[val, setVal]= useState(10)

    const fdata=()=>{
        console.log("fdata function");
        
    }

    // fdata()

    // useEffect(()=>{
    //     fdata()
    // } , [])

    // useEffect(()=>{ }, [count])
    useEffect(()=>{
      fdata()
    })

  return (
    <div>
        <h1>UseEffectHookHome</h1>
        <h2>{count}</h2>
        <p>{val}</p>
        <button onClick={()=>{setCount(count +1)}}>Update</button>
        <button onClick={()=>{setVal(val+10)}}>Update val</button>
    </div>
  )
}

export default UseEffectHookHome