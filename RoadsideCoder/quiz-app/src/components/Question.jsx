import React from "react";
import './Questions.css'
const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="question">
      <h2 style={{textAlign:"center"}}>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((option) => (
          <li key={option.text}>
            <button onClick={() => onAnswerClick(option.isCorrect)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
