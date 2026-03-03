import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordIcon, setPasswordIcon] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("jwt_token", JSON.stringify("uffuyhuef"))
    navigate("/dashboard")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-fuchsia-100">
      <form
        onSubmit={handleSubmit}
        className="w-[350px] bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400" />
        </div>

        <div className="flex flex-col gap-1 relative">
          <label className="text-gray-600 font-medium">Password</label>

          <input
            type={passwordIcon ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <div
            className="absolute right-3 top-[42px] cursor-pointer" onClick={() => setPasswordIcon(!passwordIcon)}>
            {passwordIcon ? (<AiOutlineEyeInvisible size={20} />) : (<AiOutlineEye size={20} />)}
          </div>

        </div>

        <button type="submit" className="bg-sky-500 text-white font-semibold p-3 rounded-lg hover:bg-sky-600 transition duration-300">Login </button>
        <p className="text-center text-sm text-gray-600 mt-2">Don’t have an account?{" "}<Link to="/signup" className="text-sky-600 font-semibold hover:underline"> Sign up </Link></p>
      </form>
    </div>
  );
};

export default Login;