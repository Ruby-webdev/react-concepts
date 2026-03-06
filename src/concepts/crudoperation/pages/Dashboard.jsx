import React from 'react'
import { CiSearch } from 'react-icons/ci'
import images from "../../../assets/cutecat.jpg";
import { VscBellDot } from 'react-icons/vsc';
import { BsFillMoonFill } from 'react-icons/bs';
import Leftbar from '../components/dasboardcomponents/Leftbar';
import Rightbar from '../components/dasboardcomponents/Rightbar';

const Dashboard = () => {

    return (
        <div className='h-screen w-screen bg-gray-200'>
            <div className='flex  h-[68px] w-[100%] bg-white shadow-lg p-4 justify-around items-center'>
                <h1 className='text-2xl font-bold w-[25%]'>Dashboard</h1>
                <div className="flex  items-center  border-1 border-fuchsia-800 p-5 w-[50%] h-[60%] rounded-[10px]">
                    <CiSearch /><input type="search" placeholder=' Search for projects' className=' w-[100%] h-auto outline-0 ' />
                </div>
                <div className="flex items-center p-5 w-[15%] flex justify-around items-center ">
                    <span><BsFillMoonFill fill='purple' size={20} /></span>
                    <span><VscBellDot fill='purple' size={20} /></span>
                    <img className='border-1 rounded-full h-[30px] w-[30px] object-cover rounded-full' src={images} alt="cover" />
                </div>
            </div>

            <div className='h-full w-full flex '>
                <Leftbar/>
                <Rightbar/>
            </div>
        </div>
    )
}

export default Dashboard