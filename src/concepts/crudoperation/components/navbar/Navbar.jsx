import React, { useContext, useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoHelpBuoyOutline, IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { GlobalContextApi } from "../../context/ContextApi";
import axios from "axios";

const Navbar = () => {

  const { currentUser } = useContext(GlobalContextApi)

  const navlist = [
    {
      text: "home",
      path: "/",
      icon: <IoHome />,
    },
    {
      text: "about",
      path: "/about",
      icon: <CiCircleInfo />,
    },
    {
      text: "contact",
      path: "/contact",
      icon: <MdEmail />,
    },
    {
      text: "help",
      path: "/help",
      icon: <IoHelpBuoyOutline />,
    },
  ];


  
  return (
    <nav className="w-full h-19.5 bg-blue-400 text-gray-200 flex items-center justify-around">
      <div className="w-10% h-full flex items-center justify-center text-3xl font-extrabold tracking-widest">
        Logo
      </div>
      <ul className="w-[50%] h-full flex items-center justify-around capitalize">
        {navlist.map((ele, index) => {
          return (
            <li key={index} className="p-5 rounded-lg cursor-pointer  text-2xl  flex items-center gap-3">
              {ele.icon}
              <NavLink to={ele.path}>{ele.text}</NavLink>
            </li>
          );
        })}
      </ul>

      {/* <div className="w-[10%] h-full flex items-center justify-center rounded-full">
        <button className="bg-white text-black hover:text-white hover:bg-blue-500 px-5 py-3 rounded-lg font-semibold"><Link to="/login">{currentUser? currentUser.username.slice(0,1) : <h3>Login</h3>}</Link></button>
      </div> */}

      <div className='w-[10%] h-full flex items-center justify-center'>
       {     !currentUser?<button className="px-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition duration-300 shadow-md">
            <Link to="/login">Login</Link>
        </button>: <h1 className='text-2xl capitalize font-bold  shadow-lg rounded-full h-[30px] w-[30px] flex items-center justify-center p-5 bg-white text-blue-500'>{currentUser.username.slice(0,1)}</h1> }
     </div>

    </nav>
  );
};

export default Navbar;