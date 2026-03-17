import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Zoom } from 'react-toastify'
import { GlobalContextApi } from '../context/ContextApi'

const Login = () => {

  const [formData, setFormdata] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const { setCurrentUser } = useContext(GlobalContextApi)

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormdata({ ...formData, [name]: value })
  }

  // const registrationData = JSON.parse(localStorage.getItem("userData"))


  const handleForm = async (e) => {
    e.preventDefault()
    // console.log(formData);

    if (!formData.email || !formData.password) {
      toast.error("Please fill the fields", { position: "top-center", autoClose: 1000, hideProgressBar: true, transition: Zoom })
      return
    }

    try {
      const { data } = await axios.get("http://localhost:3003/users")
      const user = data.find((u) => u.email === formData.email)

      if (!user) {
        toast.error("Email is not registered")
        return
      }
      if (user.password !== formData.password) {
        toast.error("Invalid password")
        return
      }

      setCurrentUser(user)
      toast.success("Logged in successfully", { position: "top-center", autoClose: 1000, hideProgressBar: true, transition: Zoom })

      //generate token , store the token in localstorage

      const token = "gfiu.gewyk." + user.id
      localStorage.setItem("jwt_token", JSON.stringify(token))

      setFormdata({
        email: "",
        password: ""
      });

      navigate("/dashboard")

    }
    catch (error) {
      toast.error("Server error")
      console.log(error);
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-full max-w-md  bg-white p-8 rounded-xl shadow-lg ">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name='email'
              value={formData.email}
              onChange={handleInput}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name='password'
              value={formData.password}
              onChange={handleInput}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 font-medium hover:underline"> Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login