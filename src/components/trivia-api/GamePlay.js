import { useState } from "react";
import { Form } from "react-bootstrap";
import GameInputs from "./GameInputs";
import GameCarousel from "./GameCarousel";
import { getOpenDBUrl } from "../../utils/openDB";




const GamePlay = (props) => {
  const { setFilterOptions, err, handleClick, isLoading, data} = props
;

  return (
   <>
     <GameInputs setFilterOptions={setFilterOptions}/>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>


      {isLoading && <h2>Loading...</h2>}


      {data.map((question, index) => {
      const { incorrect_answers, correct_answer } = question;
      const renderedAnswers = [...incorrect_answers, correct_answer]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
        return(
         
          <div key={index}>
            <p>{question.question}</p>

            {renderedAnswers.map((answer, idx) => (
              <p className="btn btn-outline-dark" key={idx}>
                {answer}
              </p>
            ))}

            <button>next ?</button>
          </div>
        )
        
    })} 
      
    </>
    )


}

  


export default GamePlay;