import React, { useEffect, useState } from 'react'
import Table from './Table'
import { toast } from 'react-toastify'

const UseEffectTask1 = () => {

    const[products, setProducts]=useState([])

    const fdata= async ()=>{
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()

            // const sortedData= data.sort((a,b)=>{return(a.price - b.price)});
            // setProducts(sortedData)
            setProducts(data)
            
        } catch (error) {
            toast.error("Failed to load your data !!!")
        }
    }

    const deleteProduct=(id)=>{
            const filterProducts=products.filter((ele)=> ele.id !== id)
            setProducts(filterProducts)
        }
    // console.log(fdata);
    
    useEffect(()=>{
        fdata()
    },[])


  return (
    <div>
       
        {
            products.length ===0 ? <h1>Loading.......</h1> : <Table data={products} deleteProudcts ={deleteProduct}/>
        }
        
    </div>
  )
}

export default UseEffectTask1