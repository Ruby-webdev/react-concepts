import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser, setUser } from '../features/loginSlice'

const LoginPage = () => {

    const user = useSelector((state) => state.login)
    const dispatch = useDispatch()

    const [formData, setFormdata] = useState({
        username: "",
        age: "",
        email: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormdata({ ...formData, [name]: value })
    }
    const handleForm = (e) => {
        e.preventDefault()
        dispatch(setUser(formData))

        setFormdata({
            username: "",
            age: "",
            email: ""
        })
    }

    return (
        <div className='h-screen w-full flex items-center justify-center gap-10 bg-gray-200'>
            <form onSubmit={handleForm} className='h-[50%] w-[25%] bg-cyan-600 p-5 text-white flex flex-col space-y-4 shadow-lg rounded-2xl'>
                <h1 className='text-center font-bold text-3xl'>Login</h1>
                <input className='text-white border p-2 w-full rounded-lg' type="text" placeholder='Enter Username' name='username' value={formData.username} onChange={handleInput} />
                <input className='text-white border p-2 w-full rounded-lg' type="email" placeholder='Enter email' name='email' value={formData.email} onChange={handleInput} />
                <input className='text-white border p-2 w-full rounded-lg' type="text" placeholder='Enter age' name='age' value={formData.age} onChange={handleInput} />
                <button className='border rounded-lg p-3 cursor-pointer'>Submit</button>
            </form>

            <div className=' p-5 h-[50%] w-[25%] rounded-2xl bg-white shadow-lg'>
                <h3 className='text-2xl text-cyan-900 font-bold mb-5'>User Details</h3>
                <p> Name: {user.username}</p>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>

                <button onClick={() => dispatch(resetUser())} className='p-2 border rounded-lg cursor-pointer mt-5'>Logout</button>

            </div>
        </div>
    )
}

export default LoginPage