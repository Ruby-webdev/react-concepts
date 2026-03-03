import React, { useContext } from 'react'
import { GlobalContext } from './ContextApiConcept'

const C4 = () => {

    const res = useContext(GlobalContext)
    console.log(res);
    
  return (
    <div>
       C4
    </div>
  )
}

export default C4