import { useState } from "react";
import { Card } from "react-bootstrap";


const GameCarousel = (props) =>{
  const { data } = props
  const { correct_answer, incorrect_answers, question} = data
  const [answer, setAnswer] = useState('')
  const [show, setShow] = useState(true)

  const handleClick = (e) =>{
    console.log(e.target.innerText)
    
    setAnswer(e.target.innerText)
  }


  return (
    <>
    
    {data.map((question, index) => {
      console.log({incorrect_answers})
      const { incorrect_answers, correct_answer } = question;
      const renderedAnswers = [...incorrect_answers, correct_answer]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
        return(
         <Card className={index}>
          <Card.Header>Question: {index + 1}</Card.Header>
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