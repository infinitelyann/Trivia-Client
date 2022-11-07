import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { gameIndex } from '../api/game'
import UserGamePlay from './UserGamePlay'
import GameTitleEdit from './GameTitleEdit'

// this is the component to index all games
const UserGameIndex = ({ user, msgAlert }) => {
    const [playing, setPlaying] = useState(false)
    //handleclick function to send user to UserGamePlay component
   
   
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
                            <Link className='btn btn-info'
                            to={`/games/edit`} state={{game: game}}> Edit Game Title </Link>
                        </>
                        :
                        null
                        
                        
                    }
                    
                </Card.Text>
                
                    <UserGamePlay game={game}/>
                <Card.Footer></Card.Footer>
        </Card>
    ))
    
        return (
            <div>
                { gamePreview }
            </div>
        )

   

}

export default UserGameIndex