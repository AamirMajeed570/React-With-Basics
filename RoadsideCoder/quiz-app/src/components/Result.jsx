import React from 'react'
import './Result.css'
const Result = ({userAnswers,questions,resetQuiz = ()=>{}}) => {
    const correctAnswers = userAnswers.filter((answer)=>answer).length;
  return (

    <div className='results'>
        <h2>Results</h2>
        <p>You answered {correctAnswers} out of {questions.length} Questions.</p>
        <span onClick={resetQuiz}>Retry</span>
    </div>
  )
}

export default Result