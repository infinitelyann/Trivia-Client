import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { gameShow, gameDelete, gameUpdate } from '../api/game'
import NewQuestionModal from '../components/questions/NewQuestionModal'
// import EditQuestionModal from './questions/EditQuestionModal'
import ShowQuestion from './questions/ShowQuestion'


const UserGameShow = ({ user, msgAlert }) => {
    const [game, setGame] = useState(null)
    const [updated, setUpdated] = useState(false)
    const [questionModalShow, setQuestionModalShow] =useState(false)
    const [deleted, setDeleted] = useState(false)
    const [editGameTitleModalShow, setTitle] = useState(false)

    const  { id } = useParams()
    const navigate = useNavigate()

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
    let allQuestions

    if(deleted)navigate('/user-created-games')
    if(!game){
        return (
            <>
            Nothing here
            </>
        )
    }


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
                            show={questionModalShow}
                            msgAlert={msgAlert}
                            triggerRefresh={() => setUpdated(prev=> !prev)}
                            handleClose = {() => setQuestionModalShow(false)}
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
                            key="new Question"
                            onClick={() =>setQuestionModalShow(true)}>
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

        </>
    )
}

export default UserGameShow