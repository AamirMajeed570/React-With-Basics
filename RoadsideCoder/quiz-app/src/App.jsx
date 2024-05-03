import { useState } from "react";
import questions from "./constants/questions.json";
import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>World Quiz</h1>
        {/* Question Component */}
        {currentQuestion < questions.length && (
          <Question
            question={questions[currentQuestion]}
            onAnswerClick={handleNextQuestion}
          />
        )}
        {/* Result Component */}
        {currentQuestion === questions.length && (
          <Result
            userAnswers={userAnswers}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </>
  );
}

export default App;
