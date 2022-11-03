import React, { useState } from 'react'
import { Form, Button, Container, Dropdown } from 'react-bootstrap'
// import {categories } from '../GameInputs'

const categories = [
    "Any",
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Science: Gadgets",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations",
  ]

const QuestionForm = (props) => {
    const { question, handleChange, handleSubmit } = props

        const [submittedQuestion, setQuestion] = useState({})
        const [category, setCategory] = useState("")
        const [difficulty, setDifficulty] = useState('Easy')
 
        const [incorrectAnswerSubmissions, setIncorrectAnswers] = useState([])
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


        const addIncorrectAnswers = (e) => {
            setIncorrectAnswers(
                incorrectAnswerSubmissions.push(e.target.value)
            )
            console.log(incorrectAnswerSubmissions)
        }

        
        const handleCategoryChange = (e) => {
            
            console.log(e.target)
            setCategory(e.target.innerText)
          }

        //// ..... prevIncorrect, ...updatedIncorrect
        
        const handleDifficultyChange = (e) => {
            console.log(question)
            console.log(e.target)
            setDifficulty(e.target.innerText)
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
                            onChange={handleChange}
                        />
                    <Form.Control
                            key="incorrect3"
                            placeholder='enter the incorrrect answer'
                            name='incorrectAnswerTwo'
                            id='incorrect answer'
                            onChange={handleChange}
                        />
                    <Form.Control 
                            key="incorrect4"
                            placeholder='enter the incorrrect answer'
                            name='incorrectAnswerThree'
                            id='incorrect answer'
                            onChange={handleChange}
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
                    value={question.question}
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
                />
            <>
                {incorrectAnswers}
            </>
     
            <Dropdown>
                <Dropdown.Toggle variant="light" id="categories" key="categories">
                    {category.length > 0 ? category : 'Choose Category'}
                </Dropdown.Toggle>

                <Dropdown.Menu value={category} onClick={handleCategoryChange} >
                    {categories.map((category, index) => (
                        <Dropdown.Item 
                        value={category} 
                        index={index}
                        onClick={handleChange}
                        name="category"
                        >
                            {category} 
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="difficulty">
                    Choose Difficulty
                </Dropdown.Toggle>
                        <Dropdown.Menu onClick={handleDifficultyChange}>
                            <Dropdown.Item key="easy"
                            value='Easy'
                            onClick={handleChange}
                            name="difficulty">
                                Easy
                            </Dropdown.Item>
                            <Dropdown.Item
                            value='Medium'
                            onClick={handleChange}
                            name="difficulty">
                                Medium
                            </Dropdown.Item>
                            <Dropdown.Item
                            value='Hard'
                            onClick={handleChange}
                            name="difficulty">
                                Hard
                            </Dropdown.Item>
                        </Dropdown.Menu>
            </Dropdown>
            <Button type='submit'>Add</Button>
            </Form>
        </Container>
    )
}

export default QuestionForm