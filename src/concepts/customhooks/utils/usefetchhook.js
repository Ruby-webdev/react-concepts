//from here we can create our own hook
//its just a function
//whether try catch block execute or not finally block will be executed

import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url)=>{

    const [urldata,setUrldata] = useState([])
    const[loading,setLoading]= useState(true)
    const [error, setError] = useState("")

    const fdata = async ()=>{
        try {
            const {data} = await axios.get(url)
           setTimeout(()=>{
             setUrldata(data)
             setLoading(false)
           },2000)
        } catch (error) {
            setError(error.message || "something went wrong")
        }
    }

    useEffect(()=>{
        fdata()
    },[url])

    return {loading, urldata, error}
}

export default useFetch