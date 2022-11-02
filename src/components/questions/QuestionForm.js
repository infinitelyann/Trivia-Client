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
    const { question, handleChange, handleSubmit, handleType } = props

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

          const handleCategoryChange = (e) => {
            e.persist()
            
            console.log(e.target)
            setCategory(e.target.innerText, console.log(category))
            // console.log(category)
          }

          const handleDifficultyChange = (e) => {
            e.persist()
            
            console.log(e.target)
            setDifficulty(e.target.innerText, console.log(category))
            // console.log(category)
          }

        // make an if statement for
        let incorrectAnswers 
        if(typeOfQuestion === 'Multiple Choice'){
                incorrectAnswers = 
                <>
                    <Form.Label>Enter the Incorrect Answer(s)</Form.Label>
                    <Form.Control 
                            key="incorrect2"
                            placeholder='enter the incorrrect answer'
                            name='incorrect answer'
                            id='incorrect answer'
                            onChange={handleChange}
                        />
                    <Form.Control
                            key="incorrect3"
                            placeholder='enter the incorrrect answer'
                            name='incorrect answer'
                            id='incorrect answer'
                            onChange={handleChange}
                        />
                    <Form.Control 
                            key="incorrect4"
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
                            key="incorrect1"
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
                    value={question.question}
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
     
            <Dropdown>
                <Dropdown.Toggle variant="light" id="categories">
                    Choose Category
                </Dropdown.Toggle>

                <Dropdown.Menu value={category} onChange={handleCategoryChange}>
                    {categories.map((category, index) => (
                        <Dropdown.Item 
                        value={category} 
                        index={index}
                        onClick={handleCategoryChange}
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
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                Easy
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Medium
                            </Dropdown.Item>
                            <Dropdown.Item>
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