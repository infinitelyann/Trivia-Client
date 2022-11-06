import React, { useState } from 'react'
import { Form, Button, Container, Dropdown } from 'react-bootstrap'
import { categories } from '../Categories'




const QuestionForm = (props) => {
    const { question, handleChange, handleSubmit, index, updateFieldChanged } = props

    
    // const [category, setCategory] = useState("")
    // const [difficulty, setDifficulty] = useState('Easy')
    // const [incorrectAnswerSubmissions, setIncorrectAnswers] = useState([])
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




        // make an if statement for showing more or answer boxes
        let incorrectAnswers 
        if(typeOfQuestion === 'Multiple Choice'){
                incorrectAnswers = 
                <>
                    <Form.Label>Enter the Incorrect Answer(s)</Form.Label>
                    <Form.Control 
                            key="incorrect2"
                            placeholder='enter the incorrrect answer'
                            name='incorrectAnswerOne'
                            id='incorrect answer'
                            onChange={updateFieldChanged}
                            
                            // value={question.incorrectAnswers[1]}
                            
                        />
                    <Form.Control
                            key="incorrect3"
                            placeholder='enter the incorrrect answer'
                            name='incorrectAnswerTwo'
                            id='incorrect answer'
                            onChange={updateFieldChanged}
                            
                            // value={question.incorrectAnswers[2]}
                        />
                    <Form.Control 
                            key="incorrect4"
                            placeholder='enter the incorrrect answer'
                            name='incorrectAnswerThree'
                            id='incorrectAnswerThree'
                            onChange={updateFieldChanged}
                           
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
                            onChange={updateFieldChanged}
                            index={0}
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
                    key='question'
                    value={question.question}
                    
                    required
                />
            <Form.Group controlId="questionType">
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
                    value={question.correctAnswer}
                    onChange={handleChange}
                    required
                    
                />
            <>
                {incorrectAnswers}
            </>
     

            <select className='m-2' value={question.category} name='category' onChange={handleChange} required>
            {categories.map((category, index) => (
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
            <select className='m-2'
            value={question.difficulty}
            onChange={handleChange}
            name='difficulty'
            required>
                <option
                    key="easy"
                    value='Easy'
                    // onClick={handleChange}
                    name="difficulty"
                >
                    Easy
                </option>
                <option
                    
                    // onClick={handleChange}
                    name="difficulty"
                >
                    Medium
                </option>
                <option
                    value='Hard'
                    // onClick={handleChange}
                    name="difficulty"
                >
                    Hard
                </option>
            </select>
            
           
            <br/>
            <Button type='submit'>Add</Button>
            
            </Form>
        </Container>
    )
}

export default QuestionForm