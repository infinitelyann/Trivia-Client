import { Link, useState } from 'react'
import GameInputs from "./GameInputs";
import GameCarousel from "./GameCarousel";
import { Card } from "react-bootstrap"; 


const GamePlay = (props) => {

  const [resultSettings, setResultSettings] = useState({})
 
  const { setFilterOptions, err, handleClick, isLoading, data} = props;
  // const handleEnd = () =>{
  //   setData([])
  // }
  if (data.length < 1) {
    return (
      <>
        <GameInputs setFilterOptions={setFilterOptions} setResultSettings={setResultSettings}/>
        {err && <h2>{err}</h2>}

        <button onClick={handleClick}>Fetch data</button>

        {isLoading && <h2>Loading...</h2>}
      </>
    );
  } else {
    return (
      <>
        <GameCarousel  data={props.data} resultSettings={resultSettings} />
        <Card>
          <Card.Header>
            Finished?
          </Card.Header>
          <Card.Body>
           
             <button  className="btn btn-outline-dark">End Game</button>
            
          </Card.Body>
        </Card>

      </>
    )
  }
}

export default GamePlay;
