const Child1=({count,setCount})=>{
    console.log("child");
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+3)}}>Update from child</button>
        </div>
    )
}
export default Child1