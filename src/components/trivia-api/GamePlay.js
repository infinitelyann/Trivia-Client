import { Link, useEffect, useState } from 'react'
import GameInputs from "./GameInputs";
import GameCarousel from './GameCarousel'

const GamePlay = (props) => {
 
  const { setFilterOptions, err, handleClick, isLoading, data, user, userID, setUserID, msgAlert } = props

  const [resultSettings, setResultSettings] = useState({})
  const [key, setKey] = useState(0)


  setUserID(user._id)


  console.log("THIS IS USER ID FROM GAMEPLAY!!!!!!!: ", userID)

  useEffect(() => {
    console.log("SET KEY FIRED!!!!!!!!!!!!!!")
  }, [key])

  if (data.length < 1) {
    return (
      <div className='firstContainer'>
      <div className="inputsContainer">
      <p className='gameTitle'>Pick your set of questions:</p>
      
        <GameInputs key={key} setResultSettings={setResultSettings} setFilterOptions={setFilterOptions} />
     
        {err && <h2>{err}</h2>}

        <button onClick={handleClick} className='fetchButton'>Start</button>

        {isLoading && <h2 className='loadingGame'>...</h2>}

       </div>
     </div>
     
    )
  } else {
    return (
      <>
        <GameCarousel key={key} setKey={setKey} userID={userID} msgAlert={msgAlert} data={props.data} resultSettings={resultSettings} />     
      </>
    )
  }
}

export default GamePlay;