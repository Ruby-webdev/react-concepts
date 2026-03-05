import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoHelpBuoyOutline, IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
    <nav className="w-full h-19.5 bg-slate-900 text-gray-200 flex items-center justify-around">
      <div className="w-10% h-full flex items-center justify-center text-3xl font-extrabold">
        Logo
      </div>
      <ul className="w-[50%] h-full flex items-center justify-around capitalize">
        {navlist.map((ele, index) => {
          return (
            <li className="p-5 rounded-lg cursor-pointer  text-2xl  flex items-center gap-3">
              {ele.icon}
              <NavLink to={ele.path}>{ele.text}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className="w-[10%] h-full flex items-center justify-center">
        <button className="bg-red-300 px-5 py-3 rounded-lg"><Link to="/login">Login</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;