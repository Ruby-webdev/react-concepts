import { useState } from "react"
import { FaHeartBroken, FaRegHeart } from "react-icons/fa"
import { IoHeart } from "react-icons/io5"


const UseStateTask1 = () => {

    const [proposal, setProposal] = useState(<FaRegHeart />)
    const [position, setPosition] = useState({ top: "80%", left: "45%" })


    const acceptProposal = () => {
        setProposal(<IoHeart fill="red" />)
    }

    const rejectProposal = () => {
        setProposal(<FaHeartBroken fill="red" />)
    }

    const reset = () => {
        setProposal(<FaRegHeart />)
    }

    const moveButton = () => {
        const randomTop = Math.random() * (window.innerHeight - 100)
        const randomLeft = Math.random() * (window.innerHeight - 100)

        setPosition({ top: `${randomTop}px`, left: `${randomLeft}px` })
    }


    return (
        <div>
            <div className="mainbox">
                <div className="box">
                    {/* {
                    proposal===null ? <FaRegHeart/>:(proposal===true)? <IoHeart fill="red"/>:<FaHeartBroken fill="red"/>
                   } */}

                    <div className="heart">
                        {
                            proposal
                        }
                    </div>

                    <div className="btn">
                        <button onClick={acceptProposal}>Accept ...😍</button>
                        <button className="reject-btn" onClick={rejectProposal} onMouseEnter={moveButton} style={{ top: position.top, left: position.left }}>Reject ...😕</button>
                        <button onClick={reset}>Change your mind !!!</button>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default UseStateTask1