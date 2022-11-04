import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";


const GameCarousel = (props) =>{
  const { data } = props
  const [answer, setAnswer] = useState('')
  const [show, setShow] = useState(true)
  let [isCorrect, setIsCorrect] = useState(false)
  const [isIncorrect, setIsIncorrect] = useState('')
  const userClicks = []
  const correct = []
  
// useEffect(() =>{

//   const handleClick = (e) =>{
    
//     setAnswer(prevAns =>{
//       const updateAns = e.target.innerText
//       return(updateAns)
//     })
//     e.target.disabled = true
    
    
//     setIsCorrect((prevSubmit )=>{
 
//       for (let i=0; i < correct.length; i++){
//         if(answer.toString() === correct[i].correct_answer.toString()){
//           // console.log(correct[i].correct_answer)
//           // console.log(answer)
//           isCorrect = true
//         }else{
//          isCorrect = false
          
//         }
//       }
//       // console.log(answer)
//       // console.log(correct)
//       console.log(isCorrect)
//       console.log(userClicks)
 
//     })
//     userClicks.push(1)
//   }

// },[])
  
        
          const handleClick = (e) =>{

            setAnswer(JSON.stringify(e.target.innerText))
              
            console.log(answer)
            console.log(correct)
            console.log(isCorrect)

          }
        



// correct.includes(answer)
//  correct.filter()


  return (
    <>
    
    {data.map((question, index) => {
    
    const { incorrect_answers, correct_answer } = question;
    correct.push({ correct_answer }) 
 
   

      const renderedAnswers = [...incorrect_answers, correct_answer]
        // .map((value) => ({ value, sort: Math.random() }))
        // .sort((a, b) => a.sort - b.sort)
        // .map(({ value }) => value);
        return(
         <Card key={index} className={index}>
          <Card.Header>Question: {index + 1} </Card.Header>
          <div >
            <p dangerouslySetInnerHTML={{__html: question.question}}></p>

            {renderedAnswers.map((answer, idx) => (
              <p  dangerouslySetInnerHTML={{__html: answer}}className="btn btn-outline-dark" key={idx} onClick={handleClick} value={answer}>
                
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