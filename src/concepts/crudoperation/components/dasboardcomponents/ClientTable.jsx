import React from 'react'
import images from "../../../../assets/cutecat.jpg";


const ClientTable = () => {

    const clientData = [
        {
            name: "Chandler Jacobi",
            position: "Direct Security Executive",
            amount: "$989.4",
            status: "primary",
            textColor: "text-purple-500 bg-purple-100",
            date: "02/03/2020"
        },
        {
            name: "Monserrat Marquardt",
            position: "Forward Accountability Producer",
            amount: "$471.44",
            status: "danger",
            textColor: "text-red-500 bg-red-100",
            date: "11/29/2019"
        },
        {
            name: "Lonie Wyman",
            position: "Legacy Program Director",
            amount: "$934.24",
            status: "success",
            textColor: "text-green-500 bg-green-100",
            date: "04/03/2020"
        },
        {
            name: "Corine Abernathy",
            position: "Chief factors Planner",
            amount: "$351.28",
            status: "warning",
            textColor: "text-orange-500 bg-orange-100 ",
            date: "06/21/2019"
        },
        {
            name: "Rahul Gandhi",
            position: "member of parliament",
            amount: "$351.28",
            status: "success",
            textColor: "text-green-500 bg-green-100 ",
            date: "07/28/2014"
        }
    ];

    return (
        <div className='h-auto w-full border border-gray-300 rounded-[5px] '>

            <table className='w-full'>

                <thead className='bg-gray-200'>
                    <tr className='border-b border-gray-300'>
                        <th className=' text-left font-normal text-[15px]  p-2'>CLIENT</th>
                        <th className=' text-left font-normal text-[15px]  '>AMOUNT</th>
                        <th className=' text-left font-normal text-[15px]   '>STATUS</th>
                        <th className=' text-left font-normal text-[15px]  '>DATE</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        clientData.map((ele, index) => {
                            return (
                                <tr key={index} className='hover:bg-white border-b border-gray-300 cursor-pointer'>
                                    <td className='font-bold  p-2 flex gap-2  items-center'>
                                        <div className='h-6.25 w-6.25 border rounded-full '>
                                            <img className='h-full w-full object-cover rounded-full' src={images} alt="cover" />
                                        </div>
                                        <div >{ele.name}<p className='font-normal '>{ele.position}</p></div>
                                    </td>
                                    <td >{ele.amount}</td>
                                    <td>
                                        <span className={` ${ele.textColor} px-3 py-1 rounded-full text-sm font-medium border bg-${ele.textColor}`}>
                                            {ele.status}
                                        </span>
                                    </td>
                                    <td >{ele.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ClientTable