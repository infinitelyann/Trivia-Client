import { Link, useState } from 'react'
import GameInputs from "./GameInputs";
import GameCarousel from './GameCarousel'

const GamePlay = (props) => {
 
  const { setFilterOptions, err, handleClick, isLoading, data, user, msgAlert } = props

  const [resultSettings, setResultSettings] = useState({})

  if (data.length < 1) {
    return (
      <div className='firstContainer'>
      <div className="inputsContainer">
      <p className='gameTitle'>Pick your set of questions:</p>
      
        <GameInputs setResultSettings={setResultSettings} setFilterOptions={setFilterOptions} />
     
        {err && <h2>{err}</h2>}

        <button onClick={handleClick} className='fetchButton'>Start</button>

        {isLoading && <h2 className='loadingGame'>...</h2>}

       </div>
     </div>
     
    )
  } else {
    return (
      <>
        <GameCarousel user={user} msgAlert={msgAlert} data={props.data} resultSettings={resultSettings} />     
      </>
    )
  }
}

export default GamePlay;