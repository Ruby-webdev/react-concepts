import React, { useState } from 'react'
import Child from './Child'

const ReactMemo = () => {

    const[count,setCount] = useState(0)
    console.log("parent");
    
  return (
    <div>
        <h1>ReactMemo</h1>
        <p>{count}</p>
        <button className='p-3 border bg-blue-400 text-white cursor-pointer' onClick={()=>{setCount(count+1)}}>Update</button>
        <hr />
        {/* <Child name={count}/> */}
        <Child name="leela"/>
    </div>
  )
}

export default ReactMemo