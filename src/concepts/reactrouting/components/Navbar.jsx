import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[78px] w-screen bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-around p-4 text-white'>
        <div className='h-full w-19.5 flex items-center justify-center p-3 capitalize  font-serif font-extrabold tracking-widest text-4xl'><Link>Logo</Link></div>
        <div className=' h-full w-[40%] font-semibold'>

            <ul className='flex justify-around items-center p-2 cursor-pointer'>
                <li className='hover:underline text-white  capitalize'><Link to="/home">home</Link></li>
                <li className='hover:underline text-white capitalize '><Link to="/about">about</Link></li>
                <li className='hover:underline text-white  capitalize'><Link to="/Projects">projects</Link></li>
                <li className='hover:underline text-white  capitalize'><Link to="/contact">contact</Link></li>
            </ul>
        </div>
        <div className=' px-7 py-3 rounded-lg bg-amber-200 cursor-pointer'><Link to="/login">Login</Link></div>
    </div>
  )
}

export default Navbar