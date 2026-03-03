import { useState } from "react"
import Task4Child from "./Task4Child"
import { Commet } from "react-loading-indicators"

const Task4Parent = () => {

    const [store, setStore] = useState([])
    const [loading, setLoading] = useState(false)

    const fdata = async () => {
        setLoading(true)
        try {
            const data = await fetch("https://fakestoreapi.com/products")
            const res = await data.json()
            setTimeout(() => {
                setStore(res)
                setLoading(false)
            }, 2000)
        } catch (error) {
            console.log(error);

        }

    }

    const deleteData = (id) => {
        const filterData = store.filter((ele) => ele.id !== id)
        setStore(filterData)
    }


    console.log(store);
    
    return (
        <div>
            {/* <button onClick={fdata}>Fetch Data</button> */}
            <div className="super">
                 <button onClick={fdata}>Fetch Data</button>
                {loading ? <Commet color={["#1d477a", "#2784a3", "#318bcc", "#6359d7"]} /> : <Task4Child store={store} deleteData={deleteData} />}
            </div>
        </div>
    )
}


export default Task4Parent 
