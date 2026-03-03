import React from "react";


//jsx expression is used to access the js variables or functions inside the jsx  | html
// syntax....> {}
// !Note  ...> inside the jsx expression is not possible to declare a variable but initialization is possible

//! How to use js functions and call js functions ?
     //if a function is returning a jsx element then only we call it as a component, if its not returning any jsx element then it is called as a simple js function
     // inside a jsx expression if i want to use any conditional statement then we need to use ternary operator
     //If I want to use loop then go for map() method
     

const JsxExpression =()=>{
    let username="Alexa"

    let demo=()=>{
        console.log("demo function");
        
    }
    // demo();

    let is_active=true

    if(is_active==true){
        console.log("true block");      
    }
    else{
        console.log("false  block");  
    }

    let arr=['sundari','leela','maala']
    return(
        <div>
            {/* <h1> {username}</h1>
            {username="leela"}
            <br />
            {username} */}


            {/* {
                let val=20;
            } */}

            <button onClick={demo}>Click</button>
            {
                (is_active) ? <h1>I am safe</h1>: <h1>I am dead</h1>
            }

            {
                arr.map((ele,index)=>{
                    return (
                        <h1>{ele}{index}</h1>
                    )
                })
            }

            <hr />

            <h1>{arr[0]}</h1>
             <h1>{arr[1]}</h1>
              <h1>{arr[2]}</h1>
            </div>
    )
}

export default JsxExpression