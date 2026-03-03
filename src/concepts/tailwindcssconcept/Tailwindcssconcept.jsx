import React from 'react'

const Tailwindcssconcept = () => {
    const arr=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='w-screen h-auto flex flex-wrap gap-25 justify-around p-5 '>
        {/* <h1 className='bg-[#dac95f] text-blue-800 text-[100px] font-extrabold underline uppercase'>Tailwindcssconcept</h1> */}

        {
            arr.map((ele,index)=>{
                return(
                            <div key={index} className='w-[300px] h-[300px] bg-gray-300 border-2 border-red-500 rounded-full  cursor-pointer hover:bg-purple-300 hover:scale-105 transition-all duration-[1s]  flex justify-center items-center  shadow-lg'>{ele}</div>

                )
            })
        }
    </div>
  )
}

export default Tailwindcssconcept