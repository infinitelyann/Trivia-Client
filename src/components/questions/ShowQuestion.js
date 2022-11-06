import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditQuestionModal from './EditQuestionModal'
import { deleteQuestion } from '../../api/question'
import { gameDelete } from '../../api/game'


// this might be used later to display individual questions??
const ShowQuestion = (props) => {
    const {  game, user, msgAlert, triggerRefresh, handleClose, question, showModal, editQuestionModal, setIndex } = props


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
    let clickedIndex
    // calls the setter for data 
    // passes index for curr question clicked
    const handleClick = (e) => {
        
        showModal(true)
        setIndex(e.target.id)
        clickedIndex = e.target.id
    }
    // useEffect(() => {
    //     index(clickedIndex)
    // })
    

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
 
            </div>
        
            <Button
                className="m-2" 
                variant="warning"
                key={index + ' edit'}
                // value={question._id}
                id={index}
                onClick={(e) => handleClick (e)}  
                setIndex = {(e) => e.target.id}
                >
                Edit this Question
            </Button>
            <Button
                className='m-2'
                variant='danger'
                onClick={(e) => handleGameDelete(e)}
                id={question._id}
                gameId={game._id}
                key= {index + ' delete'}
            >
                Delete Question
            </Button>
        </>
    )
        ))
}

export default ShowQuestion