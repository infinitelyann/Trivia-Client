import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { createQuestion } from '../../api/question'
import QuestionForm from './QuestionForm'


const NewQuestionModal = (props) => {

    // properties
    const { user, show, game, handleClose, msgAlert, triggerRefresh } = props

    const [question, setQuestion] = useState(
        {
            correctAnswer: "",
            incorrectAnswers: ["","",""],
            category: '',
            type: 'Multiple Choice',
            difficulty: ''
        })

 
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
                    console.log('hi there')
                    value = [e.target.value]
                    name = 'incorrectAnswers'
                }
                if(value === 'True / False'){
                    console.log("huh?")
                    // resetIncorrectAnswers()

                }
    
                const updatedQuestion = { [name]: value}
                return {
                    ...prevQuestion, ...updatedQuestion
                }  
            })
        }
    }
    const resetIncorrectAnswers = () => {
        setQuestion(prevQuestion => {
            const updatedQuestion = {
                'incorrectAnswers': ["","",""]
            }
            return {
                ...prevQuestion, ...updatedQuestion
            } 
        })
    }

    // const handleType = (e) => {
    //     setQuestion(prevQuestion => {
    //         const type = e.target.name
    //         let value = e.target.value

    //         const updatedQuestion = { [question]: value}
    //         return {
    //             ...prevQuestion, ...updatedQuestion
    //         }
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        // if ()
        // /// question values are not ===
        console.log("the question",question)
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

        <Modal show={ show } onHide = { handleClose } user={user}>
                <Modal.Title className='m2'>Add a question to your quiz</Modal.Title>
            <Modal.Header/>
            
            <QuestionForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                user={user}
                question={question}
            
            />
        </Modal>
    )

}

export default NewQuestionModal