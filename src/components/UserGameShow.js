import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button, Modal } from 'react-bootstrap'
import { gameShow, gameDelete, gameUpdate } from '../api/game'
import NewQuestionModal from '../components/questions/NewQuestionModal'
// import EditQuestionModal from './questions/EditQuestionModal'
import ShowQuestion from './questions/ShowQuestion'
import GameTitleEditModal from './GameTitleEditModal'
import EditQuestionModal from './questions/EditQuestionModal'


const UserGameShow = ({ user, msgAlert }) => {
    
    // setter of game data
    const [game, setGame] = useState(null)
    const [updated, setUpdated] = useState(false)
    const [questionModalShow, setQuestionModalShow] =useState(false)
    const [editQuestionModal, showModal] = useState(false)
    const [currQuestion, setCurrQuestion] = useState(null)
    const [deleted, setDeleted] = useState(false)


    const [editGameTitleModalShow, setTitle] = useState(false)
    // modal state set to null

    const  { id } = useParams()
    const navigate = useNavigate()

    // api call for game data and setting state thereafter 
    useEffect(() => {
        gameShow(user, id)
            .then((res) => {
                setGame(res.data.game)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Game Failure' + error,
                    variant: 'danger'
                })
            })
    }, [updated])

    // delete function of game
    const handleGameDelete = () => {
        console.log(id)
        console.log(user)
        gameDelete(user, id)
            .then(()=> {
                setDeleted(true)
                msgAlert({
                    heading: 'Success',
                    message: 'Game deleted',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Game Delete Failure' + error,
                    variant: 'danger'
                })
            })
    }

    /// still needs work
    // const handleShowTitleModal = (e) => {
    //     console.log("clicked",e)
    //     setTitle(true)
    // }
    //set modal state
    const handleShowEditModal = (e) => {
        //useEffect will go here
    }
    // let allQuestions

    // navigating away on delete if state is true
    if(deleted)navigate('/user-created-games')

    // showing empty if no game / game state is false
    if(!game){
        return (
            <>
            Nothing here
            </>
        )
    }


    /// one modal in usergameshow to populate when 
    // use state of question [index]
    // function to trigger modal show, before that use the set function for it's state and pass it down to modal


    return (
        <>
            <Container className='m-2'>
                
                <Card>
                    <Card.Header>{game.name}</Card.Header>
                    <Card.Body>
                        
                        {/* {allQuestions} */}
                        <ShowQuestion 
                            user={user}
                            game={game}
                            // show={questionModalShow}
                            msgAlert={msgAlert}
                            triggerRefresh={() => setUpdated(prev=> !prev)}
                            handleClose = {() => setQuestionModalShow(false)}
                            // pass down show modal function
                            showModal = { showModal }
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            key="new Question"
                            onClick={() =>setQuestionModalShow(true)}>
                                New Question
                        </Button>
                        <Button
                            variant='warning'
                            key="Change title"
                            // onClick={() => handleShowTitleModal()}
                            >
                                Change Quiz Title
                        </Button>
                        <Button 
                            variant='danger' 
                            onClick={() => handleGameDelete()}>
                                Delete Quiz
                        </Button>
                    </Card.Footer>
                </Card>
                
            </Container>
           <NewQuestionModal 
                user={user}
                game={game}
                show={questionModalShow}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev=> !prev)}
                handleClose = {() => setQuestionModalShow(false)}
           /> 
           <GameTitleEditModal 
               user={user}
               game={game}
               show={editGameTitleModalShow}
               msgAlert={msgAlert}
               triggerRefresh={() => setUpdated(prev=> !prev)}
               handleClose = {() => setQuestionModalShow(false)} 
            />
            <EditQuestionModal 

            
            />
            {/* modal pass down state
                form is inside modal
            */}
        </>
    )
}

export default UserGameShow