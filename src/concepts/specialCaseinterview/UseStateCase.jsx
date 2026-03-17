import React, { useState } from 'react'

const UseStateCase = () => {
    const[count,setCount]= useState(0)
    const[name,setName] = useState("")
    const[user,setUser] =useState({name:"john"})

    user.name="leela"
    

    const updateCount = ()=>{
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)

        // setCount((prevState)=>prevState+1)
        // setCount((prevState)=>prevState+1)
        // setCount((prevState)=>prevState+1)

        setUser(user)
        // same reference will be stored coz here the value is same i.e 
        //  setUser({...user})
         // rerender here coz everytime it is changing the reference
    }
    console.log(user);
    console.log("hii");
    
    
  return (
    <div>
        <h1>UseStateCase</h1>
        <h1>{count}</h1>
        <button onClick={updateCount} className='p-3 border'>update</button>
    </div>
  )
}

export default UseStateCase