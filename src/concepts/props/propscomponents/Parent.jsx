import Child from "./Child"


const Parent=()=>{
    return(
        <div id='parent' className="parent">
            <Child name="Sundari" age="22" email="sundari@gmail.com"/>
            <Child name="Leela" age={25} email="leela@gmail.com"/>
            <Child name="Maala" age={29} email="Maala@gmail.com"/>
        </div>
    )
}


export default Parent