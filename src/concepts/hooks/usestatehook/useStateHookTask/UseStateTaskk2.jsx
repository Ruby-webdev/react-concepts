import { useState } from "react"
import { FaEdit } from "react-icons/fa"

const UseStateTaskk2=()=>{

    const [userData,setUserData]=useState({
        username:"Sundari",
        age:"23",
        gender:"female",
        email:"sundari@gmail.com",
        phone:1234567890,
        loc:"BBsr",
        b_grp:"B+"
    })

    const {username,age,gender,email,phone,loc,b_grp}=userData

    const updateName=()=>{
        const newname=prompt("enter your name: ")
        setUserData({...userData,username:newname})
    }

    const updateAge=()=>{
        const newage=Number(prompt("enter your age: "))
        setUserData({...userData,age:newage})
    }

    const updateGender=()=>{
        const newgender=prompt("enter your gender: ")
        setUserData({...userData,gender:newgender})
    }

    const updateEmail=()=>{
        const newemail=prompt("enter your email: ")
        setUserData({...userData,email:newemail})
    }
    return(
        <div className="task2">
            <div className="card1"></div>
            <div className="img">L</div>
            <div className="text">
                <h1>{username} <FaEdit onClick={updateName} /></h1>
                <p>{age}<FaEdit onClick={updateAge} /></p>
                <p>{gender}<FaEdit onClick={updateGender} /></p>
                <p>{email}<FaEdit onClick={updateEmail} /></p>
                <p>{phone}</p>
                <p>{loc}</p>
                <p>{b_grp}</p>
            </div>
        </div>
    )
}


export default UseStateTaskk2