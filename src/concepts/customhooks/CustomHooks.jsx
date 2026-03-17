import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import useFetch from './utils/usefetchhook'

const CustomHooks = () => {
    const{loading,urldata,error} = useFetch("https://fakestoreapi.com/products")
    if(error){
        toast.error(error,{position:"top-center"})
        return
    }
    console.log(error);
    
  return (
    <div>
        {
            loading ? <h1>Loading...</h1> : urldata.map((product,index)=>{
              return  <p key={index}>{product.title}</p>
            })
        }
    </div>
  )
}

export default CustomHooks