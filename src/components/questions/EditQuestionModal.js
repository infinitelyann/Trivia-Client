import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import GameForm from '../GameForm'
import QuestionForm from './QuestionForm'
import { updateQuestion } from '../../api/question'
import { gameShow } from '../../api/game'


const EditQuestionModal = (props) => {
    const {user,  handleClose, msgAlert, triggerRefresh, game, show, index } = props

    let gameId = game._id
    console.log("gameId",gameId)
    console.log("index modal", index)
    /// do a get request for individual question and setstate to that
    // query for a single question, get req for game, extract that single question
    // that will have the id which can be used for api delete req
    /// get request for game and filter
    /// api call goes here
    
    const [question, setQuestion] = useState({})
    // const [updated, setUpdated] = useState(false)

    useEffect(() => {
        gameShow( user, gameId)
            .then((res) => {
                let currQuestion = res.data.game.questions[index]
                setQuestion(currQuestion)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Question Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const handleChange =  (e) => {
        console.log(e.target.value)
        console.log(question.difficulty, "change?")
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
                <Modal.Title className='m2'>Add a question to your quiz</Modal.Title>
            <Modal.Header/>
            
            <QuestionForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                user={user}
                question={question}
                index={index}
            />
        </Modal>
    )
}

export default EditQuestionModal