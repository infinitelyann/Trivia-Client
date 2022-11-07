import { Form, Button, Container } from 'react-bootstrap'
import QuestionCreate from './QuestionCreate'


const GameForm = (props) => {


    const { game, handleChange, handleSubmit } = props


        return (
            <div style={{backgroundColor: '#240046', height: '100vh', padding: '50px'}}>
                <Container style={{border: '2px solid lightgray', borderRadius: '10px', textAlign: 'center', height: '200px', padding: '30px'}}>
                    <Form onSubmit={ handleSubmit }>
                        <Form.Label style={{color: 'white', fontSize: '25px'}}>Name of Game:</Form.Label>
                        <Form.Control
                            placeholder='What is the theme of this game'
                            name='name'
                            id='name'
                            value= { game.name }
                            onChange={ handleChange }
                            style={{width: '600px', margin: '0 auto', border: '5px solid lightgray'}}
                        />
              
                        <Button type='submit' style={{border: '2px solid #ffc300', backgroundColor: '#ffc300', color: 'black'}}>Submit</Button>
                    </Form>
                </Container>
    
            </div>
        )
    
}

export default GameForm