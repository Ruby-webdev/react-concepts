import { useRef } from "react";
import { toast } from "react-toastify";
import "./uncontrolledformhandle.css";

const UncontrolledFormHandling = () => {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const maleRef = useRef(null)
    const femaleRef = useRef(null)
    const otherRef = useRef(null)

    const handleForm = (e) => {
        e.preventDefault()
        // console.log(e);

        const username = usernameRef.current.value
        const password = passwordRef.current.value

        // const male = maleRef.current.value
        // const female= femaleRef.current.value
        // const others = otherRef.current.value

        const gender = (maleRef.current.checked) ? "male" : (femaleRef.current.checked) ? "female" : (otherRef.current.checked) ? "others" : null

        if (!username) {
            usernameRef.current.style.outline = "2px solid red"
            toast.error("Username is required", { position: "top-center" })
            setTimeout(() => { usernameRef.current.style.outline = "none" }, 2000)
            return
        }
        if (!password) {
            passwordRef.current.style.outline = "2px solid red"
            toast.error("Password is required !")
            setTimeout(() => { passwordRef.current.style.outline = "none" }, 2000)
            return
        }
        else {
            // localStorage.setItem("details", JSON.stringify(data))
            toast.success("Successfully submitted", { position: "top-right" })

            usernameRef.current.value = ""
            passwordRef.current.value = ""
            maleRef.current.checked = false
            femaleRef.current.checked = false
            otherRef.current.checked = false
        }

        const data = {
            username, password, gender
        }

        localStorage.setItem("details", JSON.stringify(data))
        console.log(data);


    }

    return (
        <div className="box1">
            <h1>UncontrolledFormHandling</h1><br />

            <form onSubmit={handleForm}>
                <input type="text" placeholder="Enter your name" ref={usernameRef} />
                <input type="password" placeholder="password" ref={passwordRef} />
                <br />

                <label htmlFor="male">
                    <input type="radio" value="male" id="male" name="gender" ref={maleRef} />Male
                </label>

                <label htmlFor="female">
                    <input type="radio" value="female" id="female" name="gender" ref={femaleRef} />Female
                </label>

                <label htmlFor="others">
                    <input type="radio" value="others" id="others" name="gender" ref={otherRef} />Others
                </label>
                <br />

                <button>submit</button>
            </form>

        </div>

    )
}


export default UncontrolledFormHandling