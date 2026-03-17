import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../../../axiosconcept/axiosinstence'

const Profile = () => {
  const { userId } = useParams()
  const [user, setUser] = useState("")
  const navigate = useNavigate()

  const fdata = async () => {
    const { data } = await axiosInstance.get(`/users/${userId}`)
    setUser(data)
  }

  useEffect(() => {
    fdata()
  }, [])

  const deleteuser = async () => {
    const { data } = await axiosInstance.delete(`/users/${userId}`)
    localStorage.removeItem("jwt_token")
    navigate("/")
    
  }

  return (
    <div className='w-full h-full bg-blue-200 flex items-center justify-center'>
      <div className='w-85 h-85 rounded-3xl bg-white shadow-lg'>

        <div className='p-5 flex flex-col items-center justify-center'>

          <div className='w-35 h-35 rounded-full border-4 border-blue-200 flex items-center justify-center text-2xl  font-bold'>
            PROFILE
          </div>

          <div className='mt-4 text-center'>
            <h1 className='text-3xl font-bold'>{user.username}</h1>
            <p className='text-gray-600 mt-1'>Age: {user.age}</p>
            <p className='text-gray-600'>Email: {user.email}</p>
          </div>

          <div className='flex gap-4 mt-3 '>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer'>
              <Link to={`/dashboard/updateprofile/${userId}`}>Update Profile</Link>
            </button>

            <button onClick={deleteuser} className='px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer'>
              Delete Profile
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile