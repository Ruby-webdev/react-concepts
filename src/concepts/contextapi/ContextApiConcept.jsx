import React, { createContext } from 'react'
import C1 from './C1'
import A1 from './A1'

export const GlobalContext = createContext()


const ContextApiConcept = () => {

    const data={
        username:"sundari",
        message:"i lv you..."
    }
  return (
    <div>
        
       <GlobalContext.Provider value={data}>
        <C1/>
         <A1/>
       </GlobalContext.Provider>

       {/* <A1/> */}

      
    </div>
  )
}

export default ContextApiConcept