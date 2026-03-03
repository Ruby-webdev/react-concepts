import { useState } from "react"
import UseStateTask3 from "./UseStateTask3"
import { Atom } from "react-loading-indicators"

const Task3Parent=()=>{


     const [userData, setUserData] = useState([])
     const[loading,setLoading]= useState(false)

        const fdata = async () => {
            setLoading(true)
            try {
                const data = await fetch("https://api.github.com/users")
                const res = await data.json()
                setTimeout(()=>{
                     setUserData(res)
                     setLoading(false)
                },1000)
               
            } catch (error) {
                console.log(error);
    
            }
        }
        
        // const reset=()=>{
        //     setUserData([])
        // }
        // console.log(userData);
    
        const deleteUser=(id)=>{
            const filterUsers=userData.filter((ele)=> ele.id !== id)
            setUserData(filterUsers)
        }
    
    return(
        <div>
            <button onClick={fdata}>Fetch Data</button>
            <div>{
                loading ?<div className="load"><Atom color="#32cd32" size="medium" text="" textColor=""/></div>: <UseStateTask3  userData= {userData} deleteUser={deleteUser} />
                }
                
            </div>
            
        </div>
    )
}


export default Task3Parent