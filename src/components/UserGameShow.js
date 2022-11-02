import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { gameShow, gameDelete } from '../api/game'
import QuestionCreate from './QuestionCreate'
import NewQuestionModal from '../components/questions/NewQuestionModal'


const UserGameShow = ({ user, msgAlert }) => {
    const [game, setGame] = useState(null)
    const [updated, setUpdated] = useState(false)
    const [questionModalShow, setQuestionModalShow] =useState(false)
    const [deleted, setDeleted] = useState(false)

    const  { id } = useParams()
    // const navigate = useNavigate()

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
    }, [])

    const handleGameDelete = () => {
        console.log("delete?")
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
    if (!allQuestions === null){
        <>
            Nothing here yet
        </>
    } 

    if(!game){
        return (
            <>
            Nothing here
            </>
        )
    }
    allQuestions = game.questions.map((question, index) => (
        // this needs to be changed to its own component
        <>
            <div key={question._id}>
                <h1 key={index}>Question {index+1}</h1>
                <h3 key={index + "question"}>
                    {question.question}
                </h3>
                {question.correctAnswer}
                {question.incorrectAnswers}
                {question.category}
                {question.difficulty}
                {question.type}
            </div>
        </>
    ))

    return (
        <>
            <Container className='m-2'>
                
                <Card>
                    <Card.Header>{game.name}</Card.Header>
                    <Card.Body>
                        
                        {allQuestions}
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            onClick={() =>setQuestionModalShow(true)}>
                                New Question
                      </Button>
                      <Button variant='danger' onClick={() => handleGameDelete()}>
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