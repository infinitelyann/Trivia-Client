import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { gameIndex } from '../api/game'

const GameIndex = ({ user, msgAlert }) => {
    const [allGames, setAllGames] = useState([])

    useEffect(()=> {
        console.log("here",user)
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
        <Card key= {game.id}>
            <Card.Header>{ game.name }</Card.Header>
                <Card.Text>
                     This is a game 
                
                </Card.Text>
        </Card>
    ))

    return (
        <div>
            { gamePreview }
        </div>
    )
}

export default GameIndex