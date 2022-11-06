import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";





const GameCarousel = (props) => {
  const { data } = props
  const correct = []
  for (let i = 0; i < data.length; i++) {
    correct.push(data[i].correct_answer)
  }

  const [questionIndex, setQuestionIndex] = useState(0)
  const [playerAnswer, setPlayerAnswer] = useState("")
  const [correctAns, setCorrectAns] = useState(correct[questionIndex])
  const [userScore, setUserScore] = useState(0)
  const [playing, setPlaying] = useState(false)
  let scrambledAnswers = []
  

  useEffect(() => {
    if (playing) {
      let num = userScore
      let index = questionIndex
      if (playerAnswer === correctAns) {
        setUserScore(num + 1)
      }
      else {
        setUserScore(num - 1)
      }
      setQuestionIndex(index + 1)
    }
  }, [playerAnswer])

  useEffect(() => {
  
  
    setCorrectAns(data[questionIndex].correct_answer)
  }, [questionIndex])

  const handleClick = (e) => {
    if (!playing) {
      setPlaying(true)
    }
    setPlayerAnswer(e.target.innerText)
    
  }
  let stopGameIndex = Number(correct.length) -1
  if(questionIndex != stopGameIndex){
    const renderedAnswers = [...data[questionIndex].incorrect_answers, data[questionIndex].correct_answer];
    scrambledAnswers = renderedAnswers.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    console.log(scrambledAnswers)
    console.log(correct[questionIndex])
    
      return (
        <>
          <div className="questionContainer">
          <h1 className="triviaUserscore"> UserScore: {userScore}</h1>
          <div className="cardContainer">
          <Card className="p-3 m-3 triviaCard" style={{ width: '600px', height: '300px', textAlign: 'center', border: '4px solid lightgray', padding: '20px'}}>
            Question: {questionIndex + 1}
            <Card.Header style={{backgroundColor: '#e1d5f2', borderRadius: '5px'}}>
              {data[questionIndex].question}
            </Card.Header>
            <Card.Body>
              {scrambledAnswers.map((answer, idx) => (
                <p
                  onClick={handleClick}
                  id={questionIndex}
                  className="btn answerbtn"
                  key={idx}
                  value={answer}
                  style={{border: '3px solid #ffc300', borderRadius: '10px'}}
                >
                  {answer}
                </p>
              ))}
            </Card.Body>
            <button onClick={handleClick} className="skipQuestion">Skip</button>
          </Card>
          </div>
          </div>
        </>
      );
          
  }else{
    return(
      <>
       <Card>
          <Card.Header>
            Finished?
          </Card.Header>
          <Card.Body>

             <Link to="/homepage"  className="btn btn-outline-dark">End Game</Link>

          </Card.Body>
        </Card>

      </>
    )
  }
 
};

export default GameCarousel;