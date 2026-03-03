import React, { useState } from 'react'

const ControlRadioBtn = () => {

    const[formData,setFormData] = useState({
        gender:""
    });

    const handleChange=(e)=>{
        const {name,value}= e.target ;

        setFormData({...formData , [name] : value})
    }

     const handleForm =(e)=>{
        e.preventDefault()
         console.log(formData);
        setFormData({
            gender:""
        })
       
     }
     
  return (
    <div>
        <h1>ControlRadioBtn</h1>
        <form onSubmit={handleForm}>
            <input type="radio" name='gender' value='Male' checked={formData.gender === "Male"} onChange={handleChange} />Male
            <input type="radio" name='gender' value='Female' checked={formData.gender === "Female"}onChange={handleChange} /> Female
            <input type="radio" name='gender' value='Others' checked={formData.gender === "Others"} onChange={handleChange} /> Others
            <button>submit</button>
        </form>
    </div>
  )
}

export default ControlRadioBtn