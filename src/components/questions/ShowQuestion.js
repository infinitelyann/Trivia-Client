import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditQuestionModal from './EditQuestionModal'
import { deleteQuestion } from '../../api/question'
import { gameDelete } from '../../api/game'


// this might be used later to display individual questions??
const ShowQuestion = (props) => {
    const {  game, user, msgAlert, triggerRefresh, handleClose, question, show  } = props

    const [editModalShow, setEditModalShow] = useState(false)
    const [element, setElement] = useState()

    const handleGameDelete = (e) => {
        console.log("deleted", game._id, "id", e.target.id)
        deleteQuestion( game._id, e.target.id)
            .then(() => {
                msgAlert({
                    heading: 'Question deleted!',
                    message: 'Question deleted!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                })
            })
    }

    const handleClick = (e) => {
        setElement((e.target.id))
        // console.log("id",e.target)
        setEditModalShow(true)
        // console.log(element, "the element")
    }

    if(!game){
        return (
            <>
            Nothing here
            </>
        )
    }
    let allQuestions
    return (
        allQuestions = game.questions.map((question, index) => (
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
            <EditQuestionModal 
                user={user}
                show={editModalShow}
                handleClose={()=> setEditModalShow(false)}
                triggerRefresh={triggerRefresh}
                msgAlert={msgAlert}
                question={'put id here'}
                index={element}
                game={game}
            />
            </div>
        
            <Button
                className="m-2" 
                variant="warning"
                // value={question._id}
                id={index}
                
                onClick={handleClick}  
                >
                Edit this Question
            </Button>
            <Button
                className='m-2'
                variant='danger'
                onClick={(e) => handleGameDelete(e)}
                id={question._id}
                gameId={game._id}
            >
                Delete Question
            </Button>
        </>
    )
        ))
}

export default ShowQuestion