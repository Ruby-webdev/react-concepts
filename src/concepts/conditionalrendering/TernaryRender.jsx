const Ternaryrender=()=>{

    let value=false
    let per=77
    let theme="light"
    return(
        <div>
            {value? <h1>Hello</h1>: <h1>Bye</h1>}

            {(per>70)? <h4>A Grade</h4>:(per>50 && per<70)?<h4>B Grade</h4>:<h4>Fail</h4>}

            <h1 style={theme==="dark"?{backgroundColor:"red"}:{backgroundColor:"blue"}}>Sundari</h1>

            <div className={`box ${theme==="dark"? "dark":"light"}`}>Welcome</div>
        </div>
    )
}


export default Ternaryrender