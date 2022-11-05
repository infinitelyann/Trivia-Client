import { useState, useEffect } from "react";
import { Card } from "react-bootstrap"; 


const GameCarousel = (props) => {
  const { data } = props;
  const correct = [];
  for(let i = 0; i < data.length; i++){
    correct.push(data[i].correct_answer)
  }

  const [questionIndex, setQuestionIndex]  = useState(0)
  const [answer, setAnswer] = useState("");
  const [correctAns, setCorrectAns] = useState(correct[questionIndex]);
  const [isCorrect, setIsCorrect] = useState(false)
  const [userScore, setUserScore] = useState(0)
  
  
  useEffect(() => {
    setAnswer(answer)

    // might need to turn this inside out
    if (answer === correctAns) {
      setIsCorrect(true)
    }
    else {
      setIsCorrect(false)
    }

  }, [isCorrect, answer, correctAns, userScore, setUserScore])

  const handleClick = (e) => {
    console.log("THIS IS THE CORRECT ANSWER!!!!!! : ", correctAns)
    setAnswer(e.target.innerText)

    if (answer === correctAns) {
      setIsCorrect(true)
    }
    else {
      setIsCorrect(false)
    }

    if (isCorrect) {
      let num = userScore
      setUserScore(num + 1)
    }
    else {
      let num = userScore
      setUserScore(num - 1)
    }

    let newIndex = questionIndex + 1
    setQuestionIndex(newIndex)
  }


  const renderedAnswers = [...data[questionIndex].incorrect_answers, data[questionIndex].correct_answer];
  

  return (
    <>
 
   <h1> UserScore: {userScore}</h1>
      <Card>
      Question: {questionIndex}
        <Card.Header>
        {data[questionIndex].question}
        </Card.Header>
        <Card.Body>
        {renderedAnswers.map((answer, idx) => (
                <p
                  onClick={handleClick}
                  id={questionIndex}
                  className="btn btn-outline-dark"
                  key={idx}
                  value={answer}
                >
                  {answer}
                </p>
              ))}
        </Card.Body>
        <button onClick={handleClick}>next ?</button>
      </Card>
    </>
  );
};

export default GameCarousel;