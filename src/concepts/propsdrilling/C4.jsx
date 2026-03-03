import React from 'react'

const C4 = ({data}) => {

  const updatedvalue= {...data,message:"I hate you..."}
  return (
    <div>
      {updatedvalue.username} {updatedvalue.message} 
      <h3>{data.username} {data.message}</h3>
    </div>
  )
}

export default C4 