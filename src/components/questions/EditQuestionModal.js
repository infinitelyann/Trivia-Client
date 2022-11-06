import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { updateQuestion } from '../../api/question'
import EditQuestionForm from './QuestionForm'



const EditQuestionModal = (props) => {

    // properties
    const { user, show, game, handleClose, msgAlert, triggerRefresh } = props

    const gameId = game._id
    const [question, setQuestion] = useState(props.question)

        
   
        
        const updateFieldChanged = e => {
            
            if(e.target.name.includes('incorrectAnswer') && question.type === 'Multiple Choice'){

                let updatedIncorrect = question.incorrectAnswers
                switch (e.target.name){
                    case "incorrectAnswerOne":
                        updatedIncorrect[0]=e.target.value
                        break
                    case "incorrectAnswerTwo":
                        updatedIncorrect[1]=e.target.value
                        break
                    case "incorrectAnswerThree":
                        updatedIncorrect[2]=e.target.value
                        break
                }
                setQuestion(prevQuestion => {
    
                    const updatedQuestion = { ['incorrectAnswers']: updatedIncorrect}
                    return {
                        ...prevQuestion, ...updatedQuestion
                    }  
                })
            } else if (e.target.name.includes('incorrectAnswer') && question.type === 'True / False'){
                
                let updatedIncorrect = []
                console.log(updatedIncorrect)
                switch (e.target.name){
                    case "incorrectAnswerOne":
                        updatedIncorrect[0]=e.target.value
                        
                        break
                   
                }
                setQuestion(prevQuestion => {
    
                    const updatedQuestion = { ['incorrectAnswers']: updatedIncorrect}
                    return {
                        ...prevQuestion, ...updatedQuestion
                    }  
                })
            }
        } 

        
        const handleChange = (e) => {
        
            setQuestion(
                prevQ => {
                    const name = e.target.name
                    let value = e.target.value

                    const updatedQ = {
                        [name]: value
                    }
                    return {
                        ...prevQ, ...updatedQ
                    }
                }
            )          
        }



    const handleSubmit = (e) => {
        e.preventDefault()
        
        
       console.log("here",question)
        
        updateQuestion(user, gameId, question)
            .then(()=> {
                msgAlert({
                    heading: "Question added",
                    message: 'Question added to game!',
                    variant: 'success'
                })
            })
            
            .then(() => triggerRefresh())
            .then(()=> handleClose())
            .catch(
                msgAlert({
                    heading: "Error",
                    message: 'Something went wrong',
                    variant: 'danger'
                })
            )          
    }

    return(

        <Modal show={ show } onHide = { handleClose } user={user}>
            <Modal.Header>
                <Modal.Title className='m2'>Edit this question</Modal.Title>
            
                
                </Modal.Header>
            
            <EditQuestionForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                user={user}
                question={question}

                setQuestion = { setQuestion }
                updateFieldChanged = { updateFieldChanged }
            />
        </Modal>
    )

}

export default EditQuestionModal