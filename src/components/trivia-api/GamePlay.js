import { Link, useState } from 'react'
import GameInputs from "./GameInputs";

import GameCarousel from './GameCarousel'







const GamePlay = (props) => {

  const [resultSettings, setResultSettings] = useState({})
 
  const { setFilterOptions, err, handleClick, isLoading, data} = props;
  // const handleEnd = () =>{
  //   setData([])
  // }
  if (data.length < 1) {
    return (
      <div className='firstContainer'>
      <div className="inputsContainer">
      <p className='gameTitle'>Pick your set of questions:</p>
      
        <GameInputs setFilterOptions={setFilterOptions} />
        setFilterOptions(
          difficulty:
          category:
          amount:
        )
        {err && <h2>{err}</h2>}

        <button onClick={handleClick} className='fetchButton'>Start</button>

        {isLoading && <h2 className='loadingGame'>...</h2>}

        
        
    
       </div>
     </div>
     
    );
  } else {
    return (
      <>
        <GameCarousel  data={props.data} />
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
