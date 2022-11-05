import React, { useState } from 'react'
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
            incorrectAnswers: [null],
            category: null,
            type: null,
            difficulty: null
        })

        const [formQ, setFormQ] = useState(null)
        const [formType, setFormType] = useState({type:'Multiple Choice'})
        const [formA, setFormA] = useState(null)
        const [formIncA1, setFormIncA1] = useState(null)
        const [formIncA2, setFormIncA2] = useState(null)
        const [formIncA3, setFormIncA3] = useState(null)
        const [formCat, setFormCat] = useState({category:'Any'})
        const [formDiff, setFormDiff] = useState({difficulty:'Easy'})

        
        
        const handleChange = (e) => {
            if(e.target.name === 'question'){
                setFormQ(prevQ => {
                    const updatedName = e.target.name
                    let updatedValue = e.target.value

                    const updatedQ = {[updatedName]:updatedValue }
                    return {...prevQ, updatedQ}
                }
                ) 
            }
            if(e.target.name === 'type'){
                setFormType(prevType => {
                    const updatedName = e.target.name
                    let updatedValue = e.target.value

                    const updatedType = {[updatedName]:updatedValue }
                    return {...prevType, ...updatedType}
                }
                ) 
            }
            if(e.target.name === 'correctAnswer'){
                setFormA(prevA => {
                    const updatedName = e.target.name
                    let updatedValue = e.target.value

                    const updatedA = {[updatedName]:updatedValue }
                    return {...prevA, updatedA}
                }
                ) 
            }
            if(e.target.name === 'incorrectAnswerOne'){
                console.log(e.target.value)
                setFormIncA1(prevInc1 => {
                    const updatedName = e.target.name
                    let updatedValue = e.target.value

                    const updatedInc1 = {[updatedName]:updatedValue }
                    return {...prevInc1, updatedInc1}
                })
            }
            if(e.target.name === 'incorrectAnswerTwo'){
                setFormIncA2(prevInc2 => {
                        const updatedName = e.target.name
                        let updatedValue = e.target.value
    
                        const updatedInc2 = {[updatedName]:updatedValue }
                        return {...prevInc2, updatedInc2}
                    })
            }
            if(e.target.name === 'incorrectAnswerThree'){
                setFormIncA3(prevInc3 => {
                        const updatedName = e.target.name
                        let updatedValue = e.target.value
    
                        const updatedInc3 = {[updatedName]:updatedValue }
                        return {...prevInc3, updatedInc3}
                    })
            }
            if(e.target.name === 'category'){
                setFormCat(prevCat => {
                    const updatedName = e.target.name
                        let updatedValue = e.target.value
                        
                        const updatedCat = {
                            [updatedName]:updatedValue
                        }
                        return {
                            ...prevCat, ...updatedCat
                        }
                })
            }
            if(e.target.name === 'difficulty'){
                setFormDiff(prevDiff => {
                    const updatedName = e.target.name
                        let updatedValue = e.target.value
                        
                        const updatedDiff = {
                            [updatedName]:updatedValue
                        }
                        return {
                            ...prevDiff, ...updatedDiff
                        }
                })
            }

            // console.log(formQ.updatedQ.question)
            // console.log(formA.updatedA.correctAnswer)
            // console.log(formType.type)
            // console.log(formIncA1.updatedInc1.incorrectAnswerOne)
            // console.log(formIncA2)
            // console.log(formIncA3)
            // console.log(formCat.category)
         
        }
   
    // question: null,
    // correctAnswer: null,
    // incorrectAnswers: [null],
    // category: null,
    // type: null,
    // difficulty: null

    // use effect
    // change the bool of submitted to true
    // 

    const handleQuestionObject = () => {
        let incArr
        if(formType.type === 'Multiple Choice'){
            incArr = [formIncA1.updatedInc1.incorrectAnswerOne, formIncA2.updatedInc2.incorrectAnswerTwo, formIncA3.updatedInc3.incorrectAnswerThree]
        } else {
            incArr = [formIncA1.updatedInc1.incorrectAnswerOne]
        }
       
        setQuestion(
            
            {
                question: formQ.updatedQ.question,
                correctAnswer: formA.updatedA.correctAnswer,
                incorrectAnswers: incArr,
                type: formType.type,
                category: formCat.category,
                difficulty: formDiff.difficulty,
            }
        )

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let incArr
        if(formType.type === 'Multiple Choice'){
            incArr = [formIncA1.updatedInc1.incorrectAnswerOne, formIncA2.updatedInc2.incorrectAnswerTwo, formIncA3.updatedInc3.incorrectAnswerThree]
        } else {
            incArr = [formIncA1.updatedInc1.incorrectAnswerOne]
        }
       
        setQuestion(
            
            {
                question: formQ.updatedQ.question,
                correctAnswer: formA.updatedA.correctAnswer,
                incorrectAnswers: incArr,
                type: formType.type,
                category: formCat.category,
                difficulty: formDiff.difficulty,
            }
        )
        


        console.log("the question",question)


        createQuestion(user, game._id, question)
        .then(()=> {
            msgAlert({
                heading: "Question added",
                message: 'Question added to game!',
                variant: 'success'
            })
        })
        .then(() => triggerRefresh())
        .then(()=> handleClose(
            setQuestion({
                question: null,
                correctAnswer: null,
                incorrectAnswers: [null],
                category: null,
                type: null,
                difficulty: null
            })
        ))
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
                handleQuestionObject={handleQuestionObject}
            />
        </Modal>
    )

}

export default NewQuestionModal