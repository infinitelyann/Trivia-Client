import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { gameShow, gameDelete } from '../api/game'
import NewQuestionModal from '../components/questions/NewQuestionModal'
import EditQuestionModal from './questions/EditQuestionModal'
import ShowQuestion from './questions/ShowQuestion'


const UserGameShow = ({ user, msgAlert }) => {
    const [game, setGame] = useState(null)
    const [updated, setUpdated] = useState(false)
    const [questionModalShow, setQuestionModalShow] = useState(false)
    const showEdit = [questionModalShow, setQuestionModalShow]
    const [editModalShow, setEditModalShow]= useState(false)
    const [deleted, setDeleted] = useState(false)
    const [index, setIndex]= useState(null)
    const [questionForEdit, setQuestion] = useState(null)
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

    useEffect(() => {
        if (index !== null){
            setQuestion(game.questions[index])
            console.log("q for edit on user game show",questionForEdit)
        }
        })

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
        <div style={{backgroundColor: '#240046', height: '100vh', padding: '50px'}}>
            <Container style={{textAlign: 'center'}}>
                
                <Card className='m-3' style={{fontWeight: '20px', padding: '10px'}}>
                    <Card.Header style={{}}>{game.name}</Card.Header>
                    <Card.Body>
                        
                        {/* {allQuestions} */}
                        <ShowQuestion 
                            user={user}
                            game={game}
                            show={setEditModalShow}
                            msgAlert={msgAlert}
                            triggerRefresh={() => setUpdated(prev=> !prev)}
                            handleClose = {() => setQuestionModalShow(false)}
                            setIndex={setIndex}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            key="new Question"
                            onClick={() =>setQuestionModalShow(true)}>
                                New Question
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
           <EditQuestionModal 
                key="edit question modal"
                show = { editModalShow }
                showEdit =  {showEdit}
                msgAlert={msgAlert}
                user={user}
                game={game}
                index={index}
                triggerRefresh={() => setUpdated(prev=> !prev)}
                handleClose = {() => setEditModalShow(false)}
                questionForEdit = {questionForEdit}
            />

        </div>
    )
}

export default UserGameShow