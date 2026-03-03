
import "./task3.css"
import { MdDeleteForever } from "react-icons/md"

const UseStateTask3 = ({userData,deleteUser}) => {

   
    return (
    
        <div className="parent">
        
            <div className="card-container">

                {userData.map(({login,id,node_id,avatar_url}) => {
                    return (
                        <div className="card">
                            <img className="pic" src={avatar_url} alt="" />
                            <p>Login: {login}</p>
                            <p>ID: {id}</p>
                            <p>Node_ID: {node_id}</p>
                            <MdDeleteForever fill="red" size={50} onClick={()=>{deleteUser(id)}}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default UseStateTask3