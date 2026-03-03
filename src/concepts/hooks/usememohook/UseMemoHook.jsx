import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
     const [count, setCount]= useState(0)

    //will take more time and memory to load or process the execution ---> expensive reloading
    // reactMemo memorize the component with prev props value, if it changes then only it allows the child to re-render otherwise it does not allows the child to re-render
    // useMemo hook takes a function with empty dependency as argument and prevents the expensive reloading and returns a value,  memorize the prev function return value

    const expensiveCalculation =useMemo(()=>{
        let sum =0;
        for(let i=0; i<1000000000; i++){
            sum+=i;
        }
        return sum
    },[])
    console.log(expensiveCalculation);
    
  return (
    <div>
        <h1>UseMemoHook</h1>
        <h1 className='text-6xl'>{count}</h1>
        <button className='py-3 px-10 rounded-full bg-amber-300 cursor-pointer' onClick={()=>{setCount(count+1)}}>Update</button>
    </div>
  )
}

export default UseMemoHook