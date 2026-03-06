import React from 'react'
import Cards from './Cards'
import { FaShoppingCart, FaUsers } from 'react-icons/fa'
import { LiaMoneyCheckAltSolid } from 'react-icons/lia'
import { RiMessage2Fill } from 'react-icons/ri'

const CardSection = () => {

    const cardData =[
        {
            title:"Total Clients",
            value:"6389",
            Icon: FaUsers,
            bgColor:"bg-orange-100",
            iconColor:"orange"

        },
        {
            title:"Account Balance",
            value:"$ 46,760.89",
            Icon: LiaMoneyCheckAltSolid,
            bgColor:"bg-green-100",
            iconColor:"green"
        },
        {
            title:"New Sales",
            value:"376",
            Icon: FaShoppingCart ,
            bgColor:"bg-blue-100",
            iconColor:"blue"
        },
        {
            title:"Pending Contacts",
            value:"35",
            Icon: RiMessage2Fill,
            bgColor:"bg-purple-100",
            iconColor:"purple"
        }

    ]

  return (
    <div className='h-[25%] w-full flex justify-between items-center gap-6'>

        {
            cardData.map((ele,index)=>{
                return(
                    <Cards key={index} title={ele.title} value={ele.value}  Icon={ele.Icon} bgColor={ele.bgColor} iconColor={ele.iconColor}/>
                )
            })
        }
    </div>
  )
}

export default CardSection