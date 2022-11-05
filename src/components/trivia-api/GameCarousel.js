import { useState } from "react";
import { Card } from "react-bootstrap";


const GameCarousel = (props) =>{
  const { data } = props
  const [answer, setAnswer] = useState('')
  const [show, setShow] = useState(true)
  const correct = []
  const ansersArr = []

  const handleClick = (e) =>{
    setAnswer((e.target.innerText).toString())
    
    
    console.log(ansersArr)
  }
  ansersArr.push(answer)
  
//   }, [isCorrect, answer, correctAns, userScore])
  

  return (
    <>
    
    {data.map((question, index) => {
    
    const { incorrect_answers, correct_answer } = question;
    correct.push({ correct_answer }) 
 
   

      const renderedAnswers = [...incorrect_answers, correct_answer]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
        return(
         <Card key={index} className={index}>
          <Card.Header>Question: {index + 1} </Card.Header>
          <div >
            <p dangerouslySetInnerHTML={{__html: question.question}}></p>

            {renderedAnswers.map((answer, idx) => (
              <p dangerouslySetInnerHTML={{__html: answer}}className="btn btn-outline-dark" key={idx} onClick={handleClick} value={{answer}}>
                
              </p>
            ))}
            {/* {correct.filter(e => 
                
              )} */}

          
          </div>
         </Card>
        )
        
    })} 
    </>
  )
}
export default GameCarousel 