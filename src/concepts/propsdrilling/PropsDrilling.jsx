import React from 'react'
import C1 from './C1'

const PropsDrilling = () => {
    const data={
        username:"Sundari",
        message:"I love you..."
    }
  return (
    <div>
        <h1>PropsDrilling</h1>
        <C1 data={data}/>
    </div>
  )
}

export default PropsDrilling