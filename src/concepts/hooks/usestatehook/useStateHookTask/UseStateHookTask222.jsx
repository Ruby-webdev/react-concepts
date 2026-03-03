import { useState } from "react"
import IMAGE from "../../../../assets/cutecat.jpg"

const UseStateHookTask222=()=>{

    const [name, setName]=useState("Sundari")
    const [age,setAge]=useState(23)
    const [education,setEducation]=useState("MCA")
    const [gender,setGender]=useState("Female")
    const [address,setAddress]=useState("Odisha")
    const [contact,setContact]=useState(6370747104)


    const nameChange=()=>{
        let newName=prompt("Enter new name:")
        setName(newName)
    }

    const ageChange=()=>{
        let newAge= prompt("Enter new age:")
        setAge(newAge)
    }

    const educationChange=()=>{
        let newEducation=prompt ("Enter new education:")
        setEducation(newEducation)
    }

    const genderChange=()=>{
        let newGender=prompt("Enter new gender:")
        setGender(newGender)
    }

    const addressChange=()=>{
       let newAddress= prompt("Enter new address:")
       setAddress(newAddress)
    }

    const contactChange=()=>{
        let newContact=prompt("Enter new contact no:")
        setContact(newContact)
    }

    return(
        <div className="outermost">
            <div className="card">
                <div className="top">
                    <div className="profile"><img  className="img"src={IMAGE} alt="" /></div>
                </div>
                <div className="bottom">
                    <h3>Name:{name}</h3>
                    <h3>Age:{age}</h3>
                    <h3>Education:{education}</h3>
                    <h3>Gender:{gender}</h3>
                    <h3>Address:{address}</h3>
                    <h3>Contact:{contact}</h3>
                </div>
            </div>

            <div className="updation">
                <button onClick={nameChange}>name</button>
                <button onClick={ageChange}>age</button>
                <button onClick={educationChange}>education</button>
                <button onClick={genderChange}>gender</button>
                <button onClick={addressChange}>address</button>
                <button onClick={contactChange}>contact</button>
            </div>
        </div>
    )
}


export default UseStateHookTask222