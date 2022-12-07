import React, { useState } from 'react'
import { createGame } from '../api/game'
import { useNavigate } from 'react-router-dom'
import GameForm from './GameForm'

const GameCreate = ({user, msgAlert} ) => {
    const navigate = useNavigate()

    // setting the name of game to empty
    const defaultGame = {
        name: ''
    }

    // state
    const [game, setGame] = useState(defaultGame)

    // handling typing change
    const handleChange = (e) => {
        setGame(prevGame => {
            const updatedName = e.target.name
            let updatedValue = e.target.value // are we reassigning updateValue ? - use const 
// inconsistent whitespace
            const updatedGame = { [updatedName]: updatedValue}
            return { ...prevGame, ...updatedGame}
        })
    }

    //calling api on submit
    const handleCreateGame = (e) => {
        console.log("name?",e.target)
        e.preventDefault()
        createGame(game, user)
            .then(res => {navigate(`/games/${res.data.game._id}`)})
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Game Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <> {/* don't need fragment here since we only have 1 element ti return*/}
            <GameForm
                game = { game }
                handleChange = { handleChange }
                handleSubmit = { handleCreateGame }
            />

{/* inconsistent whitespace*/}
        </>
    )
}

export default GameCreate
