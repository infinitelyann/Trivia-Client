import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { gameIndex } from '../api/game'
import UserGamePlay from './UserGamePlay'
import GameTitleEdit from './GameTitleEdit'
// unused imports
// this is the component to index all games
const UserGameIndex = ({ user, msgAlert }) => {
    
    const [playing, setPlaying] = useState(false)
    const [id, setId] = useState(null)
    //handleclick function to send user to UserGamePlay component
   const handleClick = (e) =>{// indentation 
    setPlaying(true)
    setId(e.target.id)

   // whitespace
   }
   
    //state .... put all your state goodness together at the TOP of the component, in class components you can't even try to do it another way. 
    const [allGames, setAllGames] = useState([])

    useEffect(()=> {
        // W S 
        gameIndex(user)
            .then(res => {
                setAllGames(res.data.games)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Index Games Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])
    //you have a collection reference in the singular here 
    const gamePreview = allGames.map(game => (
        
        <div style={{backgroundColor: '#240046', padding: '20px', display: 'flex'}}>
    <div>
        <Card key= {game.id} style={{width: '400px', display: 'flex', padding: '5px', justifyContent: 'center', textAlign: 'center', border: '2px solid lightgray'}}>
            <Card.Header style={{ backgroundColor: '#e1d5f2', borderRadius: '5px' }}>{ game.name }</Card.Header>
                <Card.Text> {/* is a fancy p tag, nesting other elements inside it is not good practice:see button, use another card element */}
                     This is a game 
                     <br/>
                     { 
                        user && game.owner && user._id === game.owner._id 
                        ? // when we have big blocks like this, it's better to use if else for legibility 
                        <>
                            <Link className='btn btn-info'
                            to={`/games/${game.id}`} style={{backgroundColor: 'white', border:'2px solid #50b4f2', marginTop: '10px'}}>Edit</Link>
                            <Link className='btn btn-info'
                            to={`/games/edit`} state={{game: game}} style={{backgroundColor: 'white', border:'2px solid #50b4f2', marginTop: '10px'}}> Edit Game Title </Link>
                        </>
                        :
                      
                       <button id={game.id} onClick={handleClick} className='btn' style={{backgroundColor: '#ffc300', border: '2px solid #ffc300', borderRadius: '10px'}}>Play</button>

                        
                        // <wwwwhhhhhhiiiiiiitttttteeeeee space/>
                        
                    }
                    
                </Card.Text>
                
                <Card.Footer></Card.Footer>{/* unused element */}
        </Card>
        </div>{/* T.T - indentation */}
        </div>
       
        
    ))
    if(!playing){

        return (
            <div>
                    { gamePreview }{/* T.T - indentation */}
                </div>
            )

}else{ // indentation !!!!!!!!!
    return(
        <> {/* T.T - indentation  V  */}
        <UserGamePlay user={user} msgAlert={msgAlert} id={id}/>
        </>
    )
}
}

export default UserGameIndex