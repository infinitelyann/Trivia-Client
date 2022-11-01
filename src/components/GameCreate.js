import React, { useState } from 'react'
import { createGame } from '../api/game'
import { useNavigate } from 'react-router-dom'
import GameForm from './GameForm'

const GameCreate = ({user, msgAlert} ) => {
    const navigate = useNavigate()

    const defaultGame = {
        name: ''
    }

    const [game, setGame] = useState(defaultGame)

    const handleChange = (e) => {


        setGame(prevGame => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            const updatedGame = { [updatedName]: updatedValue}
            return { ...prevGame, ...updatedGame}
        })
    }

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
        <>
            <GameForm
                game = { game }
                handleChange = { handleChange }
                handleSubmit = { handleCreateGame }
            />

        </>
    )
}

export default GameCreate
