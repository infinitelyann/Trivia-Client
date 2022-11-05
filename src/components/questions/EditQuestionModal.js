import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import QuestionForm from './QuestionForm'
import { updateQuestion } from '../../api/question'


const EditQuestionModal = (props) => {
    const {user,  handleClose, msgAlert, triggerRefresh, game, show, index, showModal, questionForEdit } = props

    console.log("lool",game)
    // console.log("edit", questionForEdit)
        const [question, setEditQuestion] = useState(
            // {
            //     question: game.questions[index].question
                
            // }

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
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            let incArr
            if(formType.type === 'Multiple Choice'){
                incArr = [formIncA1.updatedInc1.incorrectAnswerOne, formIncA2.updatedInc2.incorrectAnswerTwo, formIncA3.updatedInc3.incorrectAnswerThree]
            } else {
                incArr = [formIncA1.updatedInc1.incorrectAnswerOne]
            }
           
            setEditQuestion(
                
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
    
    
            updateQuestion(user, game._id, question)
            .then(()=> {
                msgAlert({
                    heading: "Question added",
                    message: 'Question added to game!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .then(()=> handleClose(
                setEditQuestion({
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
            <Modal.Title className='m2'>Edit this question</Modal.Title>
        
            
            </Modal.Header>
        
        <QuestionForm
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