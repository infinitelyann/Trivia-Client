import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { gameIndex, gameShow } from "../api/game";
import UserGameIndex from "./UserGameIndex";


const UserGamePlay = (props) => {
    const { game } = props
    const [playing, setPlaying] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0);
    let scrambledAnswers = []
 
  const handleClick = () =>{
   setPlaying(true)
  console.log({game})
  }
//   const { user, id, msgAlert} = props;
//   console.log("hi",user)
  

    
//     console.log("hello", id)
//     const handleClick = () => {     ;
//       };
      
//       
//       console.log(renderedAnswers)


  const handleQuestionChange = () =>{
    setQuestionIndex(questionIndex + 1)
    console.log(questionIndex + 1)
  }
  
  
  if(!playing){
    return(
      <>
     <button onClick={handleClick}className=" btn btn-info">Play</button>
     </>
  )
  
}else{
  const renderedAnswers = [...game.questions[questionIndex].incorrectAnswers, game.questions[questionIndex].correctAnswer];

  scrambledAnswers = renderedAnswers.map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
  console.log(scrambledAnswers)
  return(
    <>
    <div  className="questionContainer">
      <div className="cardContainer">

      </div>
      <Card>
        <Card.Header>
    {game.questions[questionIndex].question}
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
      </Card>
      
      
    <button onClick={handleQuestionChange}>next</button>
    </div>
    </>
  
    
  )
}
      {/* <>
      <Card>
          Question: {questionIndex + 1}
          <Card.Header>
            {game.question[questionIndex].question}
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
      </> */}
  


};

export default UserGamePlay;
