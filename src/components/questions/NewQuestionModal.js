import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { createQuestion } from '../../api/question'
import QuestionForm from './QuestionForm'



const NewQuestionModal = (props) => {

    // properties
    const { user, show, game, handleClose, msgAlert, triggerRefresh } = props

    const [question, setQuestion] = useState(
        {
            question: null,
            correctAnswer: null,
            incorrectAnswers: [],
            category: null,
            type: "Multiple Choice",
            difficulty: null
        })

        
   
        
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
        
        
       
        
        createQuestion(user, game._id, question)
            .then(()=> {
                msgAlert({
                    heading: "Question added",
                    message: 'Question added to game!',
                    variant: 'success'
                })
            })
            .then(setQuestion(
                {
                    question: null,
                    correctAnswer: null,
                    incorrectAnswers: [],
                    category: null,
                    type: "Multiple Choice",
                    difficulty: null
                }
            ))
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
                <Modal.Title className='m2'>Add a question to your quiz</Modal.Title>
            
                
                </Modal.Header>
            
            <QuestionForm
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

export default NewQuestionModal