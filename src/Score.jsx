import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



const Score = () => {
  const [percentage, setPercenatge] = useState(null)
  const {state} = useLocation()
  console.log(state)

  useEffect(()=> {
    setPercenatge(state.score / state.questions.length * 100)
  },[])

  return (
    <div className='flex flex-col justify-center items-center mt-10 gap-5'>
      <h1 className='text-3xl'>Quiz Score</h1>
      <h1 className='text-3xl'>{percentage} %</h1>
      {
        percentage >= 50
        ? <h1 className='text-green-400 text-2xl'>Pass</h1>
        : <h1 className='text-red-500 text-2xl'>Fail</h1>
      }
    </div>
  )
}

export default Score