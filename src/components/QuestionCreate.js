import React from 'react'
// import { Button, Checkbox, Form, Radio} from 'semantic-ui-react'
import { Button, Form } from 'react-bootstrap'


const QuestionCreate = (props, user) => { // unused variable
        console.log(user)
//     state = {}
//   handleChange = (e, { value }) => this.setState({ value })
    return(
// poor use of fragment we only have 1 element to return 
        <>
{/* bad indentation */}
        <Form>
            <Form.Field>
{/* empty element  */}
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

// WHITE SPACEEEEEEEEEEEEEE
    

}

export default QuestionCreate