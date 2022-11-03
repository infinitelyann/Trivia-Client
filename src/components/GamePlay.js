import { useState } from "react";
import { Form } from "react-bootstrap";
import GameInputs from "./GameInputs";
import { getOpenDBUrl } from "../utils/openDB";




const GamePlay = (props) => {
  const { setFilterOptions, err, handleClick, isLoading, data} = props
  // const [filterOptions, setFilterOptions] = useState({});
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [err, setErr] = useState("");
  
  // if(data == ''){

  // const handleClick = async () => {
  //   if (filterOptions === {}) return;
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(getOpenDBUrl(filterOptions), {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json;charset=utf-8",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }

  //     const result = await response.json();

  //     setData(result.results);
  //   } catch (err) {
  //     setErr(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };


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


  // }else{
  //   return(
      
  //   <div>
   
  //   {data.map((question, index) => {
  //     const { incorrect_answers, correct_answer } = question;
  //     const renderedAnswers = [...incorrect_answers, correct_answer]
  //       .map((value) => ({ value, sort: Math.random() }))
  //       .sort((a, b) => a.sort - b.sort)
  //       .map(({ value }) => value);
  //       return(
         
  //         <div key={index}>
  //           <p>{question.question}</p>

  //           {renderedAnswers.map((answer, idx) => (
  //             <p className="btn btn-outline-dark" key={idx}>
  //               {answer}
  //             </p>
  //           ))}

  //           <button>next ?</button>
  //         </div>
  //       )
        
  //   })} 
  // </div>
  //   )
  // }
}

  


export default GamePlay;