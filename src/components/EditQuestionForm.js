import React, { useState } from 'react'
import { Form, Button, Container, Dropdown } from 'react-bootstrap'
import { categories } from './Categories'



const EditQuestionForm = (props) => {
    const  { question, handleChange, handleSubmit, index } = props

    const [incorrectAnswerSubmissions, setIncorrectAnswers] = useState([]) // totally unused 
    const [checked, setRadioValue] = useState({typeOfQuestion: "Multiple Choice", another: "another"})
    const { typeOfQuestion } = checked

    /// setting state for radio buttons
    const handleButtonChange = (e) => {
        e.persist()
        console.log(e.target.value);

        setRadioValue(prevState => ({
            ...prevState,
            typeOfQuestion: e.target.value
        }))
        }

    let incorrectAnswers 
    if(typeOfQuestion === 'Multiple Choice'){
            incorrectAnswers = 
            <>
                <Form.Label>Enter the Incorrect Answer(s)</Form.Label>
                <Form.Control 
                        key="incorrect2"
                        placeholder='enter the incorrrect answer' // spelling rrr
                        name='incorrectAnswerOne'
                        id='incorrect answer'
                        onChange={handleChange}
                        // value={question.incorrectAnswers[1]}
                        
                    />
                <Form.Control
                        key="incorrect3"
                        placeholder='enter the incorrrect answer'
                        name='incorrectAnswerTwo'
                        id='incorrect answer'
                        onChange={handleChange}
                        // value={question.incorrectAnswers[2]}
                    />
                <Form.Control 
                        key="incorrect4"
                        placeholder='enter the incorrrect answer'
                        name='incorrectAnswerThree'
                        id='incorrect answer'
                        onChange={handleChange}
                        // value={question.incorrectAnswers[3]}
                        // required
                    />

            </>       
    } else {
        incorrectAnswers =
        <>
            <Form.Label>Enter the Incorrect Answer(s)</Form.Label>
                <Form.Control 
                        key="incorrect1"
                        placeholder='enter the incorrrect answer'
                        name='incorrectAnswerOne'
                        id='incorrect answer'
                        onChange={handleChange}
                        value={question.incorrectAnswers[0]}
                    />
        </>
    }

    return(
// indentation is off from the start 
    <Container className='justify-content-center'>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Question:</Form.Label>
            <Form.Control 
                placeholder='enter question'
                name='question'
                id='question'
                onChange={handleChange}
                key='question'
                value={question.question}
                required
            />
        <Form.Group controlId="questionType">{/* fix indentation  */}
            <Form.Check
            value="Multiple Choice"
            type="radio"
            aria-label="radio 1"
            label="Multiple Choice"
            name='type'
            onClick={handleButtonChange}
            onChange={handleChange}
            checked={typeOfQuestion ==="Multiple Choice"}
            key='Multiple Choice'
            />
            <Form.Check
            value="True / False"
            type="radio"
            aria-label="radio 2"
            label="True / False"
            name='type'
            onClick={handleButtonChange}
            onChange={handleChange}
            checked={typeOfQuestion ==="True / False"}
            />
        </Form.Group>
        <Form.Label>Enter the Correct Answer</Form.Label>
        <Form.Control 
                placeholder='enter the answer'
                name='correctAnswer'
                id='answer'
                onChange={handleChange}
                required
                value={question.correctAnswer}
            />{/* incorrect indentation  */}
        <>{/* bad use of shards, we don't need them here to my knowledge */}
            {incorrectAnswers}
        </>
 {/* inconsistent white space */}
    
        <select className='m-2' required>
        {categories.map((category, index) => ( // bad indentation
                    <option
                    value={category} 
                    index={index}
                    onClick={handleChange}
                    name="category"
                    
                    >
                        {category} 
                    </option>
                    
                ))}
        </select>
        <br/>
        <select className='m-2' required>
                <option // bad indentation 
                    key="easy"
                    value='Easy'
                    onClick={handleChange}
                    name="difficulty"
                >
                    Easy
                </option>
                <option
                    value='Medium'
                    onClick={handleChange}
                    name="difficulty"
                >
                    Medium
                </option>
                <option
                    value='Hard'
                    onClick={handleChange}
                    name="difficulty"
                >
                    Hard
                </option>
            </select>
        <br/>
        <Button type='submit'>Add</Button>
            </Form>
        </Container>
        // T.T indentation ? 
)}

export default EditQuestionForm