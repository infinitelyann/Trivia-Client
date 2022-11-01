import React, { useState } from 'react'
import { Form, Radio, Button, ButtonGroup, Container, ToggleButton } from 'react-bootstrap'

const QuestionForm = (props) => {
    const { question, handleChange, handleSubmit} = props

        const [checked, setRadioValue] = useState({typeOfQuestion: "", another: "another"})
        const { typeOfQuestion } = checked
        const handleButtonChange = (e) => {
            e.persist()
            console.log(e.target.value);
        
            setRadioValue(prevState => ({
              ...prevState,
              typeOfQuestion: e.target.value
            }))
          }

        // make an if statement for
        let incorrectAnswers 
        if(checked === 'Multiple Choice'){
                incorrectAnswers = 
                <>
                    <Form.Label>Enter the Incorrect Answer(s)</Form.Label>
                    <Form.Control 
                            placeholder='enter the incorrrect answer'
                            name='incorrect answer'
                            id='incorrect answer'
                            onChange={handleChange}
                        />
                    <Form.Control 
                            placeholder='enter the incorrrect answer'
                            name='incorrect answer'
                            id='incorrect answer'
                            onChange={handleChange}
                        />
                    <Form.Control 
                            placeholder='enter the incorrrect answer'
                            name='incorrect answer'
                            id='incorrect answer'
                            onChange={handleChange}
                        />

                </>       
        } else {
            incorrectAnswers =
            <>
                <Form.Label>Enter the Incorrect Answer(s)</Form.Label>
                        <Form.Control 
                                placeholder='enter the incorrrect answer'
                                name='incorrect answer'
                                id='incorrect answer'
                                onChange={handleChange}
                            />
            
            </>
        }

    return(
        <Container className='justify-content-center'>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Question:</Form.Label>
                <Form.Control 
                    placeholder='enter question'
                    name='question'
                    id='question'
                    onChange={handleChange}
                />
            <Form.Group controlId="kindOfStand">
                <Form.Check
                value="Multiple Choice"
                type="radio"
                aria-label="radio 1"
                label="Multiple Choice"
                onChange={handleButtonChange}
                checked={typeOfQuestion ==="Multiple Choice"}
                />
                <Form.Check
                value="True / False"
                type="radio"
                aria-label="radio 2"
                label="True / False"
                onChange={handleButtonChange}
                checked={typeOfQuestion ==="True / False"}
                />
            </Form.Group>
            <Form.Label>Enter the Answer</Form.Label>
            <Form.Control 
                    placeholder='enter the answer'
                    name='answer'
                    id='answer'
                    onChange={handleChange}
                />
            <>
                {incorrectAnswers}
            </>
            <Button type='submit'>Add</Button>
            </Form>
        </Container>
    )
}

export default QuestionForm