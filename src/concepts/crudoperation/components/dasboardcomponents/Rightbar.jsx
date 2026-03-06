import React from 'react'
import { FaStar } from 'react-icons/fa'
import CardSection from './CardSection'
import ClientTable from './ClientTable'

const Rightbar = () => {
  return (
    <div className=' w-[85%] p-7 flex flex-col gap-5 bg-[#f3f3f3] '>
        <h1 className='font-bold text-2xl'>Dashboard</h1>
        <nav className="h-[68px] w-full flex justify-between items-center p-4 rounded-[10px] bg-[#9b06f8] text-white">
            <span className='flex gap-2 items-center'><FaStar size={20} />Star this project on GitHub</span>
            <span>View more</span>
        </nav>

        <CardSection/>
        <ClientTable/>
    </div>
  )
}

export default Rightbar