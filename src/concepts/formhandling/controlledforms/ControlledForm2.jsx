import React, { useState } from 'react'

const ControlledForm2 = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        course: ""
    });

    const { username, email, password, course } = formData

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name] : value})

    }

    const handleForm = (e) => {
        e.preventDefault()

        // ! Write a logic to send the data to backend
        console.log(formData);
        
        setFormData({
            username: "",
            email: "",
            password: "",
            course: ""
        })

    }
    return (
        <div>
            <form onSubmit={handleForm} >
                <div>
                    <input type="text" placeholder='username' name='username' value={username} onChange={handleInput} />
                </div>
                <div>
                    <input type="email" placeholder='email' name='email' value={email} onChange={handleInput}/>
                </div>
                <div>
                    <input type="password" placeholder='password' name='password' value={password} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="">course</label>
                    <select name="course" onChange={handleInput}>
                        {/* <select name="course" value={course}  onChange={handleInput}> */}
                        <option value="" selected={!course ? true : false}></option>
                        <option value=""></option>
                        <option value="B.TECH">B.TECH</option>
                        <option value="MCA">MCA</option>
                        <option value="M.sc">M.sc</option>
                        <option value="M.TECH">M.TECH</option>
                    </select>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default ControlledForm2