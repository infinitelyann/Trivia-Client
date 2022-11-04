import React,  { useState } from "react";
import { Button, Modal, Container, Form } from 'react-bootstrap'
import { propTypes } from "react-bootstrap/esm/Image";
import { gameUpdate } from "../api/game";
import GameForm from "./GameForm";

const GameTitleEditModal = (props) => {
    const { user, handleClose, msgAlert, triggerRefresh, game, name, show } = props
    console.log(game.name)
    const [gameTitle, setGame] = useState(game.name)
    
    const handleChange = (e) => {
        setGame(prevGame => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            const updatedGame = { [updatedName]:  updatedValue}
            return { ...prevGame, ...updatedGame}
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault(
            gameUpdate(game, user)
                .then(() => handleClose())
                .then(() => {
                    msgAlert({
                        heading: 'Success',
                        message: 'Updated game name!',
                        variant: 'success'
                    })
                })
                .then(()=> triggerRefresh())
                .catch((error) => {
                    msgAlert({
                        heading: 'Failure',
                        message: 'Update Game Failure' + error,
                        variant: 'danger'
                    })
                })
        )
    }
    
    return (
        <>
            <Modal show = {show}>

                
                    <Container>
                        <Form onSubmit={ handleUpdate } className='m-2'>
                            <Form.Label>Name of Game:</Form.Label>
                            <Form.Control
                                placeholder='What is the theme of this game'
                                name='name'
                                id='name'
                                value= { gameTitle }
                                onChange={ handleChange }
                            
                            />
                
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Container>
        
                
            </Modal>
        </>
    )

}
export default GameTitleEditModal