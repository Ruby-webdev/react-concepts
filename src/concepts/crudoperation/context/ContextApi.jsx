import React, { createContext, useContext, useState } from 'react'

export const GlobalContextApi = createContext()
const ContextApi = ({children}) => {

    const[currentUser, setCurrentUser] = useState(null)

  return (
    <GlobalContextApi.Provider value={{currentUser,setCurrentUser}}  >
        {children}
    </GlobalContextApi.Provider>
  )
}

export default ContextApi