import { useState, useEffect } from "react";
import { Card } from "react-bootstrap"; 


const GameCarousel = (props) => {
  const { data } = props;
  const correct = [];
  const [answer, setAnswer] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [questionIndex, setQuestionIndex]  = useState(0)
  let [userScore, setUserScore] = useState(0)
  
  for(let i = 0; i < data.length; i++){
    correct.push(data[i].correct_answer)
  }
  console.log(correct)
  
  useEffect(() =>{
    setAnswer(answer)
    setIsCorrect(() => {
      if (answer == correctAns) {
      
        return true;
      } else {
       
        return false;
      }
    }
    );
   
    setCorrectAns(() => {
     
      return correct[questionIndex].correct_answer;
    })

  }, [isCorrect, answer, correctAns, userScore, setUserScore])
  const handleClick = (e, idx) => {
  
    console.log(e.target);
    idx = e.target.id;
    setAnswer(() => {
      return e.target.innerText;
    });
 ;
    setUserScore(() =>{
      if(isCorrect){
        return(userScore + 1)
      }else{
        return(userScore - 1)
      }
    })
    setQuestionIndex(()=>{
      return(questionIndex + 1)
    })

  
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