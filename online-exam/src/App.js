import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  // State to track which questions' answers are visible
  const [visibleAnswers, setVisibleAnswers] = useState({});

  // Function to handle the "Answer" button click
  const handleShowAnswer = (questionId) => {
    console.log("questionid",questionId);
    setVisibleAnswers((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  return (
    <div className="container">
      {data.map((ele) => (
        <div key={ele.id} className="question">
          <p>{ele.question}</p>
          <ul>
            {ele.answer.map((option, idx) => {
              const key = Object.keys(option)[0]; // Get the key (a, b, c, d)
              const value = option[key]; // Get the value
              return (
                <li key={idx}>
                  <label>
                    <input type="radio" name={`question-${ele.id}`} value={key} />
                    {key.toUpperCase()}: {value}
                  </label>
                </li>
              );
            })}
          </ul>
          <button onClick={() => handleShowAnswer(ele.id)}>Answer</button>
          {visibleAnswers[ele.id] && (
            <p>
              <strong>Correct Answer: {ele.correctanswer.toUpperCase()}</strong>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
