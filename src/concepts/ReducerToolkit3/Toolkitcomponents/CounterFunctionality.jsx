import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/counterSlice'

const CounterFunctionality = () => {
    const result = useSelector((state)=> state.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>CounterFunctionality</h1>
        <h1>{result}</h1>
        <button onClick={()=>dispatch(increment())} className='border'>Increment</button>
        <button onClick={()=>dispatch(decrement())} className='border'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='border'>Reset</button>
    </div>
  )
}
export default CounterFunctionality