import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { createQuestion } from '../../api/question'
import QuestionForm from './QuestionForm'


const NewQuestionModal = (props) => {


    const { user, show, game, handleClose, msgAlert, triggerRefresh } = props
   
    const [question, setQuestion] = useState({})

    const handleChange =  (e) => {
        setQuestion(prevQuestion => {
            const question = e.target.name
            let value = e.target.value

            const updatedQuestion = { [question]: value}
            
            return {
                ...prevQuestion, ...updatedQuestion
            }
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createQuestion(user, game._id, question)
            .then(()=> handleClose())
            .then(()=> {
                msgAlert({
                    heading: "Question added",
                    message: 'Question added to game!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(
                msgAlert({
                    heading: "Error",
                    message: 'Something went wrong',
                    variant: 'danger'
                })
            )
    }
    return(
        <Modal show={ show } onHide = { handleClose }>
            <Modal.Header/>
            <QuestionForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}

            />
        </Modal>
    )

}

export default NewQuestionModal