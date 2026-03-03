import React from 'react'

const Child = ({data}) => {
    console.log("child");
    
  return (
    <div>
        <h1>child</h1>
    <button onClick={data}>Delete</button>
    </div>
  )
}

export default React.memo(Child)