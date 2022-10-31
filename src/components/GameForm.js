import { Form, Button, Container } from 'react-bootstrap'

const GameForm = (props) => {
    const { game, handleChange, handleSubmit } = props
    return (
        <>
            <Container>
                <Form onSubmit={ handleSubmit }>
                    <Form.Label>Name of Game:</Form.Label>
                    <Form.Control
                        placeholder='What is the theme of this game'
                        name='name'
                        id='name'
                        value= { game.name }
                        onChange={ handleChange }
                    
                    />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>

        </>
    )
}

export default GameForm