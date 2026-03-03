import { FcGoogle } from "react-icons/fc";
import "./task1.css";
import { FaFacebookF } from "react-icons/fa";
import { useRef } from "react";
import { toast, Zoom } from "react-toastify";
import IMAGE from "../../../../assets/woman.jpg";

const UncontrolledFormTask1 = () => {

    const userNameRef = useRef(null)
    const userPasswordRef = useRef(null)

    const formhandle = (e) => {
        e.preventDefault()

        const userName = userNameRef.current.value
        const Password = userPasswordRef.current.value

        if (!userName) {
            userNameRef.current.style.outline="2px solid red"
            toast.error("Username is required !", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            })
            setTimeout(()=>{userNameRef.current.style.outline="none"},2000)
            return
        }
        if(!Password){
            toast.error("Password is required !")
        }
        else {
            toast.success("Successfully submitted", { position: "top-right" })
        }
        // console.log(userName,Password);
        console.log(userNameRef.current.value, userPasswordRef.current.value);

    }

    return (

        <div className="parents" >
            <div className="loginform">

                <div className="one"></div>
                <div className="two"></div>

                <div className="left">
                    <h1>Form</h1>
                    <p>How to get started lorem ipsum dolar at ?</p>

                    <form onSubmit={formhandle}>
                        <input type="text" placeholder="Username" ref={userNameRef} /><br /><br />
                        <input type="password" placeholder="password" ref={userPasswordRef} /><br /><br />

                        <div className="bottom-btns">
                            <button type="submit" className="login-btn">Login Now</button>
                            <p><b>login</b> with Others</p>

                            {/* <button><FcGoogle size={20} />Login with <a href="https://www.google.com/?hl=in">Google</a></button>
                            <button><FaFacebookF />Login with <a href="https://www.facebook.com/login.php/">facebook</a></button> */}

                            <button type="button" onClick={() => { window.location.href = "https://www.google.com" }}><FcGoogle size={20} /> Login with google</button>
                            <button type="button" onClick={() => { window.location.href = "https://www.facebook.com" }}><FaFacebookF size={20} fill="blue" />Login with Facebook</button>
                        </div>
                    </form>
                </div>
                <div className="right">
                    <img src={IMAGE} alt="" className="inner" />
                </div>
            </div>
        </div>

    )
}


export default UncontrolledFormTask1