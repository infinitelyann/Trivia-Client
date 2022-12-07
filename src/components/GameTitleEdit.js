import React, { useState } from "react"
import { gameIndex, gameUpdate } from "../api/game"
import { useNavigate, useLocation } from "react-router-dom"
import GameForm from "./GameForm"
// unused imports
const GameTitleEdit = (props) => {
    const location = useLocation()
    const { game } = location.state
	const navigate = useNavigate()
	const { gameId } = props
// unused imports
	const [gameTitle, setGameTitle] = useState()
// unused state variable
    console.log(game.name) // put in a use effect to run on mount, otherwise will run too early
	const handleChange = (e) => {
// inconsistent whitespace
		setGameTitle(prevTitle => {
            console.log(game.name)
			let updatedName = e.target.name
			let updatedValue = e.target.value

            game.name = e.target.value
            console.log("this is game.name",game.name)
            
			const updatedTitle = { [updatedName]: updatedValue }
            console.log("value",e.target.value)
            console.log("title",updatedTitle)

			return {  ...prevTitle, ...updatedTitle,  }
		})
	}

	const handleUpdate = (e) => {
		e.preventDefault()
// whhhiiiiittttte space
		gameUpdate(game, game._id)
			.then((res) => {
				navigate(`/games/${game._id}`)
			})
			.catch(console.error)
	}

	return (
		<GameForm
			game={game}
			handleChange={handleChange}
			handleSubmit={handleUpdate}
            // onChange={handleChange}
		/>
	)
}

export default GameTitleEdit
