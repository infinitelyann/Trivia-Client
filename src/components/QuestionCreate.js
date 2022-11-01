import React from 'react'
// import { Button, Checkbox, Form, Radio} from 'semantic-ui-react'
import { Button, Form } from 'react-bootstrap'


const QuestionCreate = (props, user) => {
        console.log(user)
//     state = {}
//   handleChange = (e, { value }) => this.setState({ value })
    return(

        <>

        <Form>
            <Form.Field>

            </Form.Field>
            <Form.Field>
            <label>Question:</label>
                <input placeholder='Enter your trivia question!' />
            </Form.Field>
            <Form.Field>
            <label>O:</label>
                <input placeholder='Enter your trivia question!' />
            </Form.Field>
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
            <Button>D</Button>
        </Form>
        </>
    )


    

}

export default QuestionCreate