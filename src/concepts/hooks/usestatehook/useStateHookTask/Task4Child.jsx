
import { MdOutlineDeleteForever } from "react-icons/md"
import "./task4.css"


const Task4Child=({store,deleteData})=>{
    return(
        <div className="parent">
            {
                store.map(({id,title,price,description,category,image,rating:{rate,count}})=>{
                    return(
                         <div className="card4">
                            <h3>{id}</h3>
                            <img  className="img4"src={image} alt=""  />
                            <h2> Price: {price *90} /-</h2>
                            <p>Rating:{rate} ⭐ {count}</p>
                            <h4>Category: {category}  <MdOutlineDeleteForever size={30} onClick={()=>{deleteData(id)}} cursor={"pointer"} className="dlt-btn" fill="red"/></h4><br />
                            <h3>{title}</h3>
                            <p>{description}</p>
                         </div>
                    )
                })
            }
           
        </div>
    )
}


export default Task4Child