import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { gameShow } from "../api/game";

const UserGamePlay = (props) => {
  const [game, setGame] = useState({})// ! should be null when we intend to do hard reassignment, bypasses need for your 'loaded' variable
  const { id, user, msgAlert } = props
  // useEffect(())
  // why aren't these part of state ? at least give comments 
  let stopGame = ''
  let correct = [];
  let scrambledAnswers = [];

// WHITE SPACE?!
  
  // why is this not at top with other state variables
  const [questionIndex, setQuestionIndex] = useState(0)
  const [playerAnswer, setPlayerAnswer] = useState("")
  const [correctAns, setCorrectAns] = useState(correct[questionIndex])
  const [userScore, setUserScore] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)
  

  useEffect(() => {
    gameShow(user, id)
        .then((res) => {
            setGame(res.data.game)
            setLoaded(true)
            
            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Game Failure' + error,
                variant: 'danger'
            })
        })
}, [loaded])
  
if(loaded){// why not just check if game is truthy ?
  for(let i = 0; i < game.questions.length; i++){
    correct.push(game.questions[i].correctAnswer)
    
  }
   stopGame = Number(game.questions.length) -1
}

  useEffect(() => { // should be commented since we're implementing game logic
    if(loaded){
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
// WS
    }
  }, [playerAnswer])

  useEffect(() => { // should be commented since we're implementing game logic
    if(loaded){
      if (questionIndex < stopGame) {
        setCorrectAns(game.questions[questionIndex].correctAnswer)
      }
// WS
    }
  }, [questionIndex])

  const handleClick = (e) => {
    if (!playing) {
      setPlaying(true)
    }
    setPlayerAnswer(e.target.innerText)
    //WS
  }
// it's better practice to inverse the flow of this logic, do 1 return and have the conditionals inside it , white space, indentation, and unnecessary shards throughout 
// break up your 3 component here to separate files and import them in 
  if (!playing) {
    return (
      <>
        <button onClick={handleClick} className=" btn btn-info">
          Play
        </button>
      </>
    );
  } else if (questionIndex < stopGame) {
    const renderedAnswers = [
      ...game.questions[questionIndex].incorrectAnswers,
      game.questions[questionIndex].correctAnswer,
    ];

    scrambledAnswers = renderedAnswers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    console.log(scrambledAnswers);
    return (
      <>
        <div className="questionContainer">
          <div className="cardContainer"></div>
          <Card>
            <Card.Header>{game.questions[questionIndex].question}</Card.Header>
            <Card.Body>
              {scrambledAnswers.map((answer, idx) => (
                <p
                  onClick={handleClick}
                  id={questionIndex}
                  className="btn answerbtn"
                  key={idx}
                  value={answer}
                  style={{ border: "3px solid #ffc300", borderRadius: "10px" }}
                >
                  {answer}
                </p>
              ))}
            </Card.Body>
          </Card>

          <button onClick={handleClick}>next</button>
        </div>
      </>
    );
  }else{
    return(
      <>
      <div style={{backgroundColor: '#240046', height: '100vh', paddingTop: '40px'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
       <Card style={{ width: '500px', height: '300px', textAlign: 'center', padding: '100px', border: '4px solid lightgray'}}>
          <Card.Header style={{backgroundColor: '#e1d5f2', borderRadius: '5px'}}>
            Finished?
          </Card.Header>
          <Card.Body>

             <Link to="/homepage"  className="btn endgamebtn" style={{border: '2px solid red'}}>End Game</Link>

          </Card.Body>
        </Card>
        </div>
        </div>
      </>
    )
  }
};

export default UserGamePlay;