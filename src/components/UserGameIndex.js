import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { gameIndex } from '../api/game'
import UserGamePlay from './UserGamePlay'
import GameTitleEdit from './GameTitleEdit'

// this is the component to index all games
const UserGameIndex = ({ user, msgAlert }) => {
    
    const [playing, setPlaying] = useState(false)
    const [id, setId] = useState(null)
    //handleclick function to send user to UserGamePlay component
   const handleClick = (e) =>{
    setPlaying(true)
    setId(e.target.id)

   
   }
   
    //state
    const [allGames, setAllGames] = useState([])

    useEffect(()=> {
        
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

    const gamePreview = allGames.map(game => (
        
        <div style={{backgroundColor: '#240046', padding: '20px', display: 'flex'}}>
    <div>
        <Card key= {game.id} style={{width: '400px', display: 'flex', padding: '5px', justifyContent: 'center', textAlign: 'center', border: '2px solid lightgray'}}>
            <Card.Header style={{ backgroundColor: '#e1d5f2', borderRadius: '5px' }}>{ game.name }</Card.Header>
                <Card.Text>
                     This is a game 
                     <br/>
                     { 
                        user && game.owner && user._id === game.owner._id 
                        ?
                        <>
                            <Link className='btn btn-info'
                            to={`/games/${game.id}`} style={{backgroundColor: 'white', border:'2px solid #50b4f2', marginTop: '10px'}}>Edit</Link>
                            <Link className='btn btn-info'
                            to={`/games/edit`} state={{game: game}}> Edit Game Title </Link>
                        </>
                        :
                      
                       <button id={game.id} onClick={handleClick} className='btn' style={{backgroundColor: '#ffc300', border: '2px solid #ffc300', borderRadius: '10px'}}>Play</button>

                        
                        // <UserGamePlay game={game}/>
                        
                    }
                    
                </Card.Text>
                
                <Card.Footer></Card.Footer>
        </Card>
        </div>
        </div>
       
        
    ))
    if(!playing){

        return (
            <div>
                    { gamePreview }
                </div>
            )

}else{
    return(
        <>
        <UserGamePlay user={user} msgAlert={msgAlert} id={id}/>
        </>
    )
}
}

export default UserGameIndex