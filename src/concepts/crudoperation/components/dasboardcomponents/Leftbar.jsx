import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaUserCircle } from 'react-icons/fa'
import { GiPowerButton } from 'react-icons/gi'
import { ImFilesEmpty } from 'react-icons/im'
import { IoPieChartSharp } from 'react-icons/io5'
import { LiaWpforms } from 'react-icons/lia'
import { LuWalletCards } from 'react-icons/lu'
import { MdNoteAdd, MdOutlineBrowserUpdated, MdOutlineTableRows } from 'react-icons/md'
import { PiStarFourFill } from 'react-icons/pi'
import { RiArrowDropDownLine, RiPagesFill } from 'react-icons/ri'
import { TbUserEdit } from 'react-icons/tb'
import { NavLink, Outlet } from 'react-router-dom'

const Leftbar = () => {

    const dashboard = [
        {
            text: "Dashboard",
            path: "/dashboard",
            icon: <AiOutlineHome />
        },
        {
            text: "Profile",
            path: "/dashboard/profile",
            icon: <FaUserCircle />
        },
        {
            text: "Update Profile",
            path: "/dashboard/updateprofile",
            icon: <CgProfile />
        },
        {
            text: "Add notes",
            path: "/dashboard/addnotes",
            icon: <MdNoteAdd />
        },
        {
            text: "Update notes",
            path: "/dashboard/updatenotes",
            icon: <MdOutlineBrowserUpdated />
        }
    ]


    return (
        <div className='h-full w-[15%] bg-white shadow-md p-4 flex flex-col gap-5'>
            <div className='h-full w-full flex flex-col'>
                <ul className=' h-[80%] flex flex-col gap-5 pt-5 ml-5 bg-radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%) '>
                    {/* <div className='flex items-center gap-2'><AiOutlineHome size={20} /><li className=' font-bold hover:text-purple-600 cursor-pointer text-2xl'>My_Profile</li></div>
                    <div className='flex items-center gap-2'><LiaWpforms size={20} /><li className=' hover:text-purple-600 cursor-pointer'>Update profile</li></div>
                    <div className='flex items-center gap-2'><LuWalletCards size={20} /><li className=' hover:text-purple-600 cursor-pointer'>Add Notes</li></div>
                    <div className='flex items-center gap-2'><IoPieChartSharp size={20} /><li className='hover:text-purple-600 cursor-pointer'>Update Notes</li></div> */}

                    {
                        dashboard.map((ele, index) => {
                            return (
                                <li key={index + 1} className='h-full pt-5 gap-10 flex items-center'>
                                    <NavLink to={ele.path} className=' flex gap-2 items-center'>{ele.icon}{ele.text}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className='w-full h-25 flex justify-center items-center'> <button className='cursor-pointer p-2  rounded-[7px] bg-blue-500 text-white hover:bg-blue-600 flex gap-1 items-center justify-center h-auto w-[70%]' type='submit'>Log Out </button></div>
            </div>
            <Outlet />
        </div>
    )
}

export default Leftbar