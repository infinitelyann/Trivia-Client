import { Link } from 'react'
import GameInputs from "./GameInputs";
import GameCarousel from './GameCarousel'
import { Card } from "react-bootstrap";
// import './gameInputs.css'

const GamePlay = (props) => {
 
  const { setFilterOptions, err, handleClick, isLoading, data, setData} = props;
  // const handleEnd = () =>{
  //   setData([])
  // }
  if (data.length < 1) {
    return (
      <div className='anotherContainer'>
      <div className="inputsContainer">
         <form className="gameForm">
        <GameInputs setFilterOptions={setFilterOptions} />
        {err && <h2>{err}</h2>}

        <button onClick={handleClick}>Fetch</button>

        {isLoading && <h2>Loading...</h2>}
        </form>
       </div>
       </div>
     
    );
  } else {
    return (
      <>
        <GameCarousel data={props.data} />
        <Card>
          <Card.Header>
            Finished?
          </Card.Header>
          <Card.Body>
           
             <button  className="btn btn-outline-dark">End Game</button>
            
          </Card.Body>
        </Card>

      </>
    );
  }
};

export default GamePlay;
