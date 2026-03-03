import React, { useState } from 'react'
import "./controlTask1.css";
import { TbGhost2Filled, TbLockPassword } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { CiUser } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const ControlFormHandleTask1 = () => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false

    });

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setErrors({})
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
    }

    const validate = () => {
        let newErrors = {};

        if (!formData.firstname.trim()) {
            newErrors.firstname = "Firstname is required"
        }
        if (!formData.lastname.trim()) {
            newErrors.lastname = "Lastname is required"
        }
        if (!formData.username.trim()) {
            newErrors.username = "Username is required"
        }
        if (!formData.email) {
            newErrors.email = " Enter Email"
        }
        if (!formData.password.trim()) {
            newErrors.password = " Enter Password"
        }
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmation = "Please confirm your password"
        }
        else if (formData.password !== formData.confirmPassword) {
            // newErrors.confirmation = "Passwords do not match"
            toast.error("Invalid Password")
        }
        if (!formData.terms) {
            newErrors.terms = "Accept the Terms & Policy"
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // if (!formData.firstname) {
        //     alert("Enter the firstname")
        //     return
        // }
        // if( !formData.lastname){
        //     alert("Enter the lastname")
        //     return
        // }
        // if( !formData.username){
        //     alert("Enter the username")
        //     return
        // }
        // if( !formData.password){
        //     alert("Enter the password")
        //     return
        // }
        // if( !formData.confirmPassword){
        //     alert("Password confirmation is required")
        //     return
        // }
        // if (formData.password !== formData.confirmPassword) {
        //     alert("Password do not match")
        //     return
        // }
        // if (!formData.terms) {
        //     alert("Please accept Terms & Conditions")
        //     return
        // }

        if (!formData.firstname && !formData.lastname && !formData.username && !formData.email && !formData.password && !formData.confirmPassword && !formData.terms) {
            toast.error("Please fill all the details")
            return;
        }

        const validations = validate();
        if (Object.keys(validations).length > 0) {
            setErrors(validations)
        }
        else {
            // setErrors({});
            toast.success(" Submitted Successfully")
            setFormData({
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                terms: false
            });
        }
        console.log(formData);
    }

    return (
        <div className='outer'>
            <div className="box1">
                <div className="left">
                    <div className="left-1">
                        <div className="ghost">
                            <TbGhost2Filled size={160} />
                            <p>Ruby</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sunt.</p>
                        <button>GET STARTED</button>
                    </div>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <p>Create your account.Its free and only takes a minute</p>

                    <form onSubmit={handleSubmit}>

                        <div className="input-icon">
                            <CgProfile />
                            <input type="text" placeholder='Firstname' name='firstname' value={formData.firstname} onChange={handleChange} />
                        </div>
                        {
                            errors.firstname && (<p className='error'>{errors.firstname}</p>)
                        }

                        <div className="input-icon">
                            <CiUser />
                            <input type="text" placeholder='lastname' name='lastname' value={formData.lastname} onChange={handleChange} />
                        </div>
                        {
                            errors.lastname && (<p className='error'>{errors.lastname}</p>)
                        }

                        <div className="input-icon">
                            <FaRegUser />
                            <input type="text" placeholder='Username' name='username' value={formData.username} onChange={handleChange} />
                        </div>
                        {
                            errors.username && (<p className='error'>{errors.username}</p>)
                        }

                        <div className="input-icon">
                            <MdEmail />
                            <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                        </div>
                        {
                            errors.email && (<p className='error'>{errors.email}</p>)
                        }

                        <div className="input-icon">
                            <TbLockPassword />
                            <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
                        </div>
                        {
                            errors.password && (<p className='error'>{errors.password}</p>)
                        }

                        <div className="input-icon">
                            <RiLockPasswordLine />
                            <input type="password" placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
                        </div>
                        {
                            errors.confirmation && (<p className='error'> {errors.confirmation}</p>)
                        }

                        <br />

                        <div className="terms">
                            <input type="checkbox" name='terms' checked={formData.terms} onChange={handleChange} />
                            <label htmlFor="terms">Accept the tTerms of Use and Privacy Policy</label>
                        </div>
                        {
                            errors.terms && (<p className='error'>{errors.terms}</p>)
                        }

                        <div className="para">
                            <p>Already an account ?
                                <a href="#">SignIn</a>
                            </p>
                            <button type='submit'>SIGN UP</button>
                        </div>

                        <div className="p">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ControlFormHandleTask1