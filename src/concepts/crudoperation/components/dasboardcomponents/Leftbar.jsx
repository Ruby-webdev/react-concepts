import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiPowerButton } from 'react-icons/gi'
import { ImFilesEmpty } from 'react-icons/im'
import { IoPieChartSharp } from 'react-icons/io5'
import { LiaWpforms } from 'react-icons/lia'
import { LuWalletCards } from 'react-icons/lu'
import { MdOutlineTableRows } from 'react-icons/md'
import { PiStarFourFill } from 'react-icons/pi'
import { RiArrowDropDownLine, RiPagesFill } from 'react-icons/ri'

const Leftbar = () => {
    return (
        <div className='h-full w-[15%] bg-white shadow-md p-4 flex flex-col gap-5'>
            <div className='h-full w-full flex flex-col'>
                <ul className=' h-full flex flex-col gap-7 pt-5'>
                    <div className='flex items-center gap-2'><AiOutlineHome size={20} /><li className=' font-bold hover:text-purple-600 cursor-pointer'>Dashboard</li></div>
                    <div className='flex items-center gap-2'><LiaWpforms size={20} /><li className=' hover:text-purple-600 cursor-pointer'>Forms</li></div>
                    <div className='flex items-center gap-2'><LuWalletCards size={20} /><li className=' hover:text-purple-600 cursor-pointer'>Cards</li></div>
                    <div className='flex items-center gap-2'><IoPieChartSharp size={20} /><li className='hover:text-purple-600 cursor-pointer'>Charts</li></div>
                    <div className='flex items-center gap-2'><GiPowerButton size={20} /><li className='hover:text-purple-600 cursor-pointer'>Buttons</li></div>
                    <div className='flex items-center gap-2'><ImFilesEmpty size={20} /> <li className='hover:text-purple-600 cursor-pointer'>Modals</li></div>
                    <div className='flex items-center gap-2'><MdOutlineTableRows size={20} /><li className='hover:text-purple-600 cursor-pointer'>Tables</li></div>
                    <div className='flex items-center gap-2'><RiPagesFill size={20} /><li className='hover:text-purple-600 cursor-pointer '>Pages</li><RiArrowDropDownLine className='ml-10 ' size={30} /></div>
                    <button className='cursor-pointer p-2  rounded-[7px] bg-[#9b06f8] text-white flex gap-2 items-center justify-center' type='submit'>Create account <PiStarFourFill size={15} fill='white' /></button>
                </ul>
            </div>
        </div>
    )
}

export default Leftbar