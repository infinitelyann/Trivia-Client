import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditQuestionModal from './EditQuestionModal'

// this might be used later to display individual questions??
const ShowQuestion = (props) => {
    const {  game, user, msgAlert,  } = props

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
        
        
        </>
    )
        ))
}

export default ShowQuestion