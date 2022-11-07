import { Form, Button, Container } from 'react-bootstrap'
import QuestionCreate from './QuestionCreate'


const GameForm = (props) => {


    const { game, handleChange, handleSubmit, gameTitle } = props

        return (
            <>
                <Container>
                    <Form onSubmit={ handleSubmit } className='m-2'>
                        <Form.Label>Name of Game:</Form.Label>
                        <Form.Control
                            placeholder='What is the theme of this game'
                            name='name'
                            id='name'
                            value= { gameTitle }
                            onChange={ handleChange }
                        
                        />
              
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Container>
    
            </>
        )
    
}

export default GameForm