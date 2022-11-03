import { useState } from "react";
import { Card } from "react-bootstrap";
import GamePlay from "./GamePlay";

const GameCarousel = (props) =>{
  const { data } = props
  const [answer, setAnswer] = useState('')

  const handleClick = () =>{
    console.log('click')

  }

  return (
    <>
    
    {data.map((question, index) => {
      const { incorrect_answers, correct_answer } = question;
      const renderedAnswers = [...incorrect_answers, correct_answer]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
        return(
         <Card>
          <Card.Header></Card.Header>
          <div key={index}>
            <p dangerouslySetInnerHTML={{__html: question.question}}></p>

            {renderedAnswers.map((answer, idx) => (
              <p dangerouslySetInnerHTML={{__html: answer}}className="btn btn-outline-dark" key={idx} onClick={handleClick}>
                
              </p>
            ))}

          
          </div>
         </Card>
        )
        
    })} 
    </>
  )
}
export default GameCarousel 