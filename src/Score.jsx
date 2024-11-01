import React from 'react'
import { useLocation } from 'react-router-dom'



const Score = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <div>
      {
      
    }
      <h1>Score: {state.score}</h1>
    </div>
  )
}

export default Score