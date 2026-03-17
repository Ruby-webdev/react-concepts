import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
    const regesteredData= useSelector((state)=>state.register)
    const dispatch = useDispatch()
  return (
    <div>
        <form >
            <input type="text" placeholder='enter your name'  />
            <input type="email" placeholder='enter your email' />
            <input type="text"placeholder='enter age' />
            <input type="password"placeholder='enter password' />
            <input type="text"placeholder='enter gender' />
        </form>

    </div>
  )
}

export default Register