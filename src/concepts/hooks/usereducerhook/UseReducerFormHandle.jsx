import React, { useReducer } from 'react'

const UseReducerFormHandle = () => {

    const initialform={                         //step 2
        username:"",
        
        age:"",
        email:""
    }  


    const formreducer=(state,action)=>{         //step-3
        switch (action.type) {

            case "update":{
                return {...state, ...action.payload}
            }

             case "submit":{
               // write the logic to send the data to backend
               console.log("final data");
               console.log(action.payload);  
            }

             case "clear":{
                return initialform;
            }
            default:
                return state;
        }
    }

    const[formData, dispatch] = useReducer(formreducer,initialform)   //step-1
    const handleInput=(e)=>{
        const{name,value} = e.target 
        dispatch({type:"update", payload:{[name]: value}})  
    }

    const handleForm=(e)=>{
        e.preventDefault();
        dispatch({type:"submit", payload:formData})
        dispatch({type:"clear"})

    }

  return (
    <div className='border min-h-3 p-5'>
        <form onSubmit={handleForm} className='m-2'>
            <input className='border p-2' type="text"placeholder='enter your name' name='username' value={formData.username} onChange={handleInput} />
            <input className='border p-2' type="text"placeholder='enter your age' name='age' value={formData.age} onChange={handleInput} />
             <input className='border p-2' type="email"placeholder='enter your email' name='email' value={formData.email} onChange={handleInput} />
            <br />
            <button className='border p-3'>Submit</button>
        </form>

        <h1>{formData.username}</h1>
    </div>
  )
}

export default UseReducerFormHandle