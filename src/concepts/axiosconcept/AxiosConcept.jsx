import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosConcept = () => {

    const[products, setProducts] =useState([])

    const fdata= async ()=>{
        const {data} = await axios.get("https://fakestoreapi.com/products")
        console.log(data);
        setProducts(data)
        
    }
    useEffect(()=>{
        fdata()
    },[])
  return (
    <div>
        <h1>AxiosConcept</h1>
        {
            products.length===0 ? <h1>Loading...</h1> : products.map((ele,index)=>{
                return(
                    <h3 key={index}>{ele.title}</h3>
                )
            })
        }
    </div>
  )
}

export default AxiosConcept