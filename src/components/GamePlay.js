import { useState } from "react";
import { Form } from "react-bootstrap";

const GamePlay = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const answerClick = () => {};

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://opentdb.com/api.php?amount=20", {
        method: "GET",
        headers: {
          Accept: "application/json;charset=utf-8",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("result is: ", JSON.stringify(result, null, 4));

      setData(result.results);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h2>Loading...</h2>}

      {data.map((question, index) => {
       
          const { incorrect_answers, correct_answer } = question;
          const renderedAnswers = [...incorrect_answers, correct_answer]
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)

          return (
            <div key={index}>
              <div className="card w-3">
                <div className="card-header">
                  <p dangerouslySetInnerHTML={{ __html: question.question }} />
                </div>
                <div className="card-body">
                  {renderedAnswers.map((answer, idx) => (
                    <p className="btn btn-outline-dark" key={idx}>
                      {answer}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default GamePlay;
