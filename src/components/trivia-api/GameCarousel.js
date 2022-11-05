import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import Result from "../Result"


const GameCarousel = (props) => {
  const { data, resultSettings } = props
  const correct = []
  for (let i = 0; i < data.length; i++) {
    correct.push(data[i].correct_answer)
  }

  const [questionIndex, setQuestionIndex] = useState(0)
  const [playerAnswer, setPlayerAnswer] = useState("")
  const [correctAns, setCorrectAns] = useState(correct[questionIndex])
  const [userScore, setUserScore] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [result, setResult] = useState(false)

  let points = 1
  if (resultSettings.difficulty == "Medium") {
    points = 2
  } else if (resultSettings.difficulty == "Hard") {
    points = 3
  }

  useEffect(() => {
    if (playing) {
      let num = userScore
      let index = questionIndex
      if (playerAnswer === correctAns) {
        setUserScore(num + points)
      }
      else {
        setUserScore(num - points)
      }
      setQuestionIndex(index + 1)
    }
  }, [playerAnswer])

  useEffect(() => {
    if (data[questionIndex].correct_answer) {
      setCorrectAns(data[questionIndex].correct_answer)
    } else {
      setResult(true)
    }
  }, [questionIndex])

  const handleClick = (e) => {
    if (!playing) {
      setPlaying(true)
    }
    setPlayerAnswer(e.target.innerText)
  }

  const renderedAnswers = [...data[questionIndex].incorrect_answers, data[questionIndex].correct_answer];

  if (!result) {
    return (
      <>
        <h1> UserScore: {userScore}</h1>
        <Card>
          Question: {questionIndex + 1}
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
    )
  } else {
    return (
      <Result />
    )
  }
  
}

export default GameCarousel;