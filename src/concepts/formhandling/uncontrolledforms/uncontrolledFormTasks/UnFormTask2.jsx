import "./unformtask2.css";
import { useRef } from "react";
import { toast } from "react-toastify";
import { TbGhost2, TbGhost2Filled, TbLockPassword } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const UnFormTask2 = () => {
    const firstnameRef = useRef(null)
    const lastnameRef = useRef(null)
    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmRef = useRef(null)
    const conditionRef = useRef(null)


    const formhandle = (e) => {
        e.preventDefault()

        const firstName = firstnameRef.current.value
        const lastName = lastnameRef.current.value
        const userName = usernameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmRef.current.value
        const condition = conditionRef.current.checked

        if (!firstName) {
            // firstnameRef.current.style.outline = "2px solid red"
            firstnameRef.current.classList.add("error")
            toast.error("Firstname is required", { position: "top-center" })
            setTimeout(() => { firstnameRef.current.classList.remove("error") }, 2000)
            return
        }
        else if (!lastName) {
            lastnameRef.current.style.outline = "2px solid red"
            toast.error("Lastname is required")
            setTimeout(() => { lastnameRef.current.style.outline = "none" }, 2000)
            return
        }
        else if (!userName) {
            usernameRef.current.style.outline = "2px solid red"
            toast.error("username is required")
            setTimeout(() => { usernameRef.current.style.outline = "none" }, 2000)
            return
        }
        else if (!email) {
            emailRef.current.style.outline = "2px solid red"
            toast.error("email is required")
            setTimeout(() => { emailRef.current.style.outline = "none" }, 2000)
            return
        }
        else if (!password) {
            passwordRef.current.style.outline = "2px solid red"
            toast.error("password is required")
            setTimeout(() => { passwordRef.current.style.outline = "none" }, 2000)
            return
        }
        else if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@$#%&*^]/.test(password) ) {
            toast.error("Password must be atleast 8 characters , contain at least one capital letter, contain at least one lowercase letter,contain atleast one number, contain at least one special character ")
            return
        }
        else if (!confirmPassword) {
            confirmRef.current.style.outline = "2px solid red"
            toast.error("password confirmation is required")
            setTimeout(() => { confirmRef.current.style.outline = "none" }, 2000)
            return
        }
        else if (confirmPassword !== password) {
            toast.error("Invalid Password !")
            return
        }
        else if (!condition) {
            toast.error("Accept the terms and conditions")
            return
        }
        else {
            toast.success("Successfully Submitted", { position: "top-right" })

            firstnameRef.current.value = ""
            lastnameRef.current.value = ""
            usernameRef.current.value = ""
            emailRef.current.value = ""
            passwordRef.current.value = ""
            confirmRef.current.value = ""
            conditionRef.current.checked = false


            const userInformation = { firstName, lastName, userName, email, password, confirmPassword }
            localStorage.setItem("details", JSON.stringify(userInformation))
            console.log(userInformation);
        }
    }


    return (
        <div className="outer">
            <div className="box1">
                <div className="left">
                    <TbGhost2Filled size={160} />
                    {/* <h2>Ruby Sahoo</h2> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure ullam laudantium, error illo est aliquid architecto nulla! Voluptates dolor eos id voluptatibus esse est odit ipsum animi labore eius!</p>
                    <button type="button">GET STARTED</button>

                </div>
                <div className="right">

                    <h1>Register</h1>
                    <p>Create Your account. Its free and only takes a minute</p>

                    <form onSubmit={formhandle}>

                        <div className="input-section1"><CgProfile /><input type="text" placeholder="FirstName" ref={firstnameRef} /></div><hr /><br />
                        <div className="input-section1"><CiUser /><input type="text" placeholder="LastName" ref={lastnameRef} /></div><hr /><br />
                        <div className="input-section1"><FaRegUser /><input type="text" placeholder="Username" ref={usernameRef} /></div><hr /><br />
                       <div className="input-section1"> <MdEmail /><input type="email" placeholder="Email" ref={emailRef} /></div><hr /><br />
                        <div className="input-section1"><TbLockPassword /><input type="password" placeholder="Password" ref={passwordRef} /></div><hr /><br />
                        <div className="input-section1"><RiLockPasswordLine /><input type="password" placeholder="Confirm Password" ref={confirmRef} /></div><hr /><br />
                        <br />
                        <div className="terms">
                            <input type="checkbox" ref={conditionRef} />
                            <label htmlFor="terms" id="terms">Accept the Terms of Use and Privacy Policy</label>
                        </div>
                        <br />
                        <div className="para">
                            <p>Already an account ?
                                <a href="#">SignIn  </a></p>
                            <button>SIGN UP</button>
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


export default UnFormTask2