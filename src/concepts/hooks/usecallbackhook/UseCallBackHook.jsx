import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {

    const[count, setcount] = useState(0)
    console.log("parent");

    const deleteUser = useCallback(()=>{
        console.log("user deleted");
        
    },[])


    //value based 

    // let a= 20
    // let b=a
    // b+=1
    // console.log(b);
    // console.log(a);

    //reference based

    // let a= [1,2,3]
    // let b =a
    // let b= JSON.parse(JSON.stringify(a))  or
    
    // let b= [...a, 10]
    // b.push(10)
    // console.log(b);
    // console.log(a);
    
    
    
    // in react functions are non-primitive so it will recreate every time it will change the address so to stop that we use usecallback hook with one empty dependency or with dependency ...it will return memorized function address
  return (
    <div>
        <h1>UseCallBackHook</h1>
        <p>{count}</p>
        <button className='p-5 bg-amber-400' onClick={()=>{setcount(count+1)}}>Update</button>
        <hr />
        {/* <Child data="leela"/> */}
        <Child data={deleteUser}/>
        
    </div>
  )
}

export default UseCallBackHook