// ! What is conditional Rendering
//It helps to render a component or element based on a condition


const ConditionalRendering=()=>{
  let value=true

  if(value){
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
  }
  
  else{
    return(
        <div>
            <h1>Bye</h1>
        </div>
    )
  }
}


export default ConditionalRendering