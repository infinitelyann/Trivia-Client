import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { gameIndex } from '../api/game'
import UserGamePlay from './UserGamePlay'

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
        
       
        <Card key= {game.id} className='m-4' style={{width: '400px', display: 'flex', padding: '5px'}}>
            <Card.Header>{ game.name }</Card.Header>
                <Card.Text>
                     This is a game 
                     { 
                        user && game.owner && user._id === game.owner._id 
                        ?
                        <>
                            <Link className='btn btn-info'
                            to={`/games/${game.id}`}>Edit</Link>
                           
                        </>
                        :
                      
                       <button id={game.id} onClick={handleClick} className='btn btn-info'>Play</button>

                        
                        // <UserGamePlay game={game}/>
                        
                    }
                    
                </Card.Text>
                
                <Card.Footer></Card.Footer>
        </Card>
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