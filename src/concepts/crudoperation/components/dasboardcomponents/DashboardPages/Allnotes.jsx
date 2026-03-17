import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import NoteCard from './NoteCard'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../../../axiosconcept/axiosinstence'

const Allnotes = () => {
  const [allnotes, setAllnotes] = useState(null)
  const { userId } = useParams()

  const fetchAllnotes = async () => {
    try {
      const { data } = await axiosInstance.get("/notes")
      const filterData = data.filter((note) => note.userId === userId)
      
      // console.log(filterData);
      setAllnotes(filterData)

    } catch (error) {
      toast.error("Something went wrong")
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllnotes()
  }, [])

  const deleteNote = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`/notes/${id}`)
      // console.log(data);
      
      // setAllnotes(prev => prev.filter(note => note.id !== id)) or
      
      fetchAllnotes()
      toast.success("Note deleted Successfully")

    } catch (error) {
      console.log("Oops !! something went wrong");

    } 

  }

  return (
    <div className='w-full h-auto flex flex-wrap'>
      {
        allnotes?.map((note, index) => {
          return (
            <Fragment key={index}>
              <NoteCard data={note} deletenote={deleteNote} />
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Allnotes