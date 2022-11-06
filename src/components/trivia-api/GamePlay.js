import { Link } from 'react'
import GameInputs from "./GameInputs";

import GameCarousel from './GameCarousel'







const GamePlay = (props) => {
 
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
     
      </>
    );
  }
};

export default GamePlay;
