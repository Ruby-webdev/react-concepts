import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import CardSection from './CardSection'
import ClientTable from './ClientTable'
import axios from 'axios'

const Rightbar = () => {

  //const {data} = axios.get("http://localhost:3000/users")
  const [user, setUser] = useState(null)

  // useEffect(() => {

  //   const fdata = async () => {

  //     try {

  //       const id = localStorage.getItem("id")

  //       // console.log("Token:", token)
  //       // console.log("Logged User ID:", id)
  //       // const { data } = await axios.get("http://localhost:3000/users", { headers: { Authorization: `Bearer ${token}` } })

  //       const { data } = await axios.get("http://localhost:3000/users")
  //       // console.log(data);

  //       const loggedUsers = data.find((e) => e.id === id)
  //       setUser(loggedUsers)
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   }
  //   fdata()

  // }, [])

  return (
    <div className=' w-[85%] p-7 flex flex-col gap-5 bg-[#f3f3f3] '>
      {/* <h1 className='font-bold text-3xl'>My_Profile</h1> */}

      {/* <nav className="h-[68px] w-full flex justify-between items-center p-4 rounded-[10px] bg-[#9b06f8] text-white">
        <span className='flex gap-2 items-center'><FaStar size={20} />Star this project on GitHub</span>
        <span>View more</span>
      </nav> */}

      {/* <CardSection/>
        <ClientTable/> */}


      <div className='h-full w-full p-3 flex justify-around'>

        {
          user ?
            (
              <div className=' h-[350px] w-[300px] rounded-lg bg-white shadow flex flex-col gap-7 p-7 text-2xl  hover:shadow-blue-300 hover:scale-[1.04] transition-all ease-in'>
                <div className=' flex flex-col'>
                  <h1 className='font-bold text-gray-800'>{user.username}</h1>
                  <p className='text-gray-500 text-lg '>{user.email}</p>
                </div>

                <div className=' flex flex-col gap-1 p-1 text-sm'>
                  <h3 className='flex gap-1'><span className='font-semibold'>Age: </span><span className=' font-mono text-gray-700'> {user.age}</span></h3>
                  <h3 className='flex gap-1'><span className='font-semibold'>DOB: </span><span className='font-mono text-gray-700 '> {user.dob}</span></h3>
                  <h3 className='flex gap-1'><span className='font-semibold'>City: </span><span className='font-mono text-gray-700'> {user.city}</span></h3>
                  <h3 className='flex gap-1'><span className='font-semibold'>Gender: </span><span className='font-mono text-gray-700'> {user.gender}</span></h3>
                  <h3 className='flex gap-1'><span className='font-semibold'>Password: </span><span className='font-mono text-gray-700'> {user.password}</span></h3>

                </div>

                {/* <div className=' flex justify-between p-2'>
                  <button className='px-4 py-1.5 cursor-pointer rounded-lg bg-indigo-500 text-white font-serif tracking-wider hover:bg-indigo-600 transition-transform '>Edit</button>
                  <button className='px-4 py-1.5 cursor-pointer rounded-lg bg-red-500 text-white font-serif tracking-wider hover:bg-red-600'>Delete</button>
                </div> */}

              </div>
            )
            : (<p>Loading...</p>)
        }


      </div>
    </div>
  )
}

export default Rightbar