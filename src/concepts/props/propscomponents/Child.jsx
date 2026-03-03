const Child=(props)=>{
    console.log(props);
    
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <h4>{props.email}</h4>
            <hr />
        </div>
    )
}

export default Child