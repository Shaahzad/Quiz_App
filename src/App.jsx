import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Score from './Score'

const App = () => {
 const [questions, setQuestions] = useState(null)
 const [currentIndex, setCurrentIndex] = useState(0)
 const [score, setScore] = useState(0)
 const Input = useRef([])
 const navigate = useNavigate()

  useEffect(()=>{
     axios('https://the-trivia-api.com/v2/questions')
      .then((res)=>{
        setQuestions(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])
  const NextQuestion = () => {
    const selectedOption = Input.current.find(item => item && item.checked)
    let correctAnswer = questions[currentIndex].correctAnswer
    if(selectedOption && selectedOption.value === correctAnswer){
      setScore(score + 1)
    }else{
      setScore(score)
    }

    if(currentIndex < questions.length - 1){
      setCurrentIndex(currentIndex + 1) 
      return
    }
    navigate('QuizScore', {
      state:{
      score,
      questions
      }
    });
  }



  function shuffleArray(arr){
    const emptyArr = []
    const shuffleArr = []
    for (let index = 0; index < arr.length; index++) {
        const randomNumber = Math.floor(Math.random() * arr.length)
        if(emptyArr.includes(randomNumber)){
          index--
        }else{
          emptyArr.push(randomNumber)
          shuffleArr[randomNumber] = arr[index]
        }
      } 
      return shuffleArr
  }
  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-10'>Quiz App 100</h1>
      {
        questions ? <div>
          <h1 className='text-2xl m-10 bg-red-300 p-5 font-bold'>Q{currentIndex + 1} : {questions[currentIndex].question.text}</h1>
          {shuffleArray([...questions[currentIndex].incorrectAnswers, 
           questions[currentIndex].correctAnswer]).map((item,index)=>{
            return(
              <div key={index} className='flex gap-5 ml-10'>
                <input type="radio" value={item} id={index} name='question' className='w-4' 
                 ref={el => Input.current[index] = el}/>
                <label htmlFor={index} className='text-2xl'>{item}</label>
              </div>
            )
          })}
          <button onClick={NextQuestion} className='text-2xl m-10 bg-blue-300 p-5 font-bold rounded-2xl'>Next</button>
        </div> : <h1 className='text-3xl font-bold text-center mt-10'>Loading...</h1>
      }
    </>
  )
}
      


export default App



