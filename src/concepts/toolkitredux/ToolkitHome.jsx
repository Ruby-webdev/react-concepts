import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features2/counterslice2'

const ToolkitHome = () => {
    const res = useSelector((state)=>state.counting)
    const dispatch = useDispatch()
    // console.log(res);
    
  return (
    <div>
        <h1>ToolkitHome</h1>
        <h1>{res}</h1>

        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default ToolkitHome