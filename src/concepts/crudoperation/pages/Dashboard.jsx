import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { MdNoteAdd, MdOutlineBrowserUpdated } from 'react-icons/md';
import { GiPowerButton } from 'react-icons/gi';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { GlobalContextApi } from '../context/ContextApi';
import axios from 'axios';

const Dashboard = () => {

    const token = JSON.parse(localStorage.getItem("jwt_token"))
    const id = token?.split(".")[2]

    // console.log(id);

    const dashboard = [
        { text: "Dashboard", path: "/dashboard", icon: <AiOutlineHome /> },
        { text: "Profile", path: `/dashboard/profile/${id}`, icon: <FaUserCircle /> },
        // { text: "Update Profile", path: `/dashboard/updateprofile/${userId}`, icon: <CgProfile /> },
        { text: "Add Notes", path: `/dashboard/addnotes/${id}`, icon: <MdNoteAdd /> },
        { text: "All Notes", path: `/dashboard/allnotes/${id}`, icon: <MdOutlineBrowserUpdated /> },
    ];

    const { setCurrentUser } = useContext(GlobalContextApi)
    const navigate = useNavigate()


    const fdata = async (params) => {
        if (!id) return
        const { data } = await axios.get(`http://localhost:3003/users/${id}`)
        setCurrentUser(data)
    }

    useEffect(() => {
        fdata();
    }, [])


    return (
        <div className='h-screen w-screen bg-gray-200 flex'>

            <div className='h-full w-[15%] bg-white shadow-md p-4 flex flex-col justify-between'>
                <ul className='flex flex-col gap-3'>
                    {dashboard.map((ele, index) => (
                        <li key={index}>
                            <NavLink
                                to={ele.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded hover:bg-purple-100 ${isActive ? "text-purple-600 font-bold" : ""}` }>{ele.icon} {ele.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => {
                        localStorage.removeItem("jwt_token");
                        setCurrentUser(null)
                        // window.location.href = "/login";
                        navigate("/")

                    }}
                    className='cursor-pointer p-2 rounded bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center gap-1'
                >
                    <GiPowerButton /> Log Out
                </button>

            </div>

            <div className='h-full w-[85%] bg-amber-400'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard