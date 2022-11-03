import { useState } from "react";
import { Form, Card } from "react-bootstrap";
import GameInputs from "./GameInputs";
import GameCarousel from "./GameCarousel";
import { getOpenDBUrl } from "../../utils/openDB";




const GamePlay = (props) => {
  const { setFilterOptions, err, handleClick, isLoading, data} = props
;

  return (
   <>
   
     <GameInputs setFilterOptions={setFilterOptions}/>
     <GameCarousel data={props.data}/>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>


      {isLoading && <h2>Loading...</h2>}
      <div className="container-sm">
{/* 
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
              <p dangerouslySetInnerHTML={{__html: answer}}className="btn btn-outline-dark" key={idx}>
                
              </p>
            ))}

          
          </div>
         </Card>
        )
        
    })}  */}
      </div>

      
    </>
    )


}

  


export default GamePlay;