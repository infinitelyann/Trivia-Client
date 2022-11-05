import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import QuestionForm from './QuestionForm'
import EditQuestionForm from '../EditQuestionForm'
import { updateQuestion } from '../../api/question'


const EditQuestionModal = (props) => {
    const {user,  handleClose, msgAlert, triggerRefresh, game, show, index, showModal, questionForEdit } = props


    // console.log("edit", questionForEdit)
    const [question, setQuestion] = useState({})
    // const [updated, setUpdated] = useState(false)
    useEffect(()=> {
        // set state with question prop
        setQuestion(questionForEdit)
        // console.log("set question on", question)
    })

    

    const handleChange =  (e) => {
        // console.log(e.target.value)

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
        } else {
            
            setQuestion(prevQuestion => {
                /// set for difficulty
                let name = e.target.name
                let value = e.target.value
                
                if (value === undefined){
                    value = e.target.innerText 
                }
                
                if (question.type === 'True / False' && e.target.name === 'incorrectAnswerOne'){
                    value = [e.target.value]
                    name = 'incorrectAnswers'
                }
                if(value === 'True / False'){
                    console.log("huh?")
                    

                }
    
                const updatedQuestion = { [name]: value}
                return {
                    ...prevQuestion, ...updatedQuestion
                }  
            })
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
       
        console.log("the question",question)
        updateQuestion(user, game._id, question)
            .then(()=> handleClose())
            .then(()=> {
                msgAlert({
                    heading: "Question updated",
                    message: 'Question updated',
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

        <Modal show={ show } onHide = { handleClose } user={user}>
        <Modal.Header>
            <Modal.Title className='m2'>Edit this question</Modal.Title>
        
            
            </Modal.Header>
        
        <EditQuestionForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user}
            question={question}
            index = { index }
        />
    </Modal>
    )
}

export default EditQuestionModal