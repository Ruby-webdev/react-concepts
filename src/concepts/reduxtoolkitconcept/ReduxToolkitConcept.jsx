import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counterslice';
import { handleinput, loginsubmit, resetform } from './features/loginSlice';

const ReduxToolkitConcept = () => {

    const result = useSelector((state)=>state.counter)

    // const formdata = useSelector((state)=> state.login)
    // console.log(result);
    const dispatch = useDispatch()

    const formData = useSelector((state)=>state.login)
    console.log(formData);

    const handleInputs= (e)=>{
      const{name,value} = e.target 
      dispatch(handleinput({[name]:value}))
    }
    const handleForm=(e)=>{
      e.preventDefault()
      dispatch(loginsubmit())
      dispatch(resetform())
    }
    
   
    
  return (
    <div>
        <h1>ReduxToolkitConcept</h1>
        <h1>{result}</h1>
        <button className='border' onClick={()=> dispatch(increment())} >Increment +</button>
        <button className='border' onClick={()=> dispatch(decrement())} >Decrement -</button>
        <button className='border' onClick={()=> dispatch(reset())} >Reset </button> 

      <form onSubmit={handleForm}>
        <input type="text"placeholder='username'name='username'value={formData.username} onChange={handleInputs} />
        <input type="text"placeholder='age'name='age'value={formData.age} onChange={handleInputs}/>
        <input type="email"placeholder='email'name='email'value={formData.email} onChange={handleInputs}/>

        <button>Submit</button>
      </form>

    </div>
  )
}

export default ReduxToolkitConcept