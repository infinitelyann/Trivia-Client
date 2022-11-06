import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { gameIndex, gameShow } from "../api/game";
import UserGameIndex from "./UserGameIndex";


const UserGamePlay = (props) => {
    const { game } = props
 
  
  const [questionIndex, setQuestionIndex] = useState(0);
  const { user, id, msgAlert} = props;
  console.log("hi",user)
  
//   useEffect(()=> {
      
//       gameIndex(user, id)
//       .then(res => {
//           setGame(res.data.games)
//         })
//         .catch((error) => {
//             msgAlert({
//                 heading: 'Failure',
//                 message: 'Index Games Failure' + error,
//                 variant: 'danger'
//             })
//         })
//     }, [])
    
    console.log("hello", id)
    const handleClick = () => {     setQuestionIndex(questionIndex + 1);
      };
      
      const renderedAnswers = [...game.question.incorrectAnswers, game.question.correctAnswer]
      console.log(renderedAnswers)
return(
    <>
   hello{game.id}
   
    return (
      <>
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
      </>
    );
    </>
)

};

export default UserGamePlay;
