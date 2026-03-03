import React, { useState } from 'react'

const ControlledFormHandling = () => {

    const[formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        phoneno:""
    })

    const{username,email,password,phoneno}=formData

    const[errors,setErrors]=useState(null)
    
    const handleInput=(e)=>{
        const{name,value}=e.target
        setErrors(null)
        setFormData({...formData,[name]: value})  
    }

    const handleForm=(e)=>{
        e.preventDefault();
        if(!username || !email || !password || !phoneno){
            setErrors(true)
            return
        }
        // console.log(formData);

        setFormData({
            username:"",
            email:"",
            password:"",
            phoneno:""
        })
        
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <input type="text" placeholder='username' name='username' onChange={handleInput} value={username}/>
            {
                errors ?<p style={{color:"red"}}>Username is required <sub>*</sub></p> : ""
            }
            <input type="email" placeholder='email' name='email' onChange={handleInput} value={email}/>
            {
                errors ? <p style={{color:"red"}}>Email is required <sup>*</sup></p> : ""
            }
            <input type="password" placeholder='password' name='password' onChange={handleInput} value={password} />
             {
                errors ? <p style={{color:"red"}}>Password is required <sup>*</sup></p> : ""
            }
            <input type="number" placeholder='phoneno' name='phoneno' onChange={handleInput} value={phoneno} />
             {
                errors ? <p style={{color:"red"}}>phoneno is required <sup>*</sup></p> : ""
            }
            <button>Submit</button>
           
        </form>

        {/* <h1>{formData.username}</h1>
        <h1>{formData.email}</h1>
        <h1>{formData.password}</h1>
        <h1>{formData.phoneno}</h1> */}

        <h1>{username}</h1>
        <h1>{email}</h1>
        <h1>{password}</h1>
        <h1>{phoneno}</h1>
    </div>
  )
}

export default ControlledFormHandling