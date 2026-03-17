import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../../../axiosconcept/axiosinstence'

const AddNotes = () => {
  const {userId} = useParams()

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleForm = async (e) => {
    e.preventDefault()
    // console.log(formData);

    //api call
    try {
      const{data} = await axiosInstance.post("/notes",{...formData,userId })
      toast.success("Notes added")

      setFormData({
      title: "",
      description: "",
      tags: ""
    })

    navigate(`/dashboard/allnotes/${userId}`)
    } catch (error) {
      toast.error("Something went wrong")
      
    }


  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Note</h2>

      <form onSubmit={handleForm} className="space-y-4">
        {/* Note Title */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter note title"
            name='title'
            value={formData.title}
            onChange={handleInput}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Note Description */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter note description"
            rows="4"
             name='description'
            value={formData.description}
            onChange={handleInput}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="tags">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            placeholder="Enter tags separated by commas"
            name='tags'
            value={formData.tags}
            onChange={handleInput}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
           <Link to={`/dashboard/allnotes/${userId}`}>Cancel</Link>  
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNotes