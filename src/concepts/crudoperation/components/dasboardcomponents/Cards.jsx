import React from 'react'

const Cards = ({ title, value,Icon, iconColor,bgColor}) => {
  return (
   <div className='border-1 border-gray-300 h-[104px] w-[280px] p-2 bg-white rounded-[5px] flex'>

      <div className="w-[35%] h-[100%] flex items-center justify-center">
        <div className={` rounded-full h-[50px] w-[50px] flex items-center justify-center  ${bgColor}`}><Icon color={iconColor} size={23} /></div>
      </div>

      <div className=" h-[100%] w-[65%] flex flex-col justify-center ">
        <h4 className='font-mono'>{title}</h4>
        <h2 className='font-bold'>{value}</h2>
      </div>

    </div>
  )
}

export default Cards